import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import SingleBlog from './pages/SingleBlog';
import CreateBlog from './pages/CreateBlog';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {

  return (
    <div className='min-h-screen bg-white dark:bg-black dark:text-white'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element ={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path='/blogs/:id' element={<SingleBlog/>}/>
        <Route path='/create' element={<CreateBlog/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    <Footer/>
    </div>
  )
  


}
export default App;
