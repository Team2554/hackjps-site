import type { AnchorHTMLAttributes } from "react"
import { assertSafeHref, EXTERNAL_LINK_REL } from "@/lib/external-links"

type SafeExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string
}

export function SafeExternalLink({ href, rel, ...props }: SafeExternalLinkProps) {
  const safeHref = assertSafeHref(href)

  return (
    <a
      {...props}
      href={safeHref}
      target="_blank"
      rel={rel ?? EXTERNAL_LINK_REL}
    />
  )
}
