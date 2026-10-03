// Set VITE_N8N_WEBHOOK_URL in .env — never hardcode the endpoint.
export const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || ''
