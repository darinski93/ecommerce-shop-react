import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Video } from './components/Video/Video';
import { Category } from './components/Category/Category';
import { Bracelets } from './components/Bracelets/Bracelets';
import { Rings } from './components/Rings/Rings';
import { Necklaces } from './components/Necklaces/Necklaces';


function App() {

  const location = useLocation()
  const isHomePage = location.pathname === '/'


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category-bracelets' element={<Bracelets />} />
        <Route path='/category-rings' element={<Rings />} />
        <Route path='/category-necklaces' element={<Necklaces />} />
      </Routes>

      <Video />
      {isHomePage && <Footer />}
    </div>
  );
}

export default App;
