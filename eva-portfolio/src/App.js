import './App.css';
import {Route, Routes} from "react-router";
import Main from './components/Main.js'

const App = () => {
  return (
    <div className="App">
      <header>
        
      </header>
      {/*Routes for each web page*/}
      <Routes>
          <Route path="/" element={<Main/>}/>
          {/* <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact-me" element={<ContactMe/>}/> */}
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
