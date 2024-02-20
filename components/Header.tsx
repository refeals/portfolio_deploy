import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { HeaderLink } from "@/components/HeaderLink"

import rs from "@/app/images/avatar_corner.jpeg"

export function Header() {
  return (
    <header className="md:flex-1 md:sticky md:top-0 md:self-start md:py-24 md:max-h-screen md:h-svh mb-20 sm:mb-0">
      <div className="flex flex-col gap-8">
        <div className="sm:px-2">
          <h1 className="text-4xl mb-2 font-semibold">Rafael Siqueira</h1>
          <h2 className="text-lg mb-2 font-medium">
            Software Engineer, Frontend Engineer
          </h2>
        </div>

        <Image
          src={rs}
          alt="Rafael Siqueira"
          className="rounded-full w-1/2 self-center"
        />

        <ul className="flex gap-2 justify-between sm:px-4">
          <HeaderLink
            Icon={Github}
            url="https://github.com/refeals"
            name="Github"
          />
          <HeaderLink
            Icon={Linkedin}
            url="https://www.linkedin.com/in/rafaelsiqueira-dev/"
            name="Linkedin"
          />
          <HeaderLink
            Icon={Mail}
            url="mailto:rafaelsiqueira.dev@gmail.com"
            name="Email"
          />
        </ul>
      </div>
    </header>
  )
}
