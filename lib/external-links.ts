const ALLOWED_PROTOCOLS = new Set(["https:", "http:", "mailto:", "tel:"])

export const EXTERNAL_LINK_REL = "noopener noreferrer"

export function assertSafeHref(href: string): string {
  if (href.startsWith("/")) {
    return href
  }

  const parsed = new URL(href)
  if (!ALLOWED_PROTOCOLS.has(parsed.protocol)) {
    throw new Error(`Unsupported link protocol: ${parsed.protocol}`)
  }

  return href
}
