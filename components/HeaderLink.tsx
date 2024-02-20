import { LucideIcon } from "lucide-react"

type HeaderLinkProps = {
  Icon: LucideIcon
  url: string
  name?: string
}

export function HeaderLink({ Icon, url, name }: HeaderLinkProps) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="flex gap-2 items-center px-4 py-2 w-fit rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
      >
        <Icon size={20} />
        <span>{name}</span>
      </a>
    </li>
  )
}
