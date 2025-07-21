import './App.css'
import Countdown from './components/CountDown/CountDown'

function App() {
  const websiteLaunchDate = new Date('2025-09-31T13:00:00+03:00').getTime();

  return (
    <>
    <div className="placeholder-container">
      <img className="placeholder-woomen-background" src="./main_bg_placeholder_2.png" alt="" />
      <div className="placeholder-shadow">
        <div className="content-container">
          <img src="/logo.svg" alt="Placeholder Logo" className="logo-img" />
          <h2 className="logo-signature">Приватний нотаріус, медіатор, перекладач</h2>
          <h1 className="content-title">Інфо-платформа про право, рішення та зміни.</h1>
          <p className="content-description">
            COMING SOON...
          </p>
          <Countdown targetDate={websiteLaunchDate}/>
          <p className="content-signature">Слідкуйте за нами в соцмережах</p>
            <div className="content-social-block">
              <div className="social-block-wrap">
                <a className="social-block-link" href="#">
                  <img src="./social_icons/TickTock.svg" className="social-block-img" alt="TikTok" />
                </a>
              </div>
              <div className="social-block-wrap">
                <a  className="social-block-link"href="#">
                  <img src="./social_icons/Thread.svg" className="social-block-img" alt="Threads" />
                </a>
              </div>
              <div className="social-block-wrap">
                <a  className="social-block-link"href="#">
                  <img src="./social_icons/Instagram.svg" className="social-block-img" alt="Instagram" />
                </a>
              </div>
          </div>
        </div>
      </div>
      <img className="placeholder-woomen-background-mobile" src="./main_bg_placeholder-mobile.png"/>
    </div>
    </>
    
  )
}

export default App
