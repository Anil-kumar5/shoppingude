import logo from './logo.svg';
import './App.css';
import Styles from './components/Styles'
import Hover from './components/Hover';
import { Practice } from './components/Practice';
import PracticeHover from './components/HoverPractice';
import { details } from './components/Two';
import AMFooter from './amfooter/AMFooter';
import AMHomePageItems from './amitems/AMHomePageItems';
import AMHomePageAuctions from './amitems/AMHomePageAuctions';
import AMCard from './amcards/AMCards';
import Carousel from './carousel/Carousel';
import ReverseAuction from './page-4/ReverseAuction';
import Ma from './trial/Ma';
import Mat from './trial/Mat';
import ItemFilter from './page-2/ItemFilter';
import Navbar from './navbar/Navbar';
import Products from './page-2/header/Products';
import Trial from './trial/trial';

function App() {
  return (
    <div className="App">
     {/* <Styles/>  */}
     <Hover/>
     {/* <Practice/> */}
     {/* <PracticeHover/> */}
     {/* 
      <AMCard/>
     <AMHomePageAuctions/>
     <AMFooter/>
     */}
     {/* <Carousel/> */}
     {/* <ReverseAuction/> */}
    {/* <Ma/> */}
    {/* <Mat/> */}
    {/* <ItemFilter/> */}
    {/* <Navbar/> */}
    {/* <Products/> */}
    {/* <Trial/> */}
    </div>
  );
}

export default App;
