import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useRouteMatch,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/"  element={<News key='general' category='general'/>}>
               
          </Route>
          <Route exact path="/business" element={<News key='business' category='business'/>}>
               
          </Route>
          <Route exact path="/entertainment" element={<News key='entertainment' category='entertainment'/>}>
               
          </Route>
          <Route exact path="/health" element={<News key='health' category='health'/>}>
               
          </Route>
          <Route exact path="/science" element={<News key='science' category='science'/>}>
               
          </Route>
          <Route exact path="/sports" element={<News key='sports' category='sports'/>}>
               
          </Route>
          <Route exact path="/technology" element={<News key='technology' category='technology'/>}>
               
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

