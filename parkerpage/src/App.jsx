import './App.css';


function App() {
  return (
  <div>
    <title>Parker Profile Page</title>
    <div className = 'nav'>
      <ul class="navbar">
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="homepage.html">HOME</a></li>
        <li id="title"><a href="homepage.html">PARKER G.</a></li>
      </ul>
    </div>
    <body>
      <section class="hero">
        <div class="container">
          <svg width="800pt" height="1200pt" style={{isolation: 'isolate'}} viewBox="0 0 800 1200" xmlns="http://www.w3.org/2000/svg">
          <defs>
          <clipPath id="b">
          <rect width="800" height="1200"/>
          </clipPath>
          </defs>
          <g clip-path="url(#b)">
          <rect width="800" height="1200" fill-opacity="0"/>
          <defs>
          <filter id="c" x="-200%" y="-200%" width="400%" height="400%" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6.440413594258542" xmlns="http://www.w3.org/2000/svg"/>
          <feOffset dx="0" dy="0" result="pf_100_offsetBlur" xmlns="http://www.w3.org/2000/svg"/>
          <feFlood flood-color="#000000" flood-opacity=".65" xmlns="http://www.w3.org/2000/svg"/>
          <feComposite in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow" xmlns="http://www.w3.org/2000/svg"/>
          <feBlend in="SourceGraphic" in2="pf_100_dropShadow" xmlns="http://www.w3.org/2000/svg"/>
          </filter>
          </defs>
          <g filter="url(#c)">
          <path d="m400 261.3 389.96 677.4h-779.92l389.96-677.4zm279.83 616.82-559.66-2.879 282.32-483.24 277.34 486.12z" fill="#5d5d5d" fill-rule="evenodd"/>
          </g>
          <g fill="#6a6acc">
          <rect x="156" y="445" width="208" height="201"/>
          <ellipse cx="369" cy="545.5" rx="109" ry="100.5" vector-effect="non-scaling-stroke"/>
          </g>
          <path d="m157.89 398h50.22c1.043 0 1.89 0.847 1.89 1.89v536.92c0 1.043-0.847 1.89-1.89 1.89h-50.22c-1.043 0-1.89-0.847-1.89-1.89v-536.92c0-1.043 0.847-1.89 1.89-1.89z" fill="#6A6ACC"/>
          <g fill="#fff" filter="url(#a)">
          <rect x="210" y="499" width="138.24" height="93"/>
          <ellipse cx="351.56" cy="545.5" rx="72.441" ry="46.5" vector-effect="non-scaling-stroke"/>
          </g>
          <defs>
          <filter id="a" x="-200%" y="-200%" width="400%" height="400%" color-interpolation-filters="sRGB">
          <feOffset dx="0" dy="0" in="SourceGraphic" xmlns="http://www.w3.org/2000/svg"/>
          <feGaussianBlur result="pf_100_offsetBlur" stdDeviation="2.146804531419514" xmlns="http://www.w3.org/2000/svg"/>
          <feComposite in="SourceGraphic" in2="pf_100_offsetBlur" operator="out" result="pf_100_inverse" xmlns="http://www.w3.org/2000/svg"/>
          <feFlood flood-color="#000000" flood-opacity=".5" result="pf_100_color" xmlns="http://www.w3.org/2000/svg"/>
          <feComposite in="pf_100_color" in2="pf_100_inverse" operator="in" result="pf_100_shadow" xmlns="http://www.w3.org/2000/svg"/>
          <feComposite in="pf_100_shadow" in2="SourceGraphic" xmlns="http://www.w3.org/2000/svg"/>
          </filter>
          </defs>
          </g>
          </svg>

            <div class="info">
              <h1>Graham Web Development</h1>
                <h2>Sample text</h2>
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam dolor repellat? Enim aspernatur magnam voluptatibus iste repellendus incidunt quis!</h3>

          </div>
        </div>
      </section>
      <div class="container">
        <section class="skills" id="skills">
        <h1>Parker's Skills</h1>
          <ul>
            <li><img id="logohtml" className='listimage' src={require('./images/html_badge.jpeg')} alt="HTML logo"/><img id="logocss" class="listimage" src={require('./images/css3logo.png')} alt="CSS logo"/></li>
            <li>Web Development Experience</li>  
            <li><img id ='logopython' className="listimage" src={require('./images/pythonlogo.jpeg')} alt="Python programming language logo"/></li>
            <li>Python Programmer</li>
            <li><img className="listimage" src={require('./images/champ1logo.png')} alt="Champ 1 rank logo from Rocket League."/><img class="listimage" id="champ2logo" src={require('./images/champ2logo.png')} alt="Champ 2 Logo from Rocket League, showing a rank only 2% of players have achieved."/><img class="listimage" src={require('./images/champ3logo.webp')} alt="Champion 3 logo from Rocket League."/></li>
            <li>Rocket League Peak Rank - Champ 3 Div 4</li>
            <li><img id ='logoflask' className="listimage" src={require('./images/flasklogo.jpeg')} alt="Flask framework logo"/></li>
            <li>Web Framework Experience</li>
          </ul>
        </section>
      </div>
      <div class="container-2">
        <h1>About the Designer</h1>
        <p>Parker was born in rural Tennessee. After childhood, Parker learned coding as a way to develop cash flow. Parker is a college student who is studying history. Parker is a fan of Berserk, JoJo, and Saitama. One thing Parker loves is taking pre workout before the gym. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias odio reiciendis quas, rem earum saepe temporibus aliquid nostrum ab beatae.. <img src="authorimage.jpg" alt="Parker Graham" class="listimage" id="selfie"/> </p>
      </div>
      </body>
              <div>
                <section class="footer">
                  <p>This is test text</p>
                </section>
              </div>
  </div>
  );
}

export default App;
