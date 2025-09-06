export default function About() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left side - Illustration */}
          <div className="lg:col-span-2 relative">
            <div className="absolute top-8 left-8 w-24 h-24 bg-slate-300 dark:bg-slate-600 rounded-full opacity-40"></div>
            <div className="absolute top-0 right-12 w-20 h-20 bg-slate-400 dark:bg-slate-500 rounded-full opacity-50"></div>
            <div className="absolute bottom-16 left-0 w-16 h-16 bg-slate-400 dark:bg-slate-500 rounded-full opacity-60"></div>

            {/* Main illustration container */}
            <div className="relative z-10 flex items-center justify-center space-x-8 py-8">
              {/* Person 1 - Desktop setup */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-12 bg-gray-700 dark:bg-gray-600 rounded-lg mb-2 relative">
                  <div className="w-14 h-10 bg-gray-200 dark:bg-gray-300 rounded m-1"></div>
                  <div className="w-4 h-1 bg-gray-600 dark:bg-gray-500 rounded-full mx-auto mt-1"></div>
                </div>
                {/* Person figure */}
                <div className="relative">
                  <div className="w-6 h-6 bg-amber-700 dark:bg-amber-600 rounded-full mb-1"></div>
                  <div className="w-8 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg"></div>
                  <div className="w-10 h-6 bg-blue-900 dark:bg-blue-800 rounded-lg mt-1"></div>
                </div>
              </div>

              {/* Person 2 - Laptop setup */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-10 bg-gray-600 dark:bg-gray-500 rounded-lg mb-2 relative transform rotate-12">
                  <div className="w-12 h-8 bg-gray-200 dark:bg-gray-300 rounded m-1"></div>
                </div>
                {/* Person figure */}
                <div className="relative">
                  <div className="w-6 h-6 bg-gray-800 dark:bg-gray-700 rounded-full mb-1"></div>
                  <div className="w-8 h-12 bg-purple-700 dark:bg-purple-600 rounded-lg"></div>
                  <div className="w-10 h-6 bg-gray-800 dark:bg-gray-700 rounded-lg mt-1"></div>
                </div>
              </div>
            </div>

            {/* Additional decorative circles */}
            <div className="absolute bottom-8 right-4 w-12 h-12 bg-slate-300 dark:bg-slate-600 rounded-full opacity-50"></div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold tracking-wide">
              <span
                className="text-white dark:text-gray-900"
                style={{
                  WebkitTextStroke: "2px #374151",
                  textStroke: "2px #374151",
                }}
              >
                ABOUT
              </span>{" "}
              <span
                className="text-white dark:text-gray-900"
                style={{
                  WebkitTextStroke: "2px #dc2626",
                  textStroke: "2px #dc2626",
                }}
              >
                US
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-2xl">
              Cłaîrvix Info Tech is a budding company armed with experienced individuals excelling in serving and
              executing client's IT requirement. Like every successful journey, we started by training and excelling as
              individuals with a goal to serve the businesses digitalize themselves in order to add value and success to
              their businesses. Optimization and expected execution are the objectives we cater to best of our
              abilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
