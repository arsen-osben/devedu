import {HashRouter, Routes, Route} from "react-router-dom";
import {NoPage} from "./pages/NoPage";
import {SingIn} from "./pages/SingIn";
import {SingUp} from "./pages/SingUp";

export default function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<SingIn />} />
                    <Route path="/singup" element={<SingUp />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </HashRouter>
        </div>
    );
}
