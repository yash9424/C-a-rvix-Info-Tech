export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-gray-900 px-6 py-20 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-8">
              <span className="text-xl font-light">Got A </span>
              <span className="text-xl font-light text-blue-200 dark:text-blue-300">idea</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              LET'S EXPLORE MORE TO
              <br />
              TURN IT INTO REALITY !
            </h1>

            <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed max-w-md">
              Planning is one thing and ensuring it is manifested is another, that's what we are here for
            </p>
          </div>

          {/* Right Decorative Elements */}
          <div className="relative hidden lg:block">
            <div className="relative z-20 bg-gray-300 dark:bg-gray-600 rounded-lg p-4 w-80 h-48 mx-auto transform rotate-12 transition-colors">
              <div className="bg-gray-400 dark:bg-gray-500 rounded-full w-3 h-3 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
              <div className="bg-white dark:bg-gray-800 rounded h-40 mt-4 p-4 transition-colors">
                <div className="space-y-2">
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 w-3/4 rounded"></div>
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 w-1/2 rounded"></div>
                  <div className="bg-gray-200 dark:bg-gray-600 h-2 w-2/3 rounded"></div>
                </div>
                <div className="bg-gray-300 dark:bg-gray-500 rounded-full w-16 h-16 mt-4 ml-auto"></div>
              </div>
            </div>

            <div className="absolute top-20 right-0 z-30 bg-gray-800 dark:bg-gray-700 rounded-2xl p-2 w-20 h-36 transform -rotate-12 transition-colors">
              <div className="bg-gray-600 dark:bg-gray-800 rounded-xl h-full p-2">
                <div className="bg-white dark:bg-gray-900 rounded-lg h-full p-2 transition-colors">
                  <div className="space-y-1">
                    <div className="bg-gray-200 dark:bg-gray-600 h-1 w-full rounded"></div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-1 w-3/4 rounded"></div>
                  </div>
                  <div className="bg-gray-300 dark:bg-gray-500 rounded-full w-8 h-8 mt-2 mx-auto"></div>
                </div>
              </div>
              <div className="bg-gray-700 dark:bg-gray-600 rounded-full w-1 h-1 absolute top-1 left-1/2 transform -translate-x-1/2"></div>
            </div>

            <div className="absolute bottom-10 left-10 bg-blue-300 dark:bg-blue-400 rounded-full w-16 h-16 opacity-60"></div>
            <div className="absolute top-10 right-20 bg-white dark:bg-gray-200 rounded-full w-3 h-3 opacity-80"></div>
            <div className="absolute bottom-20 right-10 bg-white dark:bg-gray-200 rounded-full w-2 h-2 opacity-60"></div>
            <div className="absolute top-32 left-20 bg-blue-200 dark:bg-blue-300 rounded-full w-4 h-4 opacity-40"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-20 bg-white dark:bg-gray-300 rounded-full w-32 h-32"></div>
        <div className="absolute bottom-20 right-20 bg-white dark:bg-gray-300 rounded-full w-24 h-24"></div>
        <div className="absolute top-1/2 left-1/4 bg-white dark:bg-gray-300 rounded-full w-16 h-16"></div>
      </div>
    </section>
  )
}
