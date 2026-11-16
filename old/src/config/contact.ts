const emailAddress = (import.meta.env.PUBLIC_EMAIL_ADDRESS || '').trim();

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)) {
  throw new Error('PUBLIC_EMAIL_ADDRESS must be set to a valid email address in .env.');
}

export const contactEmail = emailAddress;
export const contactPhone = (import.meta.env.PUBLIC_PHONE_NUMBER || '').replace(/[^0-9+]/g, '');
