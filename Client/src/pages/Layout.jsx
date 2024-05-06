import { Outlet } from "react-router-dom"
import Footer from "../elements/Footer"
import Header from "../elements/Header"

const Layout = _ => {
    return <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
}

export default Layout;