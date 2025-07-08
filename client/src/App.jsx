import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element ={<Home/>}/>
        <Route path="blog" element={<Blog/>}/>
        <Route path='blog/:slug' element={<Post/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
    </div>
  )
  


}
export default App;
