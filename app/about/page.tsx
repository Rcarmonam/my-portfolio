import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiCss,
  SiLess,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si'

const skills = [
  { label: 'TypeScript', icon: <SiTypescript size={25} color="#3178C6" /> },
  { label: 'React', icon: <SiReact size={25} color="#61DAFB" /> },
  { label: 'Next.js', icon: <SiNextdotjs size={25} color="#ffffff" /> },
  { label: 'JavaScript', icon: <SiJavascript size={25} color="#F7DF1E" /> },
  { label: 'CSS', icon: <SiCss size={25} color="#1572B6" /> },
  { label: 'LESS', icon: <SiLess size={25} color="#1D365D" /> },
  { label: 'Node.js', icon: <SiNodedotjs size={25} color="#339933" /> },
  { label: 'Git', icon: <SiGit size={25} color="#F05032" /> },
]

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-20 pb-12">
      <div className="space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-medium text-zinc-50">Ruben Carmona</h1>
          <p className="text-zinc-500 text-sm">Software Engineer</p>
        </div>

        <div className="max-w-prose space-y-4 text-zinc-400 leading-relaxed">
          <p>
            My journey into software engineering has been shaped by curiosity,
            perseverance, and a desire to create meaningful experiences through
            technology. As a first-generation college graduate, becoming a
            software engineer was a goal that came with both challenges and
            opportunities that helped shape the way I approach growth, learning,
            and problem-solving today.
          </p>
          <p>
            Being bilingual has also allowed me to connect with people from
            different backgrounds and perspectives, something I truly value both
            personally and professionally. I enjoy building applications that
            feel intuitive, thoughtful, and impactful while continuously pushing
            myself beyond my comfort zone as a developer.
          </p>
          <p>
            I’m passionate about creating clean user experiences, solving
            real-world problems, and building software that people can genuinely
            connect with.
          </p>
        </div>
      </div>
      <div className="border-t border-zinc-800 mt-10" />
      <section className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-50 mb-4">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className="flex items-center gap-2 text-base px-4 py-2 text-zinc-400 transition-all duration-200 hover:text-zinc-50 border border-zinc-800 rounded-2xl bg-white/5 hover:bg-white/10"
            >
              <span className="text-xl">{skill.icon}</span>
              {skill.label}
            </span>
          ))}
        </div>
      </section>
    </main>
  )
}
