import { Github, Linkedin, Mail } from "lucide-react"

export function Header() {
  return (
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
          <a href="https://github.com/refeals" target="_blank" rel="noopener">
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
  )
}
