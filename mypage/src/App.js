import './App.css';

import girl from './assets/mainpage/girl.png';
import mushroom from './assets/mainpage/mushroom.png';
import myPhoto from './assets/mainpage/my_photo.png';
import buttonPortfolio from './assets/buttons/button-portfolio.png';
import buttonComeBack from './assets/buttons/button-come-back.png';
import dyploma1 from './assets/dyploma/11.png';
import dyploma2 from './assets/dyploma/22.png';
import example1 from './assets/dyploma/examples.png';
import example2 from './assets/dyploma/examples2.png';
import portfolio1 from './assets/portfolio/portfolio1_web.png';
import portfolio2 from './assets/portfolio/portfolio2_web.png';
import portfolio3 from './assets/portfolio/portfolio3_web.png';
import portfolio4 from './assets/portfolio/portfolio4_web.png';
import portfolio5 from './assets/portfolio/PORTFOLIO7.png';
import portfolio6 from './assets/portfolio/portfolio8.png';
import symbol from './assets/symbols/pjatk.png';

const images = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];

const App = () => {

  return (
    <div className="main-page">
      asd
      <section id="bio" className="bio">
        <img src={girl} width="800" height="900"></img>
        <div className="bio-text">
          <h1 className="welcome">Welcome to my page</h1>
          <p className="thanks">I am very pleased that you have visited this page. I have divided it into a couple of points for easier reading and perception.
            </p>
        </div>
      </section>
      <section className="list">
        <ul className="list-text">
          <li>ABOUT ME</li>
          <li>THEORETICAL PART</li>
          <li>THE PROJECT</li>
          <li>PORTFOLIO</li>
        </ul>
        <img src={mushroom} width="600" height="800"></img>
      </section>
      <section className="about">
        <h1 className="title">ABOUT ME</h1>
        <div className="content">
          <p className="about-description">
            Hi, my name is Nastya and I am from Belarus. Now
            I am interested in 2D illustrations, character design
            and animation. I’
            m finishing my study In this year
            in PJAWSTK on faculty “ New media and Design”.
            Previously I was studying on faculty in EHU (Vilnus).
            </p>
          <img src={myPhoto} width="550" height="550"></img>
        </div>
        <a className="button" href="#portfolio"><img src={buttonPortfolio} width="300" height="150"></img></a>
        <p className="about-footer-text">here is my works I will appreciate if you check it</p>
      </section>
      <section className="teoretical">
        <h1 className="title">THEORETICAL PART</h1>
        <div className="content">
          <img src={dyploma1} width="1100" height="800"></img>
          <p className="description">
            The topic of my diploma is protest
            political art .In my theoretical part I will
            cite as an example the situation in
            Belarus in 2020 and the opposition
            side of the people, revealing in parallel
            my main thesis:
            “Is protest an art?”
            </p>
        </div>
        <div className="content">
          <p className="description">
            I am inspired on this topic by my
            native country and people who
            support Belarusians at this difficult
            time.I would also like to note that in
            the course of research for a diploma.
            I can say that opposition political art
            differs in fonts, colors and irony from
            the usual protest.
            </p>
          <img src={dyploma2} width="1100" height="800"></img>
        </div>
        <h1 className="title">THE PROJECT</h1>
        <div className="project">
          <img src={example1} width="400" height="600"></img>
          <p className="project-description">
            In my practical part of the diploma,
            I want to create a couple of posters
            and a short animation in the format
            of 2D illustrations. All works are
            planned to adhere to the same color
            scheme and ideas.
              </p>
          <img src={example2} width="300" height="400"></img>
        </div>
      </section>
      <section className="portfolio">
        <h1 id="portfolio" className="portfolio-title">PORTFOLIO</h1>
        {images.map(image => (
          <img src={image} width="550" height="800"></img>
        ))}
        <a className="button" href="#bio"><img src={buttonComeBack} width="300" height="150"></img></a>
      </section>
      <section className="portfolio"></section>
      <section className="footer">
        <div className="footer-text">
          <p>If you need to contact with me:</p>
          <p>nastyakasatkina@gmail.com</p>
          <p>Inst: k._.asatka</p>
        </div>
        <img className="footer-img" src={symbol} width="500" height="150"></img>
      </section>
    </div>
  );
}

export default App;
