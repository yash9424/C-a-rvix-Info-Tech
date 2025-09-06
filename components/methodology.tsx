export default function Methodology() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative">
            <div className="flex items-center justify-center">
              {/* Background circles */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-purple-300 rounded-full opacity-60"></div>
              <div className="absolute top-8 right-8 w-32 h-32 bg-purple-200 rounded-full opacity-40"></div>

              {/* People illustration */}
              <div className="relative z-10 flex items-center space-x-8">
                {/* Person 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full mb-2 relative">
                    <div className="absolute top-2 left-4 w-8 h-8 bg-orange-400 rounded-full"></div>
                  </div>
                  <div className="w-12 h-20 bg-gray-800 rounded-t-lg"></div>
                  <div className="flex space-x-1 mt-1">
                    <div className="w-4 h-12 bg-gray-800 rounded-lg"></div>
                    <div className="w-4 h-12 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>

                {/* Computer screens */}
                <div className="flex flex-col space-y-4">
                  <div className="w-20 h-14 bg-gray-300 border-2 border-gray-400 rounded"></div>
                  <div className="w-20 h-14 bg-gray-300 border-2 border-gray-400 rounded"></div>
                </div>

                {/* Person 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full mb-2 relative">
                    <div className="absolute top-2 left-4 w-8 h-8 bg-pink-400 rounded-full"></div>
                  </div>
                  <div className="w-12 h-20 bg-gray-600 rounded-t-lg"></div>
                  <div className="flex space-x-1 mt-1">
                    <div className="w-4 h-12 bg-gray-600 rounded-lg"></div>
                    <div className="w-4 h-12 bg-gray-600 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-5xl font-black mb-6">
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "2.5px #374151",
                  textStroke: "2.5px #374151",
                }}
              >
                METHODOLOGY
              </span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We work on agile methodology and have a well-defined and streamlined process to streamline our We study
              your requirements & Consult you on it for our change & Document to the code architecture & Share the
              Proposal and this is the sign off and get started from where we are comfortable with the process and it is
              well documented and we have a clear at the time of execution and the operating time on anything that
              delays the project completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
