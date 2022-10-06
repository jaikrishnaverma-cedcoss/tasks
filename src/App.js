
import './App.css';
import Task1 from './Task1';
import Task2 from './Task2';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
 return(
    <>
    <nav className='nav' style={{width:"100vw",height:"50px",display:"flex"}}>
        <Link to="task1">Task1</Link>
        <Link to="task2">Task2</Link>
    </nav>
<Routes>
<Route path="task1" element={<Task1/>} />
<Route path="task2" element={<Task2/>} />
</Routes>
        </>
 )
}

export default App;
