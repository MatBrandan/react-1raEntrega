// import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar justify-content-between" style={{backgroundColor: "#A90015"}}>
            <div>
                <h1 style={{color: "#F2F5FA"}} >Tienda Online</h1>
            </div>
            <div>
                <button className='btn btn-secondary mx-5'>Termotanques</button>
                <button className='btn btn-secondary mx-5'>Estufas</button>
                <button className='btn btn-secondary mx-5'>Cocinas</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar