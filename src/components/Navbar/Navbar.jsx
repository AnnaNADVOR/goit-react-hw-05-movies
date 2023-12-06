import { GiFilmSpool } from "react-icons/gi";

import {
    Logo,
    LogoTitle,
    LogoTitlePart,
    Nav,
    NavList,
    NavItem, 
    Link

} from "./Navbar.styled";

function Navbar() {
      
    return (
        <>
            <Logo>
                <GiFilmSpool />
                <LogoTitle>Enjoy<LogoTitlePart>Films</LogoTitlePart></LogoTitle>
            </Logo>            
            <Nav>
                <NavList>
                    <NavItem>
                        <Link to="/">Home</Link> 
                    </NavItem>
                     <NavItem>
                        <Link to="movies">Movies</Link> 
                    </NavItem>         
                </NavList> 
            </Nav>          
        </>        
    )
}
  
export default Navbar;



  