import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>Tienda Online</h1>
            </div>
            <div>
                <button>Termotanques</button>
                <button>Estufas</button>
                <button>Cocinas</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar