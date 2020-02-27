import React from 'react';
import logo4 from './vlorm4.png';
import logo2 from './vlorm2.png'
import logo3 from './vlorm3.png'
import entireLogo from './VLORM_logo.png'
import './App.css';

export default class App extends React.Component {
  state = {
    signin: true,
  }
  render(){
    const {signin = true} = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <div style={{background: 'black', borderRadius: '10px', margin: '2vh'}}>
          <img src={entireLogo} className="entire-logo"/>
        </div>
        <div className="zama-form">
        <div className={`container ${!signin ? 'right-panel-active' : ''}`} id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              {/* <div className="social-container"> */}
                {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
              {/* </div> */}
              {/* <span>or use your email for registration</span> */}
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>create account</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
            
              <h1>Sign in</h1>
              {/* <div className="social-container"> */}
                {/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
              {/* </div> */}
              <span>use your email to login to your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              {/* <a href="#">Forgot your password?</a> */}
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
              <div className='lined-gears'>
            <img src={logo2} className="App-logo" alt="logo" />
            <img src={logo3} className="App-logo2" alt="logo" />
            <img src={logo4} className="App-logo" alt="logo" />
            </div>
                <h1>Welcome Back!</h1>
                <p>To access your account, please login using your credentials</p>
                <button className="ghost" onClick={e => this.setState({signin: true})}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
              <div className='lined-gears'>
            <img src={logo2} className="App-logo" alt="logo" />
            <img src={logo3} className="App-logo2" alt="logo" />
            <img src={logo4} className="App-logo" alt="logo" />
            </div>
                <h1>Create an Account</h1>
                <p>Enter a couple of details and start your journey with us</p>
                <button className="ghost" onClick={e => this.setState({signin: false})}>Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
  }
}

