import Image from 'next/image'
import TypewriterEffect from '@/components/ui/TypewriterEffect'

export default function Home() {
  return (
    <div className="pt-16 flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col justify-between py-14">
        <div className="flex items-center justify-between gap-12">
          {/* Left: text content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-medium leading-tight whitespace-nowrap">
              Ruben Carmona
              <br />
              <span className="text-zinc-600">Software Engineer</span>
            </h1>
            <TypewriterEffect />
            <p className="max-w-md text-base leading-8 text-zinc-600 dark:text-zinc-400 ">
              Building fast, accessible web experiences. 2 years shipping
              production-level features with React, TypeScript, and Node.js.
            </p>
          </div>
          {/* Right: image
          <div className="relative flex-shrink-0">
  <div className="absolute inset-[-6px] rounded-full border border-zinc-700" />
  <div className="absolute inset-[-12px] rounded-full border border-zinc-800" />
  <Image
    src="/landingimage.png"
    alt="Intro pic"
    width={200}
    height={200}
    className="rounded-full relative"
  />
</div> */}
          <div className="relative flex-shrink-0 p-3">
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-500" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-500" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-500" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-500" />
            <Image
              src="/landingimage.png"
              alt="Intro pic"
              width={350}
              height={350}
              className="rounded-sm relative"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
