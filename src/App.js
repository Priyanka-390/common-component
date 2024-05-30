import "./App.css";
import MyNav from "./components/MyNav";
import SideBar from "./components/SideBar";
import Tabs from "./components/Tabs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientSwiper from "./components/ClientSwiper";
import Formsec from "./components/Formsec";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full">
          <SideBar />
          <div className="pl-3  lg:w-[calc(100%-256px)] md:w-[calc(100%-150px)] w-[calc(100%-68px)] ml-auto">
            <MyNav />
            <Routes>
              <Route path="/client" element={<ClientSwiper />} />
              <Route path="/tabs" element={<Tabs />} />
              <Route path="/form" element={<Formsec />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
