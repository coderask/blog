export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aarnav Koushik
      </h1>
      <p className="mb-8">
        {`I Like Cars, Cameras and Computers`}
      </p>
      
      {/* The Big Three Buttons */}
      <div className="grid gap-4 my-12">
        <a 
          href="/cars" 
          className="block bg-neutral-800/20 hover:bg-neutral-800/30 dark:bg-neutral-200/20 dark:hover:bg-neutral-200/30 backdrop-blur-sm text-neutral-900 dark:text-neutral-100 font-bold py-6 px-8 rounded-lg text-center text-xl transition-colors duration-200 shadow-lg hover:shadow-xl border border-neutral-300/20 dark:border-neutral-700/20"
        >
          🚗 Cars
        </a>
        
        <a 
          href="/cameras" 
          className="block bg-neutral-800/20 hover:bg-neutral-800/30 dark:bg-neutral-200/20 dark:hover:bg-neutral-200/30 backdrop-blur-sm text-neutral-900 dark:text-neutral-100 font-bold py-6 px-8 rounded-lg text-center text-xl transition-colors duration-200 shadow-lg hover:shadow-xl border border-neutral-300/20 dark:border-neutral-700/20"
        >
          📷 Cameras
        </a>
        
        <a 
          href="/computers" 
          className="block bg-neutral-800/20 hover:bg-neutral-800/30 dark:bg-neutral-200/20 dark:hover:bg-neutral-200/30 backdrop-blur-sm text-neutral-900 dark:text-neutral-100 font-bold py-6 px-8 rounded-lg text-center text-xl transition-colors duration-200 shadow-lg hover:shadow-xl border border-neutral-300/20 dark:border-neutral-700/20"
        >
          💻 Computers
        </a>
      </div>
    </section>
  )
}
