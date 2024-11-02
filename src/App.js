import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header/index'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact/index'
import NotFound from './components/NotFound/index'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="main-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)
export default App
