import '../styles/App.scss';

import {
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from 'react-icons/fa';
import {
  AiOutlineMenu,
} from 'react-icons/ai';


function App() {
  // VARIABLES ESTADO

  // USEEFFECT ?

  // FUNCIONES HANDLER

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header className='header'>
        <img className='header__img'
          src="https://www.shutterstock.com/image-illustration/piggy-bank-using-computer-isolated-260nw-1117143518.jpg"
          title="Logo del proyecto"
          alt="Cerdito con pc"
        />
        <div className='header__menu'>
          <AiOutlineMenu></AiOutlineMenu>
        </div>
        <nav className='header__nav'>
          <ul className='header__nav_list'>
            <li><a className='header__nav_list-element' href="">Protectora/Santuario</a></li>
            <li><a className='header__nav_list-element' href="">Adopción</a></li>
            <li><a className='header__nav_list-element' href="">Casa de acogida</a></li>
            <li><a className='header__nav_list-element' href="">Voluntarios</a></li>
            <li><a className='header__nav_list-element' href="">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <section className='main__motive'>
          <h1 className='main__motive-title'>Título, Nombre de la página </h1>
          <p className='main__motive-desc'>Motivo de la página más dar las gracias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae tempora minima quis eum incidunt necessitatibus quo ad tempore soluta nobis harum, molestias, voluptates, ratione placeat deserunt sed nemo nisi.</p>
        </section>
        <section className='main__aboutUs'>
          <h2 className='main__aboutUs-title'>Sobre nosotras</h2>
          <p className='main__aboutUs-info'>Somos Lucía (fondo o color de letra para diferenciar redes) y Raquel (idem)...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestias reprehenderit expedita? Sapiente voluptas obcaecati vitae ipsa et consectetur explicabo, doloremque fugiat nulla? Neque illum iusto alias rem cupiditate perspiciatis.</p>
          <p className='main__aboutUs-desc'>fusionar amor por los animales y la programación.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis enim repellat architecto similique magnam, ipsum rerum placeat aut. Voluptate expedita veritatis reiciendis doloribus quam pariatur, aut impedit dolorem dolores voluptatum.</p>
          <div className='main__aboutUs_box'>
            <div className='main__aboutUs_box-Raquel' >
              <a href="https://www.adalab.es" target="_blank" rel="noreferrer">
                <FaLinkedin className='main__aboutUs_box-Raquel1'></FaLinkedin>
              </a>
              <a href="https://github.com/Rpg87" target="_blank" rel="noreferrer">
                <FaGithub className='main__aboutUs_box-Raquel1'> </FaGithub>
              </a>
            </div>
            <div className='main__aboutUs_box-Lucia'>

              <a href="https://www.linkedin.com/in/lucia-kestel/" target="_blank" rel="noreferrer"><FaLinkedin className='main__aboutUs_box-Lucia1' /></a>
              <a href="https://github.com/Luciakestel" target="_blank" rel="noreferrer"><FaGithub className='main__aboutUs_box-Lucia1' /></a>

            </div>
          </div>

        </section>
      </main>
      <footer className='footer'>
        <p className='footer__copy'> NOMBREPROYECTO &copy; 2022</p>

        <a href="/" ><FaArrowUp className='footer__arrow' /></a>
      </footer>
    </div >
  );
}

export default App;
