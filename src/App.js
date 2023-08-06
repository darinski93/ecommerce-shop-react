import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Video } from './components/Video/Video';
import { Category } from './components/Category/Category';
import { Menu } from './components/Menu/Menu';


function App() {

  const location = useLocation()
  const isHomePage = location.pathname === '/'


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category-bracelets' element={<Menu dbPath="./db/db.bracelet.json" />} />
        <Route path='/category-necklaces' element={<Menu dbPath="./db/db.necklaces.json" />} />
        <Route path='/category-rings' element={<Menu dbPath="./db/db.rings.json" />} />
      </Routes>

      <Video />
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
