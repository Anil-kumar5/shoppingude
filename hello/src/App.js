import { useEffect } from 'react';
import './App.css';
import Password from './components/PasswordHide';
import { RegistrationForm } from './components/RegVolidation';
import { Login } from './components/Login';
import {Provider} from 'react-redux';
import { store } from './redux/Store';
import Render from './redux/Render';
import VisibilityPractice from './components/VisibilityPractice';
import AddIcon from '@material-ui/icons/Add';
import  AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HtmlPract from './HtmlPract';
function App() {
     useEffect(()=>{
         console.log('mounted')
         return()=>{
           console.log('un')
         }
     },[])
  return (
    <Provider store={store}>    
    <div className="App">
      {/* <Password/> */}
      {/* <RegistrationForm/> */}
      {/* <Login/> */}
      {/* <Render/> */}
      {/* <VisibilityPractice/> */}
      <HtmlPract/>
    </div>
  
    </Provider>
  );
}

export default App;
