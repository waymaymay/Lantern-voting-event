import Home from './pages/home/home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import MyPage from './pages/mypage/myPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mypage' element={<MyPage />}/>
      </Routes>
    </Router>

    

  );
}

export default App;
