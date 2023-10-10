import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React,{useState} from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
  useRouteMatch,
} from "react-router-dom";
const App =()=>{
  const [progress, setProgress] = useState(0)
  const api_key=process.env.REACT_APP_API_KEY

    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/"  element={<News setProgress={setProgress} apikey={api_key} key='general' category='general'/>}>
               
          </Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={api_key} key='business' category='business'/>}>
               
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={api_key} key='entertainment' category='entertainment'/>}>
               
          </Route>
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={api_key} key='health' category='health'/>}>
               
          </Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={api_key} key='science' category='science'/>}>
               
          </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={api_key} key='sports' category='sports'/>}>
               
          </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={api_key} key='technology' category='technology'/>}>
               
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;

