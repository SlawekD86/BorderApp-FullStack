import { Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container/Container';
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import NavBar from './components/layout/NavBar/NavBar';
import Footer from './components/layout/Footer/Footer';
import AddAds from './components/pages/AddAds/AddAds';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logIn } from './redux/usersRedux';
import AdPage from './components/pages/AdPage/AdPage';
import EditPages from './components/pages/EditPages/EditPages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      dispatch(logIn({ login: loggedInUser}));
    }
  }, [dispatch]);

  return(
    <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/ads/add" element={<AddAds />}/>
            <Route path="/ads/:id" element={<AdPage />}/>
            <Route path="/ads/edit/:id" element={<EditPages />}/>
          </Routes>
        </Container>
        <Footer />      
    </main>
  )
};

export default App;
