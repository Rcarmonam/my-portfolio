export default function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-white/5 px-4 py-5 sm:px-16">
      <span className="text-xs text-zinc-500">
        Ruben Carmona © {new Date().getFullYear()}
      </span>
    </footer>
  )
}
