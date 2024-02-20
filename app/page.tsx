import { Header } from "@/components/Header"
import { Main } from "@/components/Main"

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col md:flex-row md:items-center md:justify-between md:relative max-w-screen-xl mx-auto px-6 py-12 sm:p-0">
      <div className="md:flex md:justify-between md:gap-12">
        <Header />
        <Main />
      </div>
    </div>
  )
}
