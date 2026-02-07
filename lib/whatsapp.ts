export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+12146772559'
export const ENABLE_GLOBAL_WHATSAPP_REDIRECT =
  process.env.NEXT_PUBLIC_ENABLE_GLOBAL_WHATSAPP_REDIRECT
    ? process.env.NEXT_PUBLIC_ENABLE_GLOBAL_WHATSAPP_REDIRECT === 'true'
    : true

export function getWhatsAppUrl(message = '') {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
