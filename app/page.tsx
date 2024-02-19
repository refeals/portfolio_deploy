import { Header } from "@/components/Header"
import { Main } from "@/components/Main"

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col lg:flex-row lg:items-center lg:justify-between lg:relative max-w-screen-xl mx-auto px-2 py-4 md:p-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <Main />
      </div>
    </div>
  )
}
