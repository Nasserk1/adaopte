import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Root() {
    return (
        <>
        <Header />
        <main>
            <h1>RRRRRRR</h1>
            <Outlet />
        </main>
        <Footer />
        </>
        );
}