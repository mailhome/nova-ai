import Contact from '@/components/contact/contact'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Contact />
}
