import './App.css';
import { Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';




function App() {
  return (
    <div className="App">
      
      <Route exact path="/" component={Landing}/>
      <Route  exact path="/home" component={Home}/>
      <Route exact path="/detail" component={Detail}/>
      <Route exact path="/create" component={Form}/>
      
    </div>
  );
}

export default App;
