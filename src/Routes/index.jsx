import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Gallery from "../Pages/Gallery"
import Navbar from "../Components/Navbar"

export default function MyRoutes() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contact/>} />
                    <Route path="/galeria" element={<Gallery />} />
                    <Route path="*" element={<h1>404 No Encontrado</h1>} />
                </Routes>
            </div>
        </>
    )
}