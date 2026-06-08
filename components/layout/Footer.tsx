export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-16 py-5 flex justify-center items-center">
      <span className="text-xs text-zinc-600">
        Ruben Carmona © {new Date().getFullYear()}
      </span>
    </footer>
  )
}
