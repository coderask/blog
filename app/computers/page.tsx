export default function ComputersPage() {
  const computerCategories = [
    {
      title: "PC's",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/pcs",
      image: "/images/placeholder1.jpg" // Optional background image
    },
    {
      title: "Projects (Architecture)",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      href: "/projects-architecture",
      image: "/images/placeholder2.jpg" // Optional background image
    },
     {
       title: "Projects (Software)",
       description: "Software development projects and applications I've built.",
       href: "/projects-software",
       image: "/images/placeholder3.jpg" // Optional background image
     },
    {
      title: "Rant",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      href: "/rant",
      image: "/images/placeholder4.jpg" // Optional background image
    }
  ];

  return (
    <section>
      <h1 className="mb-12 text-4xl font-semibold tracking-tighter">
        💻 Computers
      </h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 lg:max-w-4xl">
        {computerCategories.map((category, index) => (
          <a
            key={index}
            href={category.href}
            className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50"
          >
            {/* Background Image Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                backgroundImage: category.image ? `url(${category.image})` : 'none'
              }}
            />
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent dark:from-neutral-900/90 dark:via-neutral-900/80 dark:to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg leading-relaxed">
                    {category.description}
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                    <svg 
                      className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

