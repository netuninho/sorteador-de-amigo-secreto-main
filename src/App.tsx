import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
