import Home from './pages/home/home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import MyPage00 from './pages/mypage00/myPage00';
import MyPage01 from './pages/mypage01/myPage01';
import MyPage02 from './pages/mypage02/myPage02';
import MyPage03 from './pages/mypage03/myPage03';
import MyPage04 from './pages/mypage04/myPage04';
import MyPage05 from './pages/mypage05/myPage05';
import MyPage06 from './pages/mypage06/myPage06';
import MyPage07 from './pages/mypage07/myPage07';
import MyPage08 from './pages/mypage08/myPage08';
import MyPage09 from './pages/mypage09/myPage09';
import MyPage10 from './pages/mypage10/myPage10';
import MyPage11 from './pages/mypage11/myPage11';
import MyPage12 from './pages/mypage12/myPage12';
import MyPage13 from './pages/mypage13/myPage13';
import MyPage14 from './pages/mypage14/myPage14';
import MyPage15 from './pages/mypage15/myPage15';
import MyPage16 from './pages/mypage16/myPage16';
import MyPage17 from './pages/mypage17/myPage17';
import MyPage18 from './pages/mypage18/myPage18';
import MyPage19 from './pages/mypage19/myPage19';
import MyPage20 from './pages/mypage20/myPage20';
import MyPage21 from './pages/mypage21/myPage21';
import MyPage22 from './pages/mypage22/myPage22';
import MyPage23 from './pages/mypage23/myPage23';
import MyPage24 from './pages/mypage24/myPage24';
import MyPage25 from './pages/mypage25/myPage25';
import MyPage26 from './pages/mypage26/myPage26';
import MyPage27 from './pages/mypage27/myPage27';

import ThanksPage from './pages/thankspage/thanksPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mypage00' element={<MyPage00 />}/>
        <Route path='/mypage01' element={<MyPage01 />}/>
        <Route path='/mypage02' element={<MyPage02 />}/>
        <Route path='/mypage03' element={<MyPage03 />}/>
        <Route path='/mypage04' element={<MyPage04 />}/>
        <Route path='/mypage05' element={<MyPage05 />}/>
        <Route path='/mypage06' element={<MyPage06 />}/>
        <Route path='/mypage07' element={<MyPage07 />}/>
        <Route path='/mypage08' element={<MyPage08 />}/>
        <Route path='/mypage09' element={<MyPage09 />}/>
        <Route path='/mypage10' element={<MyPage10 />}/>
        <Route path='/mypage11' element={<MyPage11 />}/>
        <Route path='/mypage12' element={<MyPage12 />}/>
        <Route path='/mypage13' element={<MyPage13 />}/>
        <Route path='/mypage14' element={<MyPage14 />}/>
        <Route path='/mypage15' element={<MyPage15 />}/>
        <Route path='/mypage16' element={<MyPage16 />}/>
        <Route path='/mypage17' element={<MyPage17 />}/>
        <Route path='/mypage18' element={<MyPage18 />}/>
        <Route path='/mypage19' element={<MyPage19 />}/>
        <Route path='/mypage20' element={<MyPage20 />}/>
        <Route path='/mypage21' element={<MyPage21 />}/>
        <Route path='/mypage22' element={<MyPage22 />}/>
        <Route path='/mypage23' element={<MyPage23 />}/>
        <Route path='/mypage24' element={<MyPage24 />}/>
        <Route path='/mypage25' element={<MyPage25 />}/>
        <Route path='/mypage26' element={<MyPage26 />}/>
        <Route path='/mypage27' element={<MyPage27 />}/>

        <Route path='/thankspage' element={<ThanksPage />}/>
      </Routes>
    </Router>

    

  );
}

export default App;
