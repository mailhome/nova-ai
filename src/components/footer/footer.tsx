import {  Mail, MapPin } from "lucide-react";
import Logo from "../logo/logo";
import { footerItems } from "../data/footer";


export default function Footer() {
  return (
    <div className="bottom-0 border-t w-full bg-[#FFFFFF]">
      <div className="xl:pt-20 lg:pt-10 pt-6 container-wrapper mx-auto">
        <div className="flex flex-col items-start justify-start lg:gap-y-10 gap-y-5 ">
          <div className="grid grid-cols-12  gap-x-10 lg:gap-x-40 border-b pb-5 lg:pb-10">
            <div className="flex items-start flex-col justify-start lg:gap-y-5 gap-y-5 lg:col-span-4 col-span-12 mx-auto lg:mx-0">
              <Logo />
              <p className="text-[#6B7280] text-xs md:text-sm lg:text-base xl:text-base leading-relaxed">
                Architecting the next era of autonomous business operations — from our base in Dubai, across the UAE.
              </p>
              <div className="flex items-start flex-col justify-start lg:gap-y-2 gap-y-1">
                <p className="text-[#6B7280] text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed flex items-start gap-x-2 pr-4 msd:pr-0">
                  <MapPin className="text-[#36754D] h-4 w-4 lg:w-6 lg:h-6" />
                  <span className="text-xs md:text-sm lg:text-md">Novai — Dubai, United Arab Emirates Serving Dubai, Abu Dhabi & the wider UAE</span>
                </p>
                <p className="text-[#6B7280] text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed flex items-center gap-x-2">
                  <Mail className="text-[#36754D] h-4 w-4 lg:w-5 lg:h-5" />
                  <a href="mailto:hello@norai.ae" className="text-xs md:text-sm lg:text-md xl:text-base leading-relaxed hover:text-[#36754D] transition-colors duration-200">
                    hello@novai.ae
                  </a>
                </p>
              </div>
              <div className="flex flex-col mt-4 items-start text-muted-foreground justify-start gap-y-2 w-full">
                <a href="/ai-automation-dubai" className="text-xs md:text-sm lg:text-md xl:text-base leading-relaxed hover:text-[#36754D] transition-colors duration-200">
                  AI Automation in Dubai
                </a>
                <a href="" className="text-xs md:text-sm lg:text-md xl:text-base leading-relaxed hover:text-[#36754D] transition-colors duration-200">
                  AI Automation in Abu Dhabi
                </a>
              </div>
            </div>

          <div className="lg:col-span-8 col-span-12 w-full">
            <div className="grid lg:grid-cols-4 grid-cols-2 mt-8 lg:mt-0 gap-y-10 gap-x-10 lg:gap-x-0 md:gap-x-16 ">
              {footerItems.map((item, index) => (
                <div key={index} className="flex flex-col items-start justify-start lg:gap-y-6 gap-y-2 ">
                    <h1 className="font-semibold text-md lg:text-lg xl:text-lg">
                      {item.title}
                    </h1>
                    {item.subItem.map((link, index) => (
                      <a href={link.href} key={index} className="text-muted-foreground hover:text-[#36754D] gap-y-1 lg:gap-y-3 text-xs md:text-sm lg:text-base xl:text-base leading-relaxed transition-colors duration-200">
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
          </div>
          <div className="py-2 lg:py-3 flex items-center justify-between text-xs md:text-sm lg:text-base xl:text-base text-[#6B7280] w-full gap-x-4 lg:gap-x-6 flex-col lg:flex-row gap-y-4">
            <p>© 2024 Novai. All rights reserved.</p>
            <div className="flex items-center justify-center gap-x-10">
              <a href="/privacy-policy" className="hover:text-[#36754D] transition-colors text-md lg:text-md duration-200">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-[#36754D] text-md lg:text-md  transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 