
import './App.css';
import NavBar  from './Components/NavBar';
import Front from './Components/Front'
import PageTwo from './Components/PageTwo';
import FlashSales from './Components/Flash-Sales/FlashSales';
import ProductList from './Components/Product-List/ProductList';
import Validation from './Components/FormValidation/Validation';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <NavBar/>
   <Front/>
  <PageTwo/>
  <FlashSales/>
  <ProductList/>
  <Validation/>
  <Footer/>

    </div>
  );
}

export default App;
