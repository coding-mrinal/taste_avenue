import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { restaurantInfo } from "@/lib/data";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, href: "#facebook" },
    { name: "Instagram", icon: <FaInstagram />, href: "#instagram" },
    { name: "Twitter", icon: <FaTwitter />, href: "#twitter" },
  ];

  return (
    <footer className="bg-stone-900 text-white border-t border-stone-800">
      {/* py-2 is the key for minimum height without shrinking elements */}
      <div className="w-full mx-auto px-6 py-2"> 
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Socials - Kept original size */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-amber-500 transition-colors"
                aria-label={social.name}
              >
                {/* Kept your original w-9 h-9 size */}
                <div className="w-9 h-9 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 transition-all border border-stone-700/50">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Copyright Line - Kept original text content */}
          <div className="text-gray-400 text-sm tracking-tight text-center md:text-right">
            <p className="whitespace-nowrap">
              For reservations, please call us or book online. 
              <span className="mx-2 hidden md:inline">|</span>
              <span className="block md:inline">
                &copy; {new Date().getFullYear()} {" "}
                <span className="text-amber-500 font-medium">{restaurantInfo.name}</span>. 
                All rights reserved.
              </span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}