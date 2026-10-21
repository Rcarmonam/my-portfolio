# Ruben Carmona | Portfolio

Personal portfolio for Ruben Carmona, a software engineer. The site shares background and skills, and links to professional profiles and a resume.

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion for animation
- React Icons

## Requirements

- Node.js 22.23.1 (see `.nvmrc`)
- npm

With [nvm](https://github.com/nvm-sh/nvm) installed, select the project version and install dependencies:

```bash
nvm use
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the development server with Turbopack |
| `npm run build` | Create a production build                   |
| `npm run start` | Serve the production build locally          |
| `npm run lint`  | Run ESLint                                  |

## Project Structure

```text
app/                  App Router pages and global styles
  about/              Biography and skills
  projects/           Projects route
  contact/            Contact route
components/           Shared layout and UI components
  layout/             Navigation and footer
  ui/                 Typewriter animation
public/               Portfolio images and resume PDF
```

The home page and About page contain the current portfolio content. The Projects and Contact routes are present but not yet implemented.

## Deployment

Build the project with `npm run build`, then deploy it to a platform that supports Next.js. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.
