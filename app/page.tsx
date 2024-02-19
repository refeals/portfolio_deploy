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
    contentBr: [
      "Criação de novas funcionalidades e upgrades para o gerenciamento de prescrições, impactando mais de 10 mil usuários",
      "Liderança na refatoração da base de código legado para novas tecnologias, resultando em melhorias na experiência do usuário",
      "Implementação de um micro-front-end para anúncios de banner B2B",
    ],
    contentEn: [
      "Created new features and upgrades for prescription management, impacting 10k+ users",
      "Led the refactoring of legacy codebase to new technologies, improving user experience",
      "Implemented a micro-frontend for B2B banner ads",
    ],
  },
  {
    title: "Uber Eats",
    subtitle: "Senior Frontend Engineer",
    date: "Apr 2022 - Feb 2023",
    tags: "React, Typescript, Flow, Javascript, styled-components, CSS, Eslint, Prettier, Base Web, i18n",
    url: "https://www.ubereats.com/",
    contentBr: [
      "Criação de novas funcionalidades e upgrades para o carrinho e as funcionalidades de carrinho múltiplo do Uber Eats, impactando usuários em todo o mundo",
      "Liderança na refatoração para melhorar a base de código e organizar as importações de código e a estrutura de arquivos, abordando mais de 5000 arquivos e melhorando a experiência do desenvolvedor",
    ],
    contentEn: [
      "Created new features and upgrades for the cart and multi-cart features of Uber eats, impacting users all over the globe",
      "Led the refactoring to improve codebase and organize code imports and file structure, handling 5000+ files and improving developer experience",
    ],
  },
  {
    title: "Cornershop by Uber",
    subtitle: "Senior Frontend Engineer",
    date: "Apr 2021 - Apr 2022",
    tags: "React, Typescript, Javascript, NextJS, styled-components, CSS, Eslint, Prettier, Docusaurus, Webpack, Python, Django, i18n",
    url: "https://cornershopapp.com/",
    contentBr: [
      "Melhoria no layout da página de destino e na experiência do usuário para o processo de inscrição de compradores, com impacto em centenas de milhares de usuários em todo o mundo",
      "Criação de novas funcionalidades e upgrades para produtos internos de gerenciamento de compradores",
      "Participação na criação de um sistema de design interno para os produtos da empresa",
      "Liderança na criação de um projeto de documentação para melhorar a experiência e a integração dos desenvolvedores",
    ],
    contentEn: [
      "Improved landing page’s layout and user experience for shoppers’ sign up process, with over hundreds of thousands of users impacted all over the globe",
      "Created new features and upgrades for internal products for shopper management",
      "Was involved in the creation of an internal design system for the company’s products",
      "Led the creation of a documentation project in order to improve developer experience and onboarding",
    ],
  },
  {
    title: "Onesight Events",
    subtitle: "Frontend Engineer, Product Manager",
    date: "Nov 2018 - Jan 2021",
    tags: "React, Typescript, Javascript, PWA, Jquery, CSS, Firebase, PHP, DBeaver, NodeJS",
    url: "https://events.onesight.global/",
    contentBr: [
      "Liderança de equipe na criação de novas funcionalidades e na melhoria das existentes no aplicativo móvel, backend e gerenciador administrativo",
      "Criação de uma PWA para o sistema, impactando mais de 10 mil usuários",
      "Criação de uma plataforma de streaming para conferências online com chat em tempo real e pesquisas",
    ],
    contentEn: [
      "Led a team to create new features and improve existing ones on the mobile app, backend and admin manager",
      "Created a PWA for the system, impacting over 10k users",
      "Created a streaming platform for online conferences with real time chat and surveys",
    ],
  },
  {
    title: "Ringa",
    subtitle: "Trainee, Full-Stack Engineer",
    date: "Jan 2017 - Nov 2018",
    tags: "React, Javascript, Jquery, CSS, Ruby, Ruby on Rails, PHP, NodeJS",
    url: "https://ringa.com.br/",
    contentBr: [
      "Participação na criação e atualização de projetos para clientes",
    ],
    contentEn: ["Was involved in creating and upgrading projects for clients"],
  },
]

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col lg:flex-row lg:items-center lg:justify-between lg:relative max-w-screen-xl mx-auto px-2 py-4 md:p-0">
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
          <section id="intro" className="flex flex-col gap-2">
            <p>
              Dediquei 7+ anos de experiência profissional ao desenvolvimento
              web, com foco no frontend e com especialização em React JS.
            </p>
            <p>
              Cientista da computação por formação na USP de São Carlos, sou
              apaixonado por programação. Aprendi a programar ainda quando
              criança e desde então venho aperfeiçoando meu conhecimento.
            </p>
            <p>
              Acredito no uso da tecnologia para melhorar a vida das pessoas!
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
  contentBr: string[]
}

const Experience = ({
  title,
  subtitle,
  date,
  tags,
  url,
  contentBr,
}: ExperienceProps) => {
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

          <ul className="opacity-70 text-sm py-2 list-disc pl-4 flex flex-col gap-2">
            {contentBr.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

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
