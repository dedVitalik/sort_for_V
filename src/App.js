import './App.sass';
import AddForm from './components/AddForm';
import {Context} from './context';
import {useEffect, useState} from 'react';
import ListProducts from './pages/ListProducts';
import SearchForm from './components/SearchForm';

function App() {
    const [products, setProducts] = useState([]);
    const [foundProducts, setFoundProducts] = useState(products);
    const [searchValue, setSearchValue] = useState('');
    
    const searchProductHandler = () => {
        setFoundProducts(products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())));
    }
    
    useEffect(() => {
        setFoundProducts(products);
    }, [products]);
    
    const addProduct = (name, price, discount) => {
        setProducts([...products, {id: Date.now(), name, price, discount}]);
    }
    
    return (
        <Context.Provider value={{setSearchValue, addProduct, products, searchedProducts: foundProducts, searchProduct: searchProductHandler}}>
            <AddForm/>
            <SearchForm/>
            <ListProducts/>
        </Context.Provider>
    );
}

export default App;
