import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import {
    HeaderContainer,
    SuspenseInfo,
} from "./Layout.styled";

function Layout () {
    return (
        <>
            <header>
                <HeaderContainer>
                   <Navbar/>  
                </HeaderContainer>                
            </header>
            <main>
                <Suspense fallback={<SuspenseInfo>Preparing the page...</SuspenseInfo>}>
                   <Outlet/> 
                </Suspense>                
            </main>
        </>
)
}

export default Layout; 