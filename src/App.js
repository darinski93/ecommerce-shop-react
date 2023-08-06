import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Video } from './components/Video/Video';
import { Category } from './components/Category/Category';
import { Bracelet } from './components/Bracelet/Bracelet';
import { Item } from './components/Item/Item';


function App() {

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category-bracelets' element={<Bracelet />} />
        <Route path='/category/item/:itemId' element={<Item />} />
      </Routes>

      <Video />
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
