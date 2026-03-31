export default function ProjectsSoftwarePage() {
  const projects = [
    {
      title: "F1 pit-stop optimization",
      description: "Recreated models from the 2020 Virtual Strategy Engineer paper on F1 strategy, improved accuracy with early stopping, and began exploring how to merge their two networks.",
      href: "/projects-software/f1-pit-stop-optimization"
    },
    {
      title: "Interchat", 
      description: "Made InterChat with a friend — a live chat app where AI 'workspaces' stream updates to everyone in real time.",
      href: "/projects-software/interchat"
    }
  ];

  return (
    <section>
      <h1 className="mb-12 text-4xl font-semibold tracking-tighter">
        Projects (Software)
      </h1>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left side - Project content */}
            <a 
              href={project.href}
              className="block bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700 group cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                {project.title}
              </h3>
              <div className="flex items-center text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200">
                <span className="text-sm font-medium mr-2">View Project</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            {/* Right side - Project description */}
            <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
              <h4 className="text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-4">
                Description
              </h4>
              <div className="space-y-3">
                {project.description ? (
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {project.description}
                  </p>
                ) : (
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-5/6"></div>
                    <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse w-2/3"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}