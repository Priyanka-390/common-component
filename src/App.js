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
        <div className="flex ">
            <Sidebar />
          </div>
          <div className="pl-3 w-full">
            <Mynav />
            <Routes>
              <Route path="/client" element={<Clientswiper />} />
              <Route path="/tabs" element={<Tabs />} />
              <Route path="/form" element={<Formsec />} />
            </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
