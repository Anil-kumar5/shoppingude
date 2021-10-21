
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import Fourth from './components/Fourth';
import { Login } from './components/Login';
import { Homepage } from './components/Homepage';
import { Child } from './components/Child';
import RotingPract from './components/routing/RotingPract';
const First = (props) =>{
  console.log(props)
  return(

    <p>first page</p>
  )
}

const Second = (props) =>{
  console.log(props);

  return(
    <div>
  <Link to={`${props.match.url}/4`}>link to fourth page</Link>
  <Link to={`${props.match.url}/5`}>link to fifth page</Link>
  <Link to={`${props.match.url}/6`}>link to sixth page</Link> 
  <Link to={`${props.match.url}/7`}>link to seventh page</Link>
  <p>second page</p>
    </div>
    
  )
}
const Three = (props) =>{
  console.log(props)
  return(
    <div>
         <p>third page {props.match.params.secondId}</p>
         <button onClick={()=>props.history.push('/second')}>click</button>
    </div>
  
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact  path='/' component={First}/>
      <Route  exact path='/second' component={Second}/>
      <Route exact path='/second/:secondId' component={Three}/>
      <Route exact path='/fourth' component={Fourth}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/homepage' component={Homepage}/>
      <Route exact path='/https://jsonplaceholder.typicode.com/users' component={Child}/>
      <Route exact path='/routin' component={RotingPract}/>
      </Switch>
      {/* <Login/> */}
    </div>
  );
}

export default App;
