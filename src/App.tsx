import { Button } from "@/components"
import { useSafeArea, useIsMobile } from "@/shared/hooks"
import { Header, Footer } from "@/widgets/layout"

function App() {
  useSafeArea()
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col min-h-screen">
      {isMobile && <Header />}

      {/* Main content area */}
      <main className="flex-1 container">
        <Button>Click me</Button>
      </main>

      {isMobile && <Footer />}
    </div>
  )
}

export default App
