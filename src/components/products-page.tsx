import HowSiraatWorks from "./products/how-siirat-works";
import ProductCta from "./products/product-cta";
import ProductsHeroFooter from "./products/products-footer";
import ProductsHero from "./products/products-hero";
import ProductsOrganisationalIntelligence from "./products/products-organisational-intelligence";
import ProductValidation from "./products/products-validation";
import ValueIsVisible from "./products/value-is-visible";


export default function ProductsPage () {
  return (
    <section className="w-full">
        <ProductsHero />
        <ProductsHeroFooter />
        <ProductValidation />
        <HowSiraatWorks />
        <ValueIsVisible />
        <ProductsOrganisationalIntelligence />
        <ProductCta />
    </section>
  )
}
