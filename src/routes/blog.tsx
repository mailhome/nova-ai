import BlogPage from '@/components/blog-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BlogPage />
}
