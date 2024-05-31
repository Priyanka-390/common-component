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
    <div className="flex w-full h-screen mx-auto overflow-hidden bg-[#F5F5F5]">
      <div className="flex w-full">
        <SideBar />
        <div className="flex flex-col w-full">
          <MyNav />
          <div className="flex flex-col w-full h-[calc(100vh-150px)] px-12 mt-12 pb-10 overflow-y-scroll">
            <Routes>
              <Route path="/" exact element={<Header />}></Route>
              <Route path="/swiper" exact element={<ClientSwiper />}></Route>
              <Route path="/tabs" exact element={<Tabs />}></Route>
              <Route path="/form" exact element={<Formsec />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
