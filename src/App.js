import logo from "./logo.svg";
import "./App.css";
import Mynav from "./components/Mynav";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clientswiper from "./components/Clientswiper";
import Formsec from "./components/Formsec";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex w-full">
          <Sidebar />
          <div className="pl-3  lg:w-[calc(100%-256px)] md:w-[calc(100%-150px)] w-[calc(100%-68px)] ml-auto">
            <Mynav />
            <Routes>
              <Route path="/client" element={<Clientswiper />} />
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
