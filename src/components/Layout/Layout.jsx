import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import { HeaderContainer } from "./Layout.styled";

function Layout () {
    return (
        <>
            <header>
                <HeaderContainer>
                   <Navbar/>  
                </HeaderContainer>                
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