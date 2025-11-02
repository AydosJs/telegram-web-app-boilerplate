import { Button } from "@/components"
import { useSafeArea } from "@/hooks/use-safe-area"

function App() {
  useSafeArea()

  return (
    <div className="">
      <Button>Click me</Button>
    </div>
  )
}

export default App
