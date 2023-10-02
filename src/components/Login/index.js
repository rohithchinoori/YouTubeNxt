import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
import WatchContext from '../../context/WatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookie.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  ShowPassword = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {
      showSubmitError,
      errorMsg,
      username,
      password,
      isChecked,
    } = this.state
    const jwtToken = Cookie.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const Type = isChecked ? 'text' : 'password'
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const className = isDark ? 'dark-bg' : 'login-bg'
          const card = isDark ? 'dark-card' : 'login-card'
          return (
            <div className={className}>
              <div className={card}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                  className="web-logo"
                />
                <form onSubmit={this.submitForm}>
                  <div className="input-cont">
                    <label htmlFor="user" className="label">
                      USERNAME
                    </label>
                    <input
                      id="user"
                      type="text"
                      placeholder="Username"
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </div>
                  <div className="input-cont">
                    <label htmlFor="pass" className="label">
                      PASSWORD
                    </label>
                    <input
                      id="pass"
                      type={Type}
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      value={password}
                      className="input"
                    />
                  </div>
                  <div className="ch-box">
                    <input
                      type="checkbox"
                      id="check"
                      onClick={this.ShowPassword}
                    />
                    <label htmlFor="check">Show Password</label>
                  </div>
                  <button type="submit" className="but">
                    Login
                  </button>
                  {showSubmitError && <p className="error">* {errorMsg}</p>}
                </form>
              </div>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Login
