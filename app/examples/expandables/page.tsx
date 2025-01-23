import { ProjectStatusCard } from "@/app/examples/expandables/components/expandables-card"

export default function Expandables() {
  const projectData = {
    title: "Next.js Dashboard",
    progress: 75,
    dueDate: "Dec 31, 2023",
    contributors: [
      { name: "John Doe", image: "/avatar/01.png" },
      { name: "Jane Smith", image: "/avatar/02.png" },
      { name: "Bob Johnson", image: "/avatar/03.png" },
    ],
    tasks: [
      { title: "Setup authentication", completed: true },
      { title: "Create dashboard layout", completed: true },
      { title: "Implement analytics", completed: false },
      { title: "Add dark mode support", completed: false },
    ],
    githubStars: 1234,
    openIssues: 5,
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4 text-black">
      <ProjectStatusCard {...projectData} />
    </div>
  )
}

