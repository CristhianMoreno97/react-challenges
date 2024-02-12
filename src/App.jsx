import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}