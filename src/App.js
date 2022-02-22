import { Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import Counter from "./components/Counter";
import Resourses from "./components/Resourses";
import UseRef from "./components/UseRef";

const App = () => {

return (
  <>
  <nav className="nav">
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="todos">Todos</Link>
    <Link className="nav-link" to="counter">Counter</Link>
    <Link className="nav-link" to="resourses">Resourses</Link>
    <Link className="nav-link" to="useref">UseRef</Link>
  </nav>
<Routes>
  <Route path="/todos" element={<Todos />} />
  <Route path="/counter" element={<Counter />} />
  <Route path="/resourses" element={<Resourses />} />
  <Route path="/useref" element={<UseRef />} />
</Routes>
</>
)
}

export default App;
