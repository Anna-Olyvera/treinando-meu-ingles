// ------------------------ IMPORTS ------------------------
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import BuildSentence from './pages/BuildSentence.jsx';
import KnowName from './pages/KnowName.jsx';
import './App.css';
import ProjectHead from './components/projectHead.jsx';


// ------------------------ FUNCTION ------------------------
function App() {
  return (
    <HashRouter>
      {/* import header */}
      <ProjectHead />

      {/* background site */}
      <div id='site-background'></div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-project" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/build-sentence" element={<BuildSentence />} />
        <Route path="/know-the-name" element={<KnowName />} />
      </Routes>
    </HashRouter>
  );
}

export default App;