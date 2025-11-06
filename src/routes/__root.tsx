import { createRootRoute, Outlet } from '@tanstack/react-router'
import { useSafeArea, useIsMobile } from '@/shared/hooks'
import { Header, Footer } from '@/widgets/layout'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  useSafeArea()
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile && <Header />}

      {/* Main content area */}
      <main className="flex-1 container py-6 relative">
        <Outlet />
      </main>

      {isMobile && <Footer />}
      
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  )
}

