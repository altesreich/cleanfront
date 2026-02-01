'use client'

import { useEffect } from 'react'
import { getWhatsAppUrl, ENABLE_GLOBAL_WHATSAPP_REDIRECT } from '@/lib/whatsapp'

export default function GlobalWhatsAppRedirect() {
  useEffect(() => {
    if (!ENABLE_GLOBAL_WHATSAPP_REDIRECT) return

    let trackFn: ((payload?: any) => void) | undefined
    import('../../lib/analytics')
      .then((mod) => { trackFn = (mod as any).trackWhatsAppClick })
      .catch(() => {})

    function handler(e: MouseEvent) {
      if (e.defaultPrevented) return
      // only left clicks without modifier keys
      if (e.button !== 0) return
      if ((e as any).metaKey || (e as any).ctrlKey || (e as any).shiftKey || (e as any).altKey) return

      const target = (e.target as Element)
      const btn = target.closest('[data-slot="button"]') as HTMLElement | null
      if (!btn) return

      // opt-out attribute
      if (btn.getAttribute('data-whatsapp-ignore') === 'true') return

      // if there's an anchor already pointing to WhatsApp, don't intercept
      const anchor = btn.closest('a') as HTMLAnchorElement | null
      if (anchor && anchor.href && (anchor.href.includes('wa.me') || anchor.href.includes('api.whatsapp'))) return

      const custom = btn.getAttribute('data-whatsapp-message')
      const text = custom ?? ((btn.textContent || btn.getAttribute('aria-label') || '').trim())
      const message = text ? `Hola, me interesa: ${text}` : 'Hola, me interesa sus servicios.'
      const url = getWhatsAppUrl(message)

      e.preventDefault()
      window.open(url, '_blank')

      if (trackFn) {
        try { trackFn({ action: 'whatsapp_click', label: text || 'button' }) } catch (_) {}
      }
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}
