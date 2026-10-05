import SolutionsPage from '@/components/solutions-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SolutionsPage />
}
