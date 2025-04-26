import { useCallback, useMemo, useState } from 'react'
import ProductList from './components/ProductList/productList';
import './App.css'

function App () {
  const [products, setProducts] = useState([
  { id: 1, name: 'Laptop', price: 999, category: 'Elektronika' },
  { id: 2, name: 'Telefon', price: 699, category: 'Elektronika' },
  { id: 3, name: 'Qulaqlıq', price: 199, category: 'Aksesuar' },
  { id: 4, name: 'Siçan', price: 49, category: 'Aksesuar' },
  { id: 5, name: 'Klaviatura', price: 79, category: 'Aksesuar' },
  ]);
  
  const [category, setCategory] = useState('Hamısı');
  const [count, setCount] = useState(0);
  
 
  const handleAddToCart = useCallback((productId) => {
  console.log(`Məhsul səbətə əlavə edildi: ${productId}`);
  }, []);
  

  const filteredProducts = useMemo(()=> {
    return products.filter(product => {
      if (category === 'Hamısı') return true;
      return product.category === category;
      });
  }, [category, products]) 
  

  const expensiveCalculation = () => {
  console.log('Bahalı hesablama icra olunur...');
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
  result += 1;
  }
  return products.reduce((total, product) => total + product.price, 0);
  };
  
  const totalPrice = useMemo(() => expensiveCalculation(), [products] );
  
  return (
  <div className="app">
  <h1>Məhsul Siyahısı</h1>
  
  <div className="controls">
  <div>
  <label>Kateqoriya seçin: </label>
  <select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="Hamısı">Hamısı</option>
  <option value="Elektronika">Elektronika</option>
  <option value="Aksesuar">Aksesuar</option>
  </select>
  </div>
  
  <div>
  <p>Sayğac: {count}</p>
  <button onClick={() => setCount(count + 1)}>Artır</button>
  </div>
  </div>
  
  <p>Ümumi qiymət: ${totalPrice}</p>
  
  <ProductList
  products={filteredProducts}
  onAddToCart={handleAddToCart}
  />
  </div>
  );
  };

export default App
