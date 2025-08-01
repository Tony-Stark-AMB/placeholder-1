import './App.css';
import logo from "./assets/logo.svg";
import facebook from "./assets/social-icons/Facebook.svg";
import ticktock from "./assets/social-icons/TickTock.svg";
import instagram from "./assets/social-icons/Instagram.svg";
import Countdown from './components/CountDown/CountDown';


function App() {
  const websiteLaunchDate = new Date('2025-09-30T13:00:00+03:00').getTime();

  return (
    <>
    <div className="placeholder-container">
       <div className="placeholder-shadow">
         {/* <div className="content-container">
          <img src={logo} alt="Placeholder Logo" className="logo-img" />
          <h2 className="logo-signature">Приватний нотаріус, медіатор, перекладач</h2>
          <h1 className="content-title">Інфо-платформа про право, рішення та зміни.</h1>
          <p className="content-description">
            COMING SOON...
          </p>
          <Countdown targetDate={websiteLaunchDate}/>
          <p className="content-signature">Слідкуйте за нами в соцмережах</p>
            <div className="content-social-block">
              <div className="social-block-wrap">
                <a className="social-block-link" href="https://www.tiktok.com/@korneenkova_nadia">
                  <img src={ticktock} className="social-block-img" alt="TikTok" />
                </a>
              </div>
              <div className="social-block-wrap">
                <a  className="social-block-link"href="https://www.facebook.com/nk.prnotary">
                  <img src={facebook} className="social-block-img" alt="Facebook" />
                </a>
              </div>
              <div className="social-block-wrap">
                <a  className="social-block-link"href="https://www.instagram.com/nadia_korneenkova_notary/">
                  <img src={instagram} className="social-block-img" alt="Instagram" />
                </a>
              </div>
          </div>
        </div>  */}
      </div>
      <div className="fill-block">
          
      </div>
      <div className="shadow">
        <div className="container">
          <img className="logo" src={logo} alt="logo.svg" />
          <h2 className="logo-signature">Приватний нотаріус, медіатор, перекладач</h2>
          <h1 className="title">Інфо-платформа про право, рішення та зміни.</h1>
          <p className="title-signature">COMING SOON...</p>
          <Countdown targetDate={websiteLaunchDate}/>
          <div className="divider"></div>
          <p className="text">Слідкуйте за нами в соцмережах</p>
          <div className="social-block">
              <div className="social-block-wrap">
                <a className="social-block-link" href="https://www.tiktok.com/@korneenkova_nadia">
                  <img src={ticktock} className="social-block-img" alt="TikTok" />
                </a>
              </div>
              <div className="social-block-wrap">
                <a  className="social-block-link"href="https://www.facebook.com/nk.prnotary">
                  <img src={facebook} className="social-block-img" alt="Facebook" />
                </a>
              </div>
              <div className="social-block-wrap">
                <a  className="social-block-link"href="https://www.instagram.com/nadia_korneenkova_notary/">
                  <img src={instagram} className="social-block-img" alt="Instagram" />
                </a>
              </div>
          </div>
        </div>
      </div>
      
      {/* <div className="placeholder-woomen-background"></div> */}
      <div className="placeholder-woomen-background-mobile"></div>
      <div className="placeholder-woomen-background"></div>
    </div>
    </>
    
  )
}

export default App
