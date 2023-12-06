import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";

function Layout () {
    return (
        <>
            <header>
                <Navbar/> 
            </header>
            <main>
                <Suspense fallback={<p>Preparing the page...</p>}>
                   <Outlet/> 
                </Suspense>                
            </main>
        </>
)
}

export default Layout; 