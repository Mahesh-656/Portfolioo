import { Suspense, lazy } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const { ref: homeRef, inView: homeInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView();
  const { ref: projectsRef, inView: projectsInView } = useInView();
  const { ref: skillsRef, inView: skillsInView } = useInView();
  const { ref: resumeRef, inView: resumeInView } = useInView();
  const { ref: contactRef, inView: contactInView } = useInView();

  return (
    <div>
      {/* Lazy load Navbar component */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>

      {/* Home Section */}
      <div ref={homeRef}>
        {homeInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )}
      </div>

      {/* About Section */}
      <div ref={aboutRef}>
        {aboutInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        )}
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        {projectsInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        )}
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        {skillsInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <Skills />
          </Suspense>
        )}
      </div>

      {/* Resume Section */}
      <div ref={resumeRef}>
        {resumeInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <Resume />
          </Suspense>
        )}
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        {contactInView && (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
