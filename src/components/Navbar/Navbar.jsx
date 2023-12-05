import { NavLink } from "react-router-dom";

function Navbar() {
      
    return (
        <div style = {
            {
                display: "flex",
                backgroundColor: "#1a2639",
                color: "white",
            }
        }>
            <p style={{color:"#d9dad7"}}>Enjoy<span style={{color:"#c24d2c"}}>Films</span></p>
            <nav>
                 <ul style = {
            {
                display: "flex",
                    justifyContent: "center",
                    color: "white",
                    listStyle: "none",
                   
                }
        }>
                <li>
                    <NavLink to="/">Home</NavLink> 
                 </li>
                <li>
                    <NavLink to="movies">Movies</NavLink> 
                </li>         
             </ul> 
            </nav>
          
        </div>        
    )
}
  
export default Navbar;



  