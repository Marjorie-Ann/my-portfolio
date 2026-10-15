import './style.css';
import marjo from './assets/marjo.jpg';

function App() {
  return (
    <>
      <header>
        <h3>MARJORIE</h3>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <section id="home">
        <img src={marjo} alt="Marjo" />
        <div>
          <h1>Hello, I''m Marjorie Ann!</h1>
          <small>IT Student</small>
          <p>
            I am a 3rd-year student at Batangas State University-TNEU, 
            taking up Bachelor of Science in Information Technology. 
            I am enjoying my journey as a student and learning new things
            in the field of this course.  
          </p>
          <a className="button" href="#about">Learn More</a>
        </div>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <small>Here are some of my personal projects.</small>
        <div className="cards">
          <div>
            <h4>Movie List: Anime</h4>
            <small>A simple React page of anime movies.</small>
          </div>
          <div>
            <h4>Name Tag</h4>
            <small>A simple name tag.</small>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>
          I am a student who loves building websites with React.
          I enjoy learning new things and turning ideas into real pages.
        </p>
      </section>

      <section id="connect">
        <h2>Connect</h2>
        <small>Let's get in touch</small>
        <p>Email: yourname@email.com</p>
        <p>Facebook: facebook.com/yourname</p>
        <p>GitHub: github.com/yourname</p>
      </section>
    </>
  )
}

export default App;
