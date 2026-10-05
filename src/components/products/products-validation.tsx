
import { cn } from 'cn'
import { productsValidationItems } from '../data/products'
import ProductsWrapper from './products-wrapper'

export default function ProductValidation() {
  return (
    <section className='w-full xl:mt-30 lg:mt-20 mt-5'>
        <div className="w-full py-5 lg:py-4 lg:px-20 px-2">
            <ProductsWrapper
                desc="Nova AI is a powerful tool that can help you streamline your design process and improve the quality of your work. With its advanced features and intuitive interface, Nova AI can help you save time and reduce errors in your designs."
                headerLabel="Validation coverage" 
                headerTitle="One model. Seven decision lenses."
                content={<ProductValidationContent />} />
        </div>
    </section>
  )
}

function ProductValidationContent() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full border gap-0" >
            {productsValidationItems.map((item, index) => (
                <div key={index} className={cn("flex flex-col items-start  lg:py-6 lg:px-10 px-5 md:px-5 py-10 justify-start gap-6 lg:gap-4 bg-white border text-center", index === 7 && "bg-[#16362B] w-full h-full", (item.indexNumber === "01" || item.indexNumber === "03" || item.indexNumber=== "05") &&  "border-l border-t") }>
                    <div className="flex items-center justify-between w-full ">
                        <div className={cn("w-10 h-10 flex items-center justify-center bg-green-900/20 p-2 rounded-full", index === 7 && "bg-transparent p-0")}>
                            {item.icon && <item.icon className={cn("w-5 h-5 text-emerald-900", index === 7 && "w-8 h-8 text-emerald-200" )} />}
                        </div>
                        <span className={cn("text-sm font-medium text-muted-foreground", index === 7 && "hidden")}>{item.indexNumber}</span>
                    </div>
                    <h3 className={cn("text-xl lg:text-xl font-medium text-black", index === 7 && "text-white")}>{item.label}</h3>
                    <p className={cn("text-muted-foreground text-md lg:text-sm text-left w-full", index == 7 && "text-gray-300 rounded-br-3xl")}>{item.desc}</p>
                </div>
            ))}
        </div>
            )
        }
