import { Experience } from "@/components/Experience"
import { experiencesData } from "@/data/experiences"
import { Download } from "lucide-react"

export function Main() {
  return (
    <main className="lg:w-1/2 lg:py-24 flex flex-col gap-6 md:gap-8">
      <section id="intro" className="flex flex-col gap-2">
        <p>
          Dediquei 7+ anos de experiência profissional ao desenvolvimento web,
          com foco no frontend e com especialização em React JS.
        </p>
        <p>
          Cientista da computação por formação na USP de São Carlos, sou
          apaixonado por programação. Aprendi a programar ainda quando criança e
          desde então venho aperfeiçoando meu conhecimento.
        </p>
        <p>Acredito no uso da tecnologia para melhorar a vida das pessoas!</p>
      </section>

      <section id="experiences" className="flex flex-col">
        <div className="mt-2">
          {experiencesData.map((xp) => (
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
  )
}