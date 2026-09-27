import ShamsPage from '@/components/shams/shams-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shams')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ShamsPage />
}
