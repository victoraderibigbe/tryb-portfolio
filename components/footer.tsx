import Link from "next/link";
import {
  Instagram,
  MessageCircle,
  Mail,
  Linkedin,
  Facebook,
  ExternalLink,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { contacts } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-navy dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Image
                src={"images/tryb-logo1.png"}
                alt="Tryb Logo"
                width={100}
                height={100}
              />
              <p className="text-gray-300 dark:text-gray-400 text-sm mt-2">
                Designs that Speak. Visuals that Connect. Creativity in Every
                Pixel.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-orange dark:hover:text-teal-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 text-sm">
                <li>Brand Identity Design</li>
                <li>Graphic Design</li>
                <li>Photography & Editing</li>
                <li>Digital Storytelling</li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-heading font-bold mb-4">Connect</h4>
              <div className="flex gap-4">
                {contacts.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-orange dark:bg-teal-light rounded-lg flex items-center justify-center hover:bg-white dark:hover:bg-orange hover:text-navy dark:hover:text-navy transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 dark:border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-1">
                © {currentYear} TRYB. Developed by{" "}
                <a
                  href="https://bytesnova.vercel.app/"
                  className="text-gray-300 dark:text-gray-400 hover:text-orange dark:hover:text-teal-light transition-colors flex items-center gap-1"
                  target="_blank"
                >
                  BytesNova <ExternalLink size={15} />
                </a>
                .
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Designs that Speak. Visuals that Connect. Creativity in Every
                Pixel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
