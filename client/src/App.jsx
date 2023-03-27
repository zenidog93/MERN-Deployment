import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreatePage from './views/CreatePage';
import Dashboard from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<Dashboard />}/>
        <Route path ='/store/add' element = { <CreatePage />} />
        <Route path ='/stores/:id' element = { <DetailsPage />} />
        <Route path ='/stores/edit/:id' element = { <EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
