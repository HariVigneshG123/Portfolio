// import logo from './logo.svg';
import './App.css';
import Education from './Education/Education';
import Projects from './Projects/Projects';
// import SocialAndContact from './SocialAndContact/SocialAndContact';
import Work from './Work/Work';
import SideRibbon from './SideRibbon/SideRibbon';

function App() {
  return (
    <div className="Appovrl">
      <div>
        <SideRibbon/>
      </div>
      <div className="App">
        <Education/>
        <Work/>
        <Projects/>
        {/* <SocialAndContact/> */}
      </div>
    </div>
  );
}

export default App;
