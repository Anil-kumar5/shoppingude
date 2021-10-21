import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import NavigationBar from './components/NavigationBar';
import Practice from './components/PracticeComponent';
import SlideBar from './components/SlideBar';
import { slideData } from './components/SlideData';
import { ContextA } from './components/context/ContextA';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <NavigationBar/> */}
      {/* <Practice/> */}
      {/* <SlideBar slides={slideData}/> */}
      <ContextA/>
          </div>
  );
}

export default App;
