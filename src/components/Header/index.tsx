import Logo from "../Logo";
import Navegacao from "../Navegacao";
import { CiGrid41 } from "react-icons/ci";
import './style.css'
function Header() {
    
    return (
        <header className="header">
            <div className="container">
                <Logo />
                <Navegacao />
            </div>
        </header>
    )
}
export default Header;