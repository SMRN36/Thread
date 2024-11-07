import Loading from "./components/common/Loading";
import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Protected/Home";
import Search from "./pages/Protected/Search";

const App = () =>{
  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/user" element={<h1>User Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;