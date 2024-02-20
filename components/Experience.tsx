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
    <div className="mb-6 sm:mb-12 block">
      <div className="grid sm:grid-cols-experiences sm:gap-10">
        <p className="text-sm pt-2 italic">{date}</p>
        <div>
          <p className="text-lg">
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
          <p className="">{subtitle}</p>

          <ul className="opacity-70 text-sm py-2 list-disc pl-4 flex flex-col gap-2 leading-relaxed">
            {contentBr.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mt-2 sm:mt-4">
        {tags.split(", ").map((t) => (
          <span key={t} className="bg-slate-500 rounded-md px-1.5 text-sm">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
