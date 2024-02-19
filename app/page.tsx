// import Image from "next/image"

import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

// import rs from "./images/avatar_corner.jpeg"

const experiences = [
  {
    title: "Afya - iClinic",
    subtitle: "Senior Frontend Engineer",
    date: "Mar 2023 - Jan 2024",
    tags: "React, Typescript, Javascript, NextJS, styled-components, CSS, Eslint, Prettier, Docusaurus, Webpack, Python, Django, i18n",
    url: "https://iclinic.com.br/",
  },
  {
    title: "Uber Eats",
    subtitle: "Senior Frontend Engineer",
    date: "Apr 2022 - Feb 2023",
    tags: "React, Typescript, Flow, Javascript, styled-components, CSS, Eslint, Prettier, Base Web, i18n",
    url: "https://www.ubereats.com/",
  },
  {
    title: "Cornershop by Uber",
    subtitle: "Senior Frontend Engineer",
    date: "Apr 2021 - Apr 2022",
    tags: "React, Typescript, Javascript, NextJS, styled-components, CSS, Eslint, Prettier, Docusaurus, Webpack, Python, Django, i18n",
    url: "https://cornershopapp.com/",
  },
  {
    title: "Onesight Events",
    subtitle: "Frontend Engineer, Product Manager",
    date: "Nov 2018 - Jan 2021",
    tags: "React, Typescript, Javascript, PWA, Jquery, CSS, Firebase, PHP, DBeaver, NodeJS",
    url: "https://events.onesight.global/",
  },
  {
    title: "Ringa",
    subtitle: "Trainee, Full-Stack Engineer",
    date: "Jan 2017 - Nov 2018",
    tags: "React, Javascript, Jquery, CSS, Ruby, Ruby on Rails, PHP, NodeJS",
    url: "https://ringa.com.br/",
  },
]

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col lg:flex-row lg:items-center lg:justify-between lg:relative max-w-screen-xl mx-auto px-6">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start lg:py-24 lg:max-h-screen flex flex-col justify-between lg:h-svh">
          <div>
            <h1 className="text-3xl mb-2">Rafael Siqueira</h1>
            <h2 className="text-lg mb-8">Software Engineer, Web Developer</h2>
          </div>

          {/* <Image
            src={rs}
            alt="Rafael Siqueira"
            className="rounded-full w-1/2"
          /> */}

          <ul className="flex gap-2">
            <li className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
              <a
                href="https://github.com/refeals"
                target="_blank"
                rel="noopener"
              >
                <Github />
              </a>
            </li>
            <li className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
              <a
                href="https://www.linkedin.com/in/rafaelsiqueira-dev/"
                target="_blank"
                rel="noopener"
              >
                <Linkedin />
              </a>
            </li>
            <li className="p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors">
              <a href="mailto:rafaelsiqueira.dev@gmail.com">
                <Mail />
              </a>
            </li>
          </ul>
        </header>

        <main className="lg:w-1/2 lg:py-24 flex flex-col gap-8">
          <section id="intro" className="flex flex-col">
            <h3 className="text-2xl">Introdução</h3>

            <div className="flex">
              <p>
                Introduction Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Qui labore minus temporibus quas aliquam provident iste at
                nesciunt fuga molestias ut sed a quod, ea quidem soluta nulla,
                totam adipisci?
              </p>
            </div>
          </section>

          <section id="experiences" className="flex flex-col">
            <div className="mt-2">
              {experiences.map((xp) => (
                <Experience key={xp.title} {...xp} />
              ))}
            </div>

            <a
              href="/rafaelsiqueira-resume-en.pdf"
              download="rafaelsiqueira-resume-en"
              className="flex gap-2 items-center underline"
            >
              Baixar currículo em PDF <Download size={18} />
            </a>
          </section>
        </main>
      </div>
    </div>
  )
}

type ExperienceProps = {
  title: string
  subtitle: string
  date: string
  tags: string
  url: string
}

const Experience = ({ title, subtitle, date, tags, url }: ExperienceProps) => {
  return (
    <a href={url} target="_blank" rel="noopener" className="mb-12 block">
      <div className="grid grid-cols-experiences gap-10">
        <p className="text-sm pt-2 italic">{date}</p>
        <div>
          <p className="text-lg flex gap-2 items-center">
            <span className="font-bold">{title}</span>
            <ExternalLink size={18} />
          </p>
          <p className="">{subtitle}</p>

          <div className="flex flex-wrap gap-1 mt-4">
            {tags.split(", ").map((t) => (
              <span key={t} className="bg-slate-500 rounded-md px-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}
