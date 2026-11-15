import './App.css';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import SocialAndContact from './SocialAndContact/SocialAndContact';
import Work from './Work/Work';
import SideRibbon from './SideRibbon/SideRibbon';
import Home from './Home/Home';
import TitleBar from './TitleBar/TitleBar';

function App() {
  return (
    <div>
      <TitleBar/>
      <Home/>
      <div className="Appovrl">
        <div className='AppSideBar'>
          <SideRibbon/>
        </div>
        <div className="App">
          <Work/>
          <Education/>
          <Projects/>
          <SocialAndContact/>
        </div>
      </div>
    </div>
  );
}

export default App;