import './App.css'
import Countdown from './components/CountDown/CountDown'

function App() {
  const websiteLaunchDate = new Date('2025-09-01T10:00:00+03:00').getTime();

  return (
    <div className="placeholder-container">
      <img className="placeholder-woomen-background" src="./main_bg_placeholder.png"/>
      <div className="placeholder-right-shadow">
        <div className="placeholder-content">
          <div className="logo-wrap">
            <img src="/logo.svg" alt="Placeholder Logo" className="logo-img" />
            <h2 className="logo-signature">Приватний нотаріус, медіатор, перекладач</h2>
          </div>
          <h1 className="placeholder-title">Інфо-платформа про право, рішення та зміни.</h1>
          <p className="placeholder-description">
            COMING SOON...
          </p>
          <Countdown targetDate={websiteLaunchDate}/>
          <p className="placeholder-signature">Слідкуйте за нами в соцмережах</p>
          <div className="placeholder-social-block">
            <div className="social-block-wrap">
              <a href="#">
                <img src="./social_icons/TickTock.svg" className="social-block-img" alt="TikTok" />
              </a>
            </div>
            <div className="social-block-wrap">
              <a href="#">
                <img src="./social_icons/Thread.svg" className="social-block-img" alt="Threads" />
              </a>
            </div>
            <div className="social-block-wrap">
              <a href="#">
                <img src="./social_icons/Instagram.svg" className="social-block-img" alt="Instagram" />
              </a>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default App
