import { useState } from "react";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ModeToggle";
import { trpc } from "./client";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading } = trpc.greeting.useQuery();

  return (
    <>
      <ModeToggle />
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        {isLoading ?? "data loading...."}
        {data ?? data}
      </div>
    </>
  );
}

export default App;
