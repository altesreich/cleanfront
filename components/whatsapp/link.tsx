'use client'

import React from 'react'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { trackWhatsAppClick } from '@/lib/analytics'

type WhatsAppLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  message?: string
}

export function WhatsAppLink({ message, children, onClick, target = '_blank', rel = 'noopener noreferrer', ...props }: WhatsAppLinkProps) {
  const href = getWhatsAppUrl(message ?? '')

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    try {
      trackWhatsAppClick({ action: 'whatsapp_click', label: message ?? (typeof children === 'string' ? children : 'button') })
    } catch (_) {}

    if (onClick) onClick(e)
  }

  return (
    <a {...props} href={href} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  )
}

export default WhatsAppLink
