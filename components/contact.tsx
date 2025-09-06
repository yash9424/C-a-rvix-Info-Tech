export default function Contact() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-12">
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2.5px #374151",
              textStroke: "2.5px #374151",
            }}
          >
            LET'S GROW{" "}
          </span>
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2.5px #ef4444",
              textStroke: "2.5px #ef4444",
            }}
          >
            TOGETHER
          </span>
        </h2>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-700">
                <option>Select Services</option>
                <option>Web Development</option>
                <option>Mobile Application</option>
                <option>Digital Marketing</option>
                <option>Business Consultation</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid md:grid-cols-4 gap-6 mt-12 text-sm text-gray-600">
          <div className="flex items-center justify-center space-x-2">
            <span>📞</span>
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 9988998800</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span>✉️</span>
            <div>
              <p className="font-semibold">Email</p>
              <p>webjet.official@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span>🏢</span>
            <div>
              <p className="font-semibold">Skype</p>
              <p>webjet.official</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span>💼</span>
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p>+91 9988998800</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
