import Image from 'next/image'
import TypewriterEffect from '@/components/ui/TypewriterEffect'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { TbFileDownloadFilled } from 'react-icons/tb'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center pt-16 font-sans">
      <main className="flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {/* Left: text content */}
          <div className="flex w-full flex-col gap-5 sm:gap-6">
            <h1 className="text-3xl font-medium leading-tight sm:text-4xl">
              Ruben Carmona
              <br />
              <span className="text-zinc-600">Software Engineer</span>
            </h1>
            <TypewriterEffect />
            <p className="max-w-md text-base leading-7 text-zinc-400 sm:leading-8">
              Building fast, accessible, and user-focused web experiences.
              Software Engineer with 2+ years of experience shipping
              production-level features using React, TypeScript, and Node.js.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/rubencarmonamed/"
                className="flex size-11 items-center justify-center text-blue-600 transition-colors hover:text-blue-800"
                target="_blank"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://github.com/Rcarmonam"
                className="flex size-11 items-center justify-center text-gray-300 transition-colors hover:text-white"
                target="_blank"
                title="GitHub"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="/Carmona_Ruben_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View my resume"
                aria-label="View my resume"
                className="flex size-11 items-center justify-center text-zinc-300 transition-colors hover:text-white"
              >
                <TbFileDownloadFilled size={26} />
              </a>
            </div>
          </div>
          {/* Right: image
          <div className="relative flex-shrink-0">
            <div className="absolute inset-[-6px] rounded-full border border-zinc-700" />
            <div className="absolute inset-[-12px] rounded-full border border-zinc-800" />
            <Image
              src="/landingimage.png"
              alt="Intro pic"
              width={350}
              height={350}
              className="rounded-full relative"
            />
          </div> */}
          <div className="relative w-full max-w-[260px] flex-shrink-0 p-3 sm:max-w-[320px] lg:max-w-[350px]">
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-500" />
            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-500" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-zinc-500" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-zinc-500" />
            <Image
              src="/landingimage.png"
              alt="Intro pic"
              width={350}
              height={350}
              className="relative h-auto w-full rounded-sm"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
