import './App.css';
import Education from './Education/Education';
import Projects from './Projects/Projects';
// import SocialAndContact from './SocialAndContact/SocialAndContact';
import Work from './Work/Work';
import SideRibbon from './SideRibbon/SideRibbon';

function App() {
  return (
    <div className="Appovrl">
      <div className='AppSideBar'>
        <SideRibbon/>
      </div>
      <div className="App">
        <Education/>
        <Work/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
