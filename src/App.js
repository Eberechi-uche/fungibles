import { Home } from "./Routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Routes/Navbar/Navbar";
import { HeaderAnimate } from "./component/header/Header";
function App() {
  return (
    <div className="App">
      <HeaderAnimate />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
