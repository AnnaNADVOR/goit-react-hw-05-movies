import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";

function Layout () {
    return (
        <>
            <header>
                <Navbar/> 
            </header>
            <main>
                <Outlet/>
            </main>
      </>
)
}

export default Layout; 