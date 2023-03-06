// import { click } from '@testing-library/user-event/dist/click'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className = "NavBar" >
            <div> 
                <button onClick = {() => console.log('hice click en accesorios')}> ACCESORIOS </button>
                <button onClick = {() => console.log('hice click en iluminacion')}> ILUMINACIION </button>
                <button onClick = {() => console.log('hice click en sustratos')}> SUSTRATOS </button>
                <button onClick = {() => console.log('hice click en combos')}> COMBOS </button>
                <button onClick = {() => console.log('hice click en parafernalia')}> PARAFERNALIA </button>
                <button onClick = {() => console.log('hice click en contacto')}> CONTACTO </button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar