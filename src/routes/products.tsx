import ProductsPage from '@/components/products-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductsPage />
}
