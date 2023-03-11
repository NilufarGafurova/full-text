import logo from './logo.svg';
import './App.css';
import circle from './circle3.png';

function App() {
  return (
    
    <div className="App">
      <header>
      <div className="container">
        <a href="#">Start Bootstrap</a>
        <ul>
        <li><a href="#">Homee</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
      </div>
      
      </header>
      <section id="homeSection">
      <div className="container">
          <img src={circle} class="" alt=""/>
          <h1>Full Width Pics</h1>
          <p>Landing Page Template</p>
        </div>
      </section>
      <section id="text">
        <div className="container">
          <h1>Full Width Backgrounds</h1>
        <p>Your search for G suite online advertising collaboration solution work ends here. Receptix.de is a global job marketplace that has created a tangible and seamless bridge between job aspirants and potential employment opportunities. We offer millions of jobs in destinationss</p>
            <p>Your search for G suite online advertising collaboration solution work ends here. Receptix.de is a global job marketplace that has created a tangible and seamless bridge between job aspirants and potential employment opportunities. We offer millions of jobs in destinations </p>

         
        </div>
      </section>
      <section className="imageSection"></section>
 
    </div>
  );
}

export default App;
