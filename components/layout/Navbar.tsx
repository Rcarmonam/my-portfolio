'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaLinkedin, FaCode } from 'react-icons/fa'
import { TbFileDownloadFilled } from 'react-icons/tb'

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (href: string) =>
    `text-sm transition-colors text-zinc-50 hover:!text-zinc-400 ${
      pathname === href ? 'underline' : 'no-underline'
    }`
  return (
    <nav className="fixed top-0 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm px-16 py-4 bg-transparent z-50">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <Link href="/" className={linkClass('/')}>
          <FaCode size={25} color="" />
        </Link>
        <div className="flex items-center gap-6">
          {[{ href: '/about', label: 'About me' }].map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center text-sm transition-colors text-zinc-50 hover:text-zinc-400"
          >
            Resume
            <TbFileDownloadFilled size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/rubencarmonamed/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
            {/* <span>LinkedIn</span> */}
          </a>
        </div>
      </div>
    </nav>
  )
}
