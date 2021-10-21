
import './App.css';
import { FetchAxios, FetchHooks, Fetching,  FetchPromise, PostAxios } from './components/Fetch';
import MainFetch from './components/practicingsearch/MainFetch';
import { Search } from './components/Search';
import ShoppingIndex from './shopping/ShoppingIndex';

function App() {
  return (
    <div className="App">
      {/* <Fetching/> */}
      {/* <FetchPromise/> */}
      <Search/>
      {/* <MainFetch/> */}
      {/* <ShoppingIndex/> */}
      {/* <FetchAxios/> */}
      {/* <FetchHooks/> */}
      {/* <PostAxios/> */}
    </div>
  );
}

export default App;
