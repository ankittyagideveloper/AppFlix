import "./App.css";
import logo from "./assets/appflix_logo.png";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { cardsData, serviceData } from "./ssr.json";

function App() {
  return (
    <div className="container ">
      <div className="navbar flex justify-between py-6 pl-4 items-center pr-10 fixed w-full ">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <ul className="flex text-white ml-36">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id="contact" className="pt-40 px-4 text-center">
        <h1 className="text-[38px] mb-4 text-white font-semibold leading-[49px]">
          Crafting Digital Experiences
        </h1>
        <p className="subHeading">
          We are a team of passionate people driven by one relentless pursuit-
          to craft innovative solutions and deliver unparalleled results.
        </p>
        <div className="max-w-[280px] ml-auto mr-auto rounded-sm">
          <a
            href="mailto:test@test.com"
            className="callToAction flex justify-center px-8 py-[15px]"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
      <div
        id="about"
        className="flex justify-center items-center flex-col md:flex-wrap md:flex-row pt-16"
      >
        {cardsData.map(({ heading, subHeading, image, id }, key) => (
          <Card
            heading={heading}
            subheading={subHeading}
            image={image}
            id={key}
          />
        ))}
      </div>
      <div
        id="services"
        className=" flex justify-center  items-center flex-col md:flex-wrap md:flex-row "
      >
        {Object?.entries(serviceData)?.map(([heading, values]) => (
          <Services heading={heading} values={values} />
        ))}
      </div>
      <div className="text-center mb-6">
        <Footer />
      </div>
    </div>
  );
}

export default App;
