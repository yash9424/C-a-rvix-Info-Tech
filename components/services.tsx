export default function Services() {
  const services = [
    { name: "Web Development", active: true },
    { name: "Designing", active: false },
    { name: "Mobile Application", active: false },
    { name: "Business Consultation", active: false },
    { name: "Digital Marketing", active: false },
    { name: "Maintenance", active: false },
    { name: "Content Writing", active: false },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-5xl font-bold mb-4">
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px #374151",
              textStroke: "2px #374151",
            }}
          >
            OUR
          </span>{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px #dc2626",
              textStroke: "2px #dc2626",
            }}
          >
            SERVICES
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg mb-12">Better Chance To Know Our Valuable Services</p>

        {/* Service Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full border-2 text-sm font-medium transition-colors ${
                service.active
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Web Development Section */}
        <div className="max-w-4xl mx-auto">
          {/* Code Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-16 bg-white border-4 border-gray-900 rounded-lg">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute mt-4">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 8.5L11 11L8.5 13.5L9.91 14.91L13.83 11L9.91 7.09L8.5 8.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Web Development Heading */}
          <h3 className="text-2xl font-bold text-red-500 mb-6">Web Development</h3>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-12 max-w-3xl mx-auto">
            At Webjet, our web development services involve crafting tailored and scalable websites and web applications
            to meet our clients' unique requirements. Our expertise lies in creating visually appealing user interfaces
            through front-end development, ensuring a seamless and engaging user experience. Our expertise extends to
            back-end development for robust server-side functionality and efficient database integration for effective
            data management. With skilled developers utilizing various programming languages and frameworks, we
            prioritize optimal performance and security in every project. Our commitment extends beyond the initial
            development, encompassing regular updates, maintenance, and responsive support for reliable and sustainable
            web solutions.
          </p>

          {/* Technology Icons */}
          <div className="flex justify-center items-center space-x-8">
            {/* PHP Icon */}
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PHP</span>
            </div>

            {/* WordPress Icon */}
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.109m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.584-.031-.661.854-.082.899 0 0 .537.075 1.104.105l1.644 4.505L9.281 18.675l-2.926-8.64c.649-.03 1.234-.105 1.234-.105.583-.075.516-.93-.066-.899 0 0-1.755.135-2.88.135-.203 0-.44-.006-.69-.015C6.57 5.033 9.1 3.25 12 3.25c2.18 0 4.157.83 5.65 2.197-.036-.002-.072-.007-.109-.007-.429 0-.735.375-.735.779 0 .363.21.671.435.978.167.302.36.693.36 1.262 0 .42-.147 1.018-.343 1.793l-.413 1.48zm-2.064 11.045l-3.006-8.944c-.329-.75-.49-1.6-.49-2.264 0-.24.015-.464.052-.663C6.418 9.294 5.25 11.467 5.25 14c0 3.537 2.235 6.85 5.535 8.567l.639-1.592zm6.406-2.564c0-2.188-1.79-3.963-4-3.963s-4 1.775-4 3.963c0 2.207 1.79 4 4 4s4-1.793 4-4z" />
              </svg>
            </div>

            {/* SQL Icon */}
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
