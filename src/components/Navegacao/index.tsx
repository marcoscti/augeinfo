import './style.css'
import { CiHome, CiSettings, CiStickyNote, CiPhone, CiUser, CiGrid41, CiLogout } from "react-icons/ci";
import React, { useState } from 'react'
function Navegacao() {

    const [menu, setMenu] = useState(false);
    function handleMenu() {
        if (!menu) {
            setMenu(true)
        } else {
            setMenu(false)
        }

    } return (
        <>
            <div className={`menu ${menu ? 'hidden' : 'visible'}`} onClick={handleMenu}>
                <CiGrid41 />
            </div>
            <nav className={`navegacao ${!menu ? 'hidden' : 'visible'}`}>
                <ul className="menu-list">
                <div className={`btn-close ${!menu ? 'hidden' : 'visible'}`} onClick={handleMenu}>
                <CiLogout />
            </div>
                    <li className='menu-list-item'><a className='menu-item' href="#"><CiHome /> Página inicial</a></li>
                    <li className='menu-list-item'><a className='menu-item' href="#"><CiSettings /> Serviços</a></li>
                    <li className='menu-list-item'><a className='menu-item' href="#"><CiStickyNote /> Sobre</a></li>
                    <li className='menu-list-item'><a className='menu-item' href="#"><CiPhone /> Contato</a></li>
                    <li className='menu-list-item'><a className='menu-item' href="#"><CiUser /> Área do aluno</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Navegacao;