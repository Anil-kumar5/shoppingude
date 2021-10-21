
import './App.css';
import { LifeCycle } from './components/LifeCycle';
import { UpdateLifeCycle } from './components/UpdateLifeCycle';
import { Time, WillUnmount } from './components/WillUnmount';
import { FetchingIndividual, Unmount, Unmounting } from './componentshooks/ComponentUnmount';
import { A, HooksA, HooksD } from './componentshooks/UseContext';
import {  UseEffectHook } from './componentshooks/UseEffectHook';
import { UseReducer } from './componentshooks/UseReducer';
import { UseStateHook } from './componentshooks/UseStateHook';
import JsPractice from './jspractice/JsPractice';
import Task from './tasks/Task';
import TaskPract from './tasks/TaskPract';


function App() {
  const name='kumar'
  return (
    <div className="App">
      {/* <LifeCycle/> */}
      {/* <UpdateLifeCycle name={name}/> */}
      {/* <WillUnmount/> */}
      {/* <Time/> */}
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      {/* <Unmount/> */}
      {/* <Unmounting/> */}
      {/* <FetchingIndividual/> */}
      {/* <A/> */}
      {/* <HooksA/> */}
      {/* <UseReducer/> */}
      {/* <JsPractice/> */}
      {/* <Task/> */}
      <TaskPract/>
    </div>
  );
}

export default App;
