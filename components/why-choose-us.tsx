export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-wide">
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "2.5px #374151",
                  textStroke: "2.5px #374151",
                  fontWeight: "900",
                }}
              >
                WHY CHOOSE
              </span>{" "}
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "2.5px #ef4444",
                  textStroke: "2.5px #ef4444",
                  fontWeight: "900",
                }}
              >
                US
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Webjet technology is a budding company armed with experienced individuals excelling in serving and
              executing client's IT requirement. Like every successful journey, we started by training and excelling as
              individuals with a goal to serve the businesses digitalize themselves in order to add value and success to
              their businesses. Optimization and expected execution are the objectives we cater to best of our
              abilities.
            </p>
          </div>

          {/* Illustration - Right Side */}
          <div className="relative flex justify-center items-center">
            {/* Background decorative circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full opacity-60"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-purple-200 rounded-full opacity-70"></div>
            <div className="absolute top-1/2 left-0 w-16 h-16 bg-gray-300 rounded-full opacity-50"></div>

            {/* Main illustration */}
            <div className="relative z-10 flex items-center justify-center">
              {/* Two businessmen shaking hands illustration */}
              <div className="flex items-center space-x-4">
                {/* First businessman */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full mb-2 relative">
                    <div className="absolute top-2 left-4 w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                  <div className="w-12 h-20 bg-gray-800 rounded-t-lg"></div>
                  <div className="w-8 h-12 bg-gray-600 rounded-b-lg"></div>
                </div>

                {/* Handshake area */}
                <div className="flex items-center justify-center w-16 h-8">
                  <div className="w-8 h-4 bg-pink-300 rounded-full"></div>
                </div>

                {/* Second businessman */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-full mb-2 relative">
                    <div className="absolute top-2 right-4 w-2 h-2 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="w-12 h-20 bg-gray-700 rounded-t-lg"></div>
                  <div className="w-8 h-12 bg-gray-500 rounded-b-lg"></div>
                </div>
              </div>
            </div>

            {/* Additional decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-gray-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
