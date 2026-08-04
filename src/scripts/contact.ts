const form = document.querySelector<HTMLFormElement>('[data-contact-form]');

if (form) {
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const mailtoLink = form.querySelector<HTMLAnchorElement>('[data-action="mailto"]');
  const smsLink = form.querySelector<HTMLAnchorElement>('[data-action="sms"]');
  const gmailLink = form.querySelector<HTMLAnchorElement>('[data-action="gmail"]');
  const copyButton = form.querySelector<HTMLButtonElement>('[data-action="copy"]');
  const targetEmail = form.dataset.email?.trim() ?? '';
  const targetPhone = (form.dataset.phone ?? '').replace(/[^0-9+]/g, '');
  const maxNativeMailtoLength = 1800;
  let nativeBodyOmitted = false;

  const getMessageValues = () => {
    const values = new FormData(form);
    return {
      topic: String(values.get('topic') ?? 'Project').slice(0, 100),
      name: String(values.get('name') ?? '').slice(0, 100),
      email: String(values.get('email') ?? '').slice(0, 254),
      message: String(values.get('message') ?? '').slice(0, 3000),
    };
  };

  const updateLinks = () => {
    const { topic, name, email, message } = getMessageValues();
    const subject = `Portfolio inquiry: ${topic}`;
    const body = `Name: ${name}\r\nEmail: ${email}\r\nTopic: ${topic}\r\n\r\nMessage:\r\n${message}`;
    const fullMailto = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (mailtoLink) {
      nativeBodyOmitted = fullMailto.length > maxNativeMailtoLength;
      mailtoLink.href = nativeBodyOmitted
        ? `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}`
        : fullMailto;
    }

    if (smsLink && targetPhone) {
      const smsBody = `Portfolio inquiry: ${topic}\nFrom: ${name} (${email})\n\n${message}`;
      const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
      smsLink.href = `sms:${targetPhone}${isAppleMobile ? '&' : '?'}body=${encodeURIComponent(smsBody)}`;
    }

    if (gmailLink) {
      gmailLink.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    if (status && nativeBodyOmitted) {
      status.textContent = 'This message is too long for a reliable native-app link. The default mail app will open with the subject; use Gmail Web or Copy Email & Text to keep the full message.';
    } else if (status && status.dataset.copyStatus !== 'true') {
      status.textContent = '';
    }
  };

  form.addEventListener('submit', (event) => event.preventDefault());
  form.addEventListener('input', updateLinks);
  form.addEventListener('change', updateLinks);

  copyButton?.addEventListener('click', async () => {
    if (!form.reportValidity()) return;
    updateLinks();

    const { topic, name, email, message } = getMessageValues();
    const copiedText = `To: ${targetEmail}\r\nSubject: Portfolio inquiry: ${topic}\r\n\r\nName: ${name}\r\nEmail: ${email}\r\nTopic: ${topic}\r\n\r\nMessage:\r\n${message}`;
    const originalLabel = copyButton.textContent;

    try {
      await navigator.clipboard.writeText(copiedText);
      copyButton.textContent = 'Copied to Clipboard! ✓';
      if (status) {
        status.dataset.copyStatus = 'true';
        status.textContent = 'Email address and message text copied to clipboard.';
      }
      window.setTimeout(() => {
        copyButton.textContent = originalLabel;
        if (status) {
          delete status.dataset.copyStatus;
          status.textContent = nativeBodyOmitted
            ? 'The default mail app will open without the long message body; the full message is still available through Gmail Web or Copy Email & Text.'
            : '';
        }
      }, 3000);
    } catch {
      if (status) status.textContent = 'Clipboard access was blocked. Select and copy the email address shown above.';
    }
  });

  updateLinks();
}
