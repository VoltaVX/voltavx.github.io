// Progressive enhancement only: all pages and native email work without JS.
const filters = document.querySelector<HTMLElement>('.m-filter-nav');
if (filters) {
 filters.hidden = false;
 const cards = [...document.querySelectorAll<HTMLElement>('[data-project-category]')];
 const count = document.createElement('p'); count.className = 'm-filter-count'; count.setAttribute('aria-live', 'polite'); filters.after(count);
 const update = (value: string) => {
  cards.forEach(card => card.hidden = value !== 'All work' && card.dataset.projectCategory !== value);
  filters.querySelectorAll<HTMLButtonElement>('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === value)));
  count.textContent = `${cards.filter(card => !card.hidden).length} of ${cards.length} projects shown · ${value}`;
 };
 filters.querySelectorAll<HTMLButtonElement>('button').forEach(button => button.addEventListener('click', () => update(button.dataset.filter ?? 'All work')));
 update('All work');
}
const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
if (form) {
 const mail = form.querySelector<HTMLAnchorElement>('[data-action="mailto"]')!;
 const gmail = form.querySelector<HTMLAnchorElement>('[data-action="gmail"]')!;
 const copy = form.querySelector<HTMLButtonElement>('[data-action="copy"]')!;
 const status = form.querySelector<HTMLElement>('[data-form-status]')!;
 const message = () => {
  const data = new FormData(form);
  return {subject: `Portfolio inquiry: ${data.get('topic')}`, body: `${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`};
 };
 const update = () => { const {subject,body}=message(); mail.href=`mailto:voltavxofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; gmail.href=`https://mail.google.com/mail/?${new URLSearchParams({view:'cm',fs:'1',to:'voltavxofficial@gmail.com',su:subject,body})}`; };
 form.addEventListener('input',update); update(); gmail.hidden=false; copy.hidden=false;
 for (const link of [mail,gmail]) link.addEventListener('click',event=>{if(!form.reportValidity()){event.preventDefault();return;}status.textContent='Your message is prepared. Complete sending in your email app.';});
 form.addEventListener('submit',event=>{event.preventDefault();if(form.reportValidity())mail.click();});
 copy.addEventListener('click',async()=>{if(!form.reportValidity())return;try{const m=message();await navigator.clipboard.writeText(`To: voltavxofficial@gmail.com\nSubject: ${m.subject}\n\n${m.body}`);status.textContent='Email address and message copied. Paste them into your email app.';}catch{status.textContent='Copy is unavailable. Select your message and copy it manually, or use an email link.';}});
}
