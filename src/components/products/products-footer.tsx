import { cn } from 'cn'
import { productsHeroFooterItems } from '../data/products'

export default function ProductsHeroFooter() {
  return (
      <div className="py-3 lg:py-5 border-b border-[#F8FAFC] w-full bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-2  w-full justify-center items-center text-center lg:flex lg:justify-center lg:items-center lg:gap-x-6">
              {productsHeroFooterItems.map((item, index) => (
                  <span key={index} className={cn("text-muted-foreground  text-xs md:text-sm lg:text-base", index===0 && "text-black font-medium")}>{item}</span>
              ))}
          </div>
      </div>
  )
}
