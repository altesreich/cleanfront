export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactDetail {
  icon: React.ComponentType<{ className?: string }>
  title: string
  details: string[]
}