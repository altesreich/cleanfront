export function trackWhatsAppClick(data?: any) {
  try {
    if ((window as any).__VCELER_ANALYTICS__) {
      // If Vercel analytics or other analytics lib is available, use a global hook if present
      ;(window as any).__VCELER_ANALYTICS__.track?.('whatsapp_click', data)
    }
  } catch (err) {
    // fallback noop
    // console.log('trackWhatsAppClick', data)
  }
}
