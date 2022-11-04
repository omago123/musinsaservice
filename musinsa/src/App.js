import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Main from './component/Main'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
