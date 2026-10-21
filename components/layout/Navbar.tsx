'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaCode, FaInfo } from 'react-icons/fa'
import { TbFileDownloadFilled, TbMail } from 'react-icons/tb'

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (href: string) =>
    `text-sm transition-colors text-zinc-50 hover:text-zinc-400 ${
      pathname === href ? 'underline' : 'no-underline'
    }`
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/80 px-4 py-3 backdrop-blur-sm sm:px-6 md:px-16">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
        <Link href="/" className={linkClass('/')}>
          <FaCode size={24} color="" />
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          {[{ href: '/about', label: 'About me' }].map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
          <a
            href="mailto:cm-ruben@hotmail.com"
            className="flex items-center gap-1 text-xs text-zinc-50 transition-colors hover:text-zinc-400 sm:text-sm"
          >
            Email me
            <TbMail size={20} />
          </a>
          <a
            href="/Carmona_Ruben_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="View my resume"
            className="flex items-center gap-1 text-xs text-zinc-50 transition-colors hover:text-zinc-400 sm:text-sm"
          >
            Resume
            <TbFileDownloadFilled size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}
