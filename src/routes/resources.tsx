import ResourcesPage from '@/components/resources/resources-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/resources')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ResourcesPage />
}
