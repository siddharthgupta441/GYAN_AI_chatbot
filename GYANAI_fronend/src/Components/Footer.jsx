import {
  Facebook,
  Instagram,
  Youtube,
  Rss,
  Mail,
  Users,
} from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-200 py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
      {/* Left Side: About & Links */}
      <div className="space-y-6">
        <p className="text-xl font-semibold max-w-md mx-auto md:mx-0">
          Empowering students and parents to apply stress-free with Waise Labs.
        </p>

        <div className="flex justify-center md:justify-start gap-8 text-sm font-medium">
          <a href="#" className="hover:text-white transition duration-300">
            Contact
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Team
          </a>
          <a href="#" className="hover:text-white transition duration-300 flex items-center gap-1">
            <Mail className="w-4 h-4" /> Support
          </a>
          <a href="#" className="hover:text-white transition duration-300 flex items-center gap-1">
            <Users className="w-4 h-4" /> Careers
          </a>
        </div>
      </div>

      {/* Right Side: Quote & Social */}
      <div className="space-y-6 flex flex-col items-center md:items-end">
        <p className="italic text-gray-400 max-w-xs">
          "We change. Make it more waise."
        </p>

        <div className="flex gap-5">
          {[
            {
              Icon: Facebook,
              href: "#",
              bgColor: "bg-blue-600",
              label: "Facebook",
            },
            {
              Icon: Instagram,
              href: "#",
              bgColor: "bg-pink-500",
              label: "Instagram",
            },
            {
              Icon: Youtube,
              href: "#",
              bgColor: "bg-red-600",
              label: "YouTube",
            },
            {
              Icon: Rss,
              href: "#",
              bgColor: "bg-orange-500",
              label: "RSS",
            },
          ].map(({ Icon, href, bgColor, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className={`${bgColor} p-3 rounded-full text-white shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4 select-none">
          © {new Date().getFullYear()} Waise Labs. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
