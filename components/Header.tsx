import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { HeaderLink } from "@/components/HeaderLink"

import rs from "@/app/images/avatar_corner.jpeg"

export function Header() {
  return (
    <header className="lg:flex-1 lg:sticky lg:top-0 lg:self-start lg:py-24 lg:max-h-screen lg:h-svh mb-20 sm:mb-0">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl mb-2 font-semibold">Rafael Siqueira</h1>
          <h2 className="text-lg mb-2 font-medium">
            Software Engineer, Frontend Engineer
          </h2>
          {/* <p className="underline mb-2">
            <a href="mailto:rafaelsiqueira.dev@gmail.com">
              rafaelsiqueira.dev@gmail.com
            </a>
          </p> */}
        </div>

        <Image
          src={rs}
          alt="Rafael Siqueira"
          className="rounded-full w-1/2 self-center"
        />

        <ul className="flex gap-2 justify-between px-2 sm:px-4">
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
