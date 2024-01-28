import Home from './pages/home/home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import MyPage from './pages/mypage/myPage';
import ThanksPage from './pages/thankspage/thanksPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mypage' element={<MyPage />}/>
        <Route path='/thankspage' element={<ThanksPage />}/>
      </Routes>
    </Router>

    

  );
}

export default App;
