import { Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import Counter from "./components/Counter";

const App = () => {

return (
  <>
  <nav className="nav">
    <Link className="nav-link" to="todos">Todos</Link>
    <Link className="nav-link" to="counter">Counter</Link>
  </nav>
<Routes>
  <Route path="/todos" element={<Todos />} />
  <Route path="/counter" element={<Counter />} />
</Routes>
</>
)
}

export default App;
