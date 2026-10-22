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

      <main>
        <section id="home" className="form-container">
          <img src={marjo} alt="Marjo" />
          <div>
            <h1>Hello, I'm Marjorie Ann!</h1>
            <small className="subtitle">IT Student</small>
            <p>
              I am a 3rd-year student at Batangas State University-TNEU, 
              taking up Bachelor of Science in Information Technology. 
              I am enjoying my journey as IT student and learn new things
              that will help me in my future career.
            </p>
            <a className="button" href="#about">Learn More</a>
          </div>
        </section>

        <section id="projects" className="form-container">
          <h1>Projects</h1>
          <small className="subtitle">Here are some of my personal projects.</small>
          <div className="cards">
            <div className="card">
              <h4>Movie List: Anime</h4>
              <p>A simple page of anime movies.</p>
            </div>
            <div className="card">
              <h4>Name Tag</h4>
              <p>A simple name tag.</p>
            </div>
          </div>
        </section>

        <section id="about" className="form-container">
          <h2>About</h2>
          <p>
            I am a student who wants to learn more about web development. I have a passion for creating beautiful and functional websites.
            I enjoy learning new things and turning ideas into real pages.
          </p>
        </section>

        <section id="connect" className="form-container">
          <h2>Connect</h2>
          <small className="subtitle">Let's get in touch</small>
          <p>Email: 24-13852@g.batstate-u.edu.ph</p>
          <p>Facebook: Marjorie Ann Dela Cuesta</p>
          <p>GitHub: https://github.com/Marjorie-Ann </p>
        </section>
      </main>
    </>
  );
}

export default App;