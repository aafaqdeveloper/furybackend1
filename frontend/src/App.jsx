
import { shopdata, homeDataButtons, dataSlider, navbarlinksmen } from './constants';
import { Slider, Navbar_compo, Sidebar, SidebarUser, Layout } from './components'
import { Header, Footer, Shop, Newsletter  } from './container'
import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";
import { Home, Main,
  Winter22,
  MyCart,
  WishList,
  Registration,
  Product,
  Forgot,
  Reset,
  Admin,
  User,
  DashboardAdmin,
  Dashboard,
  AddProduct,
  EditProduct,
  Profile,
  EditProfile,
  ProductDetail,
} from './pages';

import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from "react-redux"
import { getLoginStatus } from './redux/services/authService';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import { useEffect } from 'react';
import axios from "axios"
import { SET_NAME, SET_USER } from './redux/features/auth/authSlice'
import { getUser } from './redux/services/authService'
import { useState } from 'react';
import ScrollToTop from "./components/ScrollToTop"


axios.defaults.withCredentials = true;


const App = () => {
  const [data, setData] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus()
      const data = await getUser()
      setData(data)

        await dispatch(SET_USER(data))
        await dispatch(SET_NAME(data.name))
        await dispatch(SET_LOGIN(status))
    }
    loginStatus()
  }, [dispatch])
  

  return (
  <Router>
  <ToastContainer/>
  <ScrollToTop>
  {/* <Navbar_compo navbarlinksmen={navbarlinksmen} /> */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<>
          <Sidebar>
            <Layout>
              <Admin />
            </Layout>
          </Sidebar>
        </>} />

        

        <Route path='/dashboard' element={<>
          <Sidebar>
            <Layout>
            { data.role === 1 &&
              <DashboardAdmin />
            }
            { data.role === 0 &&
              <Dashboard />
            }
            
            </Layout>
          </Sidebar>
        </>} />

        
        <Route path='/add-product' element={<>
          <Sidebar>
            <Layout>
              <AddProduct />
            </Layout>
          </Sidebar>
        </>} />

        <Route path='/edit-product/:id' element={<>
          <Sidebar>
            <Layout>
              <EditProduct />
            </Layout>
          </Sidebar>
        </>} />


        <Route path='/profile' element={<>
          <Sidebar>
            <Layout>
              <Profile />
            </Layout>
          </Sidebar>
        </>} />

        <Route path='/edit-profile' element={<>
          <Sidebar>
            <Layout>
              <EditProfile />
            </Layout>
          </Sidebar>
          </>} />

          

        <Route path='/product-detail/:id' element={<>
          <Sidebar>
            <Layout>
              <ProductDetail />
            </Layout>
          </Sidebar>
        </>} />



        <Route path='/user' element={<User />} />

        <Route path='/cart/:id' element={<MyCart />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/account/register' element={<Registration />} />
        <Route path='/account/forgotpassword' element={<Forgot />} />
        <Route path='/resetpassword/:resetToken' element={<Reset />} />



        <Route path='/pages/:name' element={<Main />} />
        
        <Route path='/collections/:name' element={<Winter22 />} />
        <Route path='/product/:id' element={<Product />} />

        {/* <Route path='*' element={<Navigate to='/' />} /> */}


      </Routes>
      <Newsletter />
      <Footer />
      </ScrollToTop>
</Router>
  )
  };

export default App;
