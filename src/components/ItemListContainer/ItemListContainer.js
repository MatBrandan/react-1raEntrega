import Counter from '../Counter/Counter'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {
    return(
    <div>
        <h1 className='tituloMain'>{greeting}</h1>
        <Counter />        
    </div>
    )
}

export default ItemListContainer