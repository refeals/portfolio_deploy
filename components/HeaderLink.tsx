import { LucideIcon } from "lucide-react"

type HeaderLinkProps = {
  Icon: LucideIcon
  url: string
  name?: string
}

export function HeaderLink({ Icon, url, name }: HeaderLinkProps) {
  return (
    <li className="w-full">
      <a
        href={url}
        target="_blank"
        rel="noopener"
        className="flex items-center px-12 py-2 gap-2 rounded-full hover:bg-white hover:bg-opacity-90 hover:text-primary hover:border-primary transition-colors duration-300 border-1 border-white border-solid"
      >
        <Icon size={20} />
        <span>{name}</span>
      </a>
    </li>
  )
}
