import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Show from './Component/Show'
import Form from './Component/Form';
import Add from './Component/Add';
import View from './Component/View';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Show />}></Route>
        <Route path='/edit/:id' element={<Form />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/view/:id' element={<View />}></Route>
      </Routes>
    </div>
  );
}

export default App;
