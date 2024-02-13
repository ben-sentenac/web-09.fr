import './App.css'
import Sidebar from './components/navigation/sidebar.navigation.component';
import profileImg from './assets/ben.svg'
import ServiceCard from './components/cards/service-card.cards.component';

import SERVICES from './static/data';
import ContactForm from './components/forms/contact-form.forms.component';
import ButtonBase from './components/buttons/button-base.buttons.component';
function App() {
  return (
    <>
      <Sidebar />
      <div id="wrapper" className="xl:ml-72 pt-28 xl:pt-56">
        <section id="Intro" className=" mx-8 xl:mx-28 flex flex-col xl:flex-row">
          <div className="site-title-content">
            <h1 className="site-title text-center"><strong className="font-bold">CRÉATION DE SITE WEB</strong></h1>
            <h2 className="xl:w-4/5 mx-auto text-2xl text-center">
              développeur freelance basé dans le département de <strong>l'Ariège</strong>. Je suis spécialisé dans la création de sites internet, ainsi que dans la gestion de projets web
            </h2>
          </div>
          <div className="profile-image">
            <img className="w-1/2 xl:w-full mx-auto" src={profileImg} alt="https://web-09.fr" />
          </div>
        </section>
        <section id="Services" className="bg-white text-dark py-16 px-8">
          <div className="cards flex flex-col xl:flex-row mt-8">
            { SERVICES.map((service,id) => {
              return (<ServiceCard key={id} {...service} ><ButtonBase text="En savoir plus"/></ServiceCard>)
            }
          )}
          </div>
        </section>
        <section id="Contact">
          <ContactForm />
        </section>
      </div>
      <footer></footer>
    </>
  )
}

export default App
