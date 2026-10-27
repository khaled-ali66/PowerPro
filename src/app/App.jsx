import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Splash from '../components/ui/Splash'

export default function App() {
  return (
    <Splash>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/teams/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
    </Splash>
  )
}