import "./App.css";
import Tabs from "./components/Tabs";
import { Route, Routes } from "react-router-dom";
import ClientSwiper from "./components/ClientSwiper";
import Formsec from "./components/Formsec";
import MyNav from "./components/MyNav";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="pl-3  lg:w-[calc(100%-256px)] md:w-[calc(100%-150px)] w-[calc(100%-68px)] ml-auto">
        <MyNav />
        <Routes>
          <Route path="/" exact element={<Header />}></Route>
          <Route path="/swiper" exact element={<ClientSwiper />}></Route>
          <Route path="/tabs" exact element={<Tabs />}></Route>
          <Route path="/form" exact element={<Formsec />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
