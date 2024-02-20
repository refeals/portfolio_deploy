import { ExternalLink } from "lucide-react"

type ExperienceProps = {
  title: string
  subtitle: string
  date: string
  tags: string
  url: string
  contentBr: string[]
}

export function Experience({
  title,
  subtitle,
  date,
  tags,
  url,
  contentBr,
}: ExperienceProps) {
  return (
    <div className="mb-8 sm:mb-12 block">
      <div className="grid sm:grid-cols-experiences gap-1 sm:gap-x-8 sm:gap-y-2">
        <p className="text-sm pt-2 italic font-medium order-2 sm:order-1">
          {date}
        </p>
        <div className="order-1 sm:order-2">
          <p className="text-xl leading-relaxed">
            <a
              href={url}
              target="_blank"
              rel="noopener"
              className="flex gap-2 items-center"
            >
              <span className="font-bold">{title}</span>
              <ExternalLink size={18} />
            </a>
          </p>
          <p className="font-semibold">{subtitle}</p>
        </div>

        <ul className="opacity-75 text-md py-2 list-disc pl-4 flex flex-col gap-2 leading-relaxed sm:col-[2/4] order-3">
          {contentBr.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1 mt-1 sm:mt-0 sm:col-[2/4] order-4 text-justify">
          {tags.split(", ").map((t) => (
            <span key={t} className="bg-slate-500 rounded-md px-1 text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
