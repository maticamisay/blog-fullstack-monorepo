import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import {  Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import Login from './Layouts/Login';
import Admin from './Layouts/Admin';
import CreatePost from './AdminLayout/Components/CreatePost';
import PrivateRoute from './Routes/PrivateRoute';
import MisPosts from './AdminLayout/Components/MisPosts';
import PostDetail from './components/PostDetail';
import Profile from './AdminLayout/Components/Profile';
import AllBlogs from './Layouts/AllBlogs';
import Search from './Layouts/Search';

function App() {

  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:search' element={<Search />} />
          <Route path='/allblogs' element={<AllBlogs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post/:postId' element={<PostDetail />} />
          <Route path='/admin'
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>} />
          <Route path='/admin/create'
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route path='/admin/myposts'
            element={
              <PrivateRoute>
                <MisPosts />
              </PrivateRoute>
            }
          />
          <Route path='/admin/perfil'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
      {/* </LoginProvider> */}
      <Footer />
    </>
  );
}

export default App;
