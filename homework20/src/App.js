import { HashRouter , Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import ContactApp from "./pages/Contact";
import Photos from "./pages/Photos";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/photos" element={<Photos />} />
                    <Route path="/contact" element={<ContactApp />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
