import React from 'react'
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram } from "lucide-react"


const Footer = () => {
    return (
    <footer className="bg-[#1a1a1a] text-white mt-[2px]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Stay up to date on all things findnest</h2>
            <p className="text-gray-400">
              You can subscribe from these communication at any time. Please review the news for more information
            </p>
            <button className="bg-[#c4f135] text-black hover:bg-[#b3df2d]">Contact findnest</button>
          </div>

          {/* Quick Links - Column 1 */}
          <div className="space-y-4">
            <Link href="/about" className="block text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="block text-gray-400 hover:text-white">
              Contact
            </Link>
            <Link href="/agent" className="block text-gray-400 hover:text-white">
              Agent
            </Link>
            <Link href="/agent-details" className="block text-gray-400 hover:text-white">
              Agent details
            </Link>
            <Link href="/properties" className="block text-gray-400 hover:text-white">
              Properties
            </Link>
            <Link href="/properties-details" className="block text-gray-400 hover:text-white">
              Properties details
            </Link>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="space-y-4">
            <Link href="/style-guide" className="block text-gray-400 hover:text-white">
              Style guide
            </Link>
            <Link href="/licenses" className="block text-gray-400 hover:text-white">
              Licenses
            </Link>
            <Link href="/changelog" className="block text-gray-400 hover:text-white">
              Changelog
            </Link>
            <Link href="/error" className="block text-gray-400 hover:text-white">
              Error page
            </Link>
            <Link href="/password" className="block text-gray-400 hover:text-white">
              Password
            </Link>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <p className="text-gray-400">
              101 Oak boulevard, pleasville,
              <br />
              pine road, USA 33445
            </p>
            <Link href="mailto:findnest@gmail.com" className="block text-white hover:underline">
              findnest@gmail.com
            </Link>
            <Link href="tel:+01123456789" className="block text-white hover:underline">
              +01 123 456 7890
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">Realestate © 2024 made by Themetechmount powered by Webflow</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

