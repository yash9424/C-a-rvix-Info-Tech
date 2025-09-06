import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white px-4 sm:px-6 py-12 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <img src="/logo.svg" alt="Cłaîrvix Info Tech" className="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="text-lg sm:text-2xl font-bold">
                Cłaîr<span className="text-blue-500">v</span>ix Info Tech
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md text-sm sm:text-base">
              We believe in the power and control offered to us by having flexibility and freedom to be creative and
              innovative. Our commitment to excellence drives us to deliver outstanding results.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 9988556644</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span className="break-all">clairvix.official@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span>Cłaîrvix Office<br />Sector 34, Chandigarh 160022</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">📷</a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">💼</a>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm text-center">© 2024 Cłaîrvix Info Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}