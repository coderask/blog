export default function F1PitStopOptimizationPage() {
  return (
    <section>
      <h1 className="mb-12 text-4xl font-semibold tracking-tighter">
        F1 Pit-Stop Optimization
      </h1>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
          Recreated models from the 2020 Virtual Strategy Engineer paper on F1 strategy, improved accuracy with early stopping, and began exploring how to merge their two networks.
        </p>
        
        <div className="space-y-8">
          {/* Github Section */}
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Github
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
            https://github.com/coderask/f1racesim
            </p>
          </div>

          {/* Development Section */}
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Development
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Development process, technologies used, and implementation details will be added here...
            </p>
          </div>

          {/* Learnings Section */}
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 border border-neutral-200 dark:border-neutral-700">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
              Learnings
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300">
              Key insights, challenges overcome, and lessons learned will be added here...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
