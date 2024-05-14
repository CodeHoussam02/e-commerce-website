import Layout from "./pages/Layout";
import "./App.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Deals from "./pages/deals";
import Contact from "./pages/contact";
import About from "./pages/about";
import Login from "./pages/Login";
import Wrapper from "./pages/logwrap";
import Signup from "./pages/Signup";
import Forgetpage from "./pages/Forgetpage";
import Passwordpage from "./pages/Passwordpage";
import Cart from "./pages/Cart";
import Dashbord from "./pages/dashbord/page";
import ProductPage from "./pages/ProductPage";
import Verification from "./pages/verifyPage";
import axios from "axios";
import ActivationPage from "./pages/activationPage";

// default url
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/today_deals" element={<Deals />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Route>
            <Route path="/verification" element={<Verification />} />
            <Route path="/forgotmail" element={<Forgetpage />} />
            <Route path="/confirm/:activationcode" element={<ActivationPage />} />
            <Route path="/newpassword" element={<Passwordpage />} />
            <Route path="/dashboard" element={<Dashbord />} />
        </>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={routes} />
        </>
    );
}

export default App;
