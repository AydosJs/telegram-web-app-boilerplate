import { createFileRoute } from '@tanstack/react-router'
import { UserInfo } from '@/components'

export const Route = createFileRoute('/')({
  component: IndexComponent,
})

function IndexComponent() {
  return <UserInfo />
}
