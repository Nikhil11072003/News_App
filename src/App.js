import './App.css';

import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <Main>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<News pageSize={6}  country={'in'} category={'general'}/>} />
        <Route exact path='/business' element={<News pageSize={6} Head={'Bussiness'} country={'in'} category={'business'}/>} />
        <Route exact path='/entertainment' element={<News pageSize={6} Head={'Entertainment'} country={'in'} category={'entertainment'}/>} />
        <Route exact path='/health' element={<News pageSize={6} Head={'HealthCare'} country={'in'} category={'health'}/>} />
        <Route exact path='/science' element={<News pageSize={6} Head={'Science'} country={'in'} category={'science'}/>} />
        <Route exact path='/sports' element={<News pageSize={6} Head={'Sports'} country={'in'} category={'sports'}/>} />
        <Route exact path='/technology' element={<News pageSize={6} Head={'Technology'} country={'in'} category={'technology'}/>} />
      </Routes>
      </Main>
    </>
  );
}

export default App;
