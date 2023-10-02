import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import Cookie from 'js-cookie'
import WatchContext from '../../context/WatchContext'
import './index.css'
import {
  HeaderBg,
  NxtImage,
  HeaderItems,
  HeaderList,
  LogoutButton,
  ProfileImage,
  ThemeImage,
  ThemeButton,
  PopupBut,
  PopupBut1,
} from './StyledComponents'

const Header = props => {
  const {history} = props
  const LogoutPage = () => {
    Cookie.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark, changeTheme} = value
        const ChangeLight = () => {
          changeTheme()
        }
        const resTheme = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        const bgColor = isDark ? '  #383838' : '#f9f9f9'
        const ButColor = isDark ? '#fff' : '#3b82f6'
        const NxtWave = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <HeaderBg bgColor={bgColor} data-test-id="home">
            <Link to="/">
              <NxtImage src={NxtWave} alt="website logo" />
            </Link>
            <HeaderItems>
              <HeaderList>
                <ThemeButton
                  type="button"
                  onClick={ChangeLight}
                  data-testid="theme"
                >
                  <ThemeImage src={resTheme} alt="theme" />
                </ThemeButton>
              </HeaderList>
              <HeaderList>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </HeaderList>
              <HeaderList>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" ButColor={ButColor}>
                      Logout
                    </LogoutButton>
                  }
                  className="popup"
                >
                  {close => (
                    <div className="des">
                      <p>Are you sure, you want to logout</p>
                      <div className="but-cont">
                        <PopupBut type="button" onClick={() => close()}>
                          Cancel
                        </PopupBut>
                        <PopupBut1 type="button" onClick={LogoutPage}>
                          Confirm
                        </PopupBut1>
                      </div>
                    </div>
                  )}
                </Popup>
              </HeaderList>
            </HeaderItems>
          </HeaderBg>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default withRouter(Header)
