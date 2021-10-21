import './App.css';
import Cake from './comonents/Cake';
import Ecommerce from './comonents/ecommerce/Ecommerce';
import { Practice } from './comonents/ecommerce/Practice';
import  FetchContainer  from './comonents/FetchContainer';
import FetchingCountryData from './comonents/FetchingCountryData';
import Container from './container/Container';
import Reselector from './Reselector';

function App() {
  return (
    <div className="App">
     
  {/* <Cake/>
  <FetchContainer/> */}
  <Ecommerce/>
  {/* <Practice/> */}
  {/* <FetchingCountryData/> */}
  {/* <Container/> */}
  {/* <Reselector/> */}
      </div>
  );
}

export default App;
