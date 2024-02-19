// import Image from "next/image"

import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react"

// import rs from "./images/avatar_corner.jpeg"

const experiences = [
  {
    title: "Afya - iClinic",
    subtitle: "Senior Frontend Engineer",
    date: "Mar 2023 - Jan 2024",
    tags: "React, Typescript, Javascript, NextJS, styled-components, CSS, ShadCDN, Tailwind, Eslint, Prettier, Vite, Vitest, Jest, Cypress, Docker, Mixpanel, Growthbook, Google Ad Manager",
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
    <div className="flex min-h-svh flex-col lg:flex-row lg:items-center lg:justify-between lg:relative max-w-screen-xl mx-auto px-6 p-6 md:p-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:w-1/2 lg:sticky lg:top-0 lg:self-start lg:py-24 lg:max-h-screen lg:h-svh flex flex-col justify-between mb-3 md:mb-0">
          <div>
            <h1 className="text-3xl md:mb-2">Rafael Siqueira</h1>
            <h2 className="text-lg mb-2 md:mb-8">
              Software Engineer, Web Developer
            </h2>
          </div>

          {/* <Image
            src={rs}
            alt="Rafael Siqueira"
            className="rounded-full w-1/2"
          /> */}

          <ul className="flex gap-2 justify-center md:justify-normal">
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

        <main className="lg:w-1/2 lg:py-24 flex flex-col gap-6 md:gap-8">
          <section id="intro" className="flex flex-col">
            <p>
              Introduction Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Qui labore minus temporibus quas aliquam provident iste at
              nesciunt fuga molestias ut sed a quod, ea quidem soluta nulla,
              totam adipisci?
            </p>
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
    <div className="mb-6 md:mb-12 block">
      <div className="md:grid md:grid-cols-experiences md:gap-10">
        <p className="text-sm pt-2 italic float-right md:float-none">{date}</p>
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

          <div className="flex flex-wrap gap-1 mt-4">
            {tags.split(", ").map((t) => (
              <span key={t} className="bg-slate-500 rounded-md px-1">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
