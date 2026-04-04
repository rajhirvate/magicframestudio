import Link from "next/link";
import { Share2, Play, Users, MapPin, Phone, Mail, Clock } from "lucide-react";
import { photographyServices, videographyServices } from "@/data/services";
import { locations } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1e1e1e]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-semibold text-[#f5f0eb]">
                Magic Frame Studio
              </span>
            </Link>
            <p className="text-sm text-[#f5f0eb]/50 leading-relaxed mb-6">
              India&apos;s most trusted photography &amp; videography studio since 2020.
              We craft cinematic stories that last forever.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <SocialLink href="#" icon={<Share2 size={16} />} label="Instagram" />
              <SocialLink href="#" icon={<Play size={16} />} label="YouTube" />
              <SocialLink href="#" icon={<Users size={16} />} label="Facebook" />
            </div>
          </div>

          {/* Photography Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase mb-5">
              Photography
            </h4>
            <ul className="space-y-2.5">
              {photographyServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/photography/${service.slug}`}
                    className="text-sm text-[#f5f0eb]/50 hover:text-[#f5f0eb] transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Videography Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase mb-5">
              Videography
            </h4>
            <ul className="space-y-2.5">
              {videographyServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/videography/${service.slug}`}
                    className="text-sm text-[#f5f0eb]/50 hover:text-[#f5f0eb] transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-[#c9a84c] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#f5f0eb]/50">
                  Magic Frame Studio<br />
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#c9a84c] flex-shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="text-sm text-[#f5f0eb]/50 hover:text-[#f5f0eb] transition-colors"
                >
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#c9a84c] flex-shrink-0" />
                <a
                  href="mailto:hello@magicframestudio.com"
                  className="text-sm text-[#f5f0eb]/50 hover:text-[#f5f0eb] transition-colors"
                >
                  hello@magicframestudio.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#f5f0eb]/50">
                  Mon – Sun: 9 AM – 7 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cities strip */}
      <div className="border-t border-[#1e1e1e] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-5">
            Cities we serve
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">
            {locations.map((loc) => (
              <div key={loc.slug}>
                <p className="text-xs font-semibold text-[#f5f0eb]/60 mb-2 flex items-center gap-1.5">
                  <MapPin size={10} className="text-[#c9a84c]/70" />
                  {loc.label}
                </p>
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      href={`/photography/wedding-photography/${loc.slug}`}
                      className="text-[11px] text-[#f5f0eb]/35 hover:text-[#f5f0eb]/70 transition-colors"
                    >
                      Wedding Photography
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/photography/event-photography/${loc.slug}`}
                      className="text-[11px] text-[#f5f0eb]/35 hover:text-[#f5f0eb]/70 transition-colors"
                    >
                      Event Photography
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/videography/wedding-videography/${loc.slug}`}
                      className="text-[11px] text-[#f5f0eb]/35 hover:text-[#f5f0eb]/70 transition-colors"
                    >
                      Wedding Videography
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/videography/corporate-videography/${loc.slug}`}
                      className="text-[11px] text-[#f5f0eb]/35 hover:text-[#f5f0eb]/70 transition-colors"
                    >
                      Corporate Videography
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#f5f0eb]/30">
            © {new Date().getFullYear()} Magic Frame Studio. All rights reserved.
          </p>
          <p className="text-xs text-[#f5f0eb]/30">
            India&apos;s Most Trusted Photography &amp; Videography Services since 2020
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-xs text-[#f5f0eb]/30 hover:text-[#f5f0eb]/60 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-xs text-[#f5f0eb]/30 hover:text-[#f5f0eb]/60 transition-colors">
              Contact
            </Link>
            <Link href="/portfolio" className="text-xs text-[#f5f0eb]/30 hover:text-[#f5f0eb]/60 transition-colors">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-full border border-[#2a2a2a] text-[#f5f0eb]/50 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all duration-200"
    >
      {icon}
    </a>
  );
}
