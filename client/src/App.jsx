import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import Editor from "./pages/editor.pages";

const App = () => {
    return (
        <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/" element={<Navbar />} />
            <Route path="/signin" element={<UserAuthForm type="sign-in"/>} />
            <Route path="/signup" element={<UserAuthForm type="sign-up"/>} />
            <Route path="/premium" element={<UserAuthForm type="pay" />} />
        </Routes>
    );
}

export default App;
