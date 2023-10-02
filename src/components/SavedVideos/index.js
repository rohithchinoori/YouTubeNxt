import {Link, Redirect} from 'react-router-dom'
import Cookie from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import SavedVideoItem from '../SavedVideoItem'
import './index.css'
import {
  SaveCont,
  Head,
  Nopara,
  SaveList,
  NoSave,
  Slider,
  SlideElements,
  List,
  ListPara,
  Contact,
  Logo,
  ContactContainer,
  LogoContainer,
  HomeBut,
  Nav,
  IconCont,
  Title,
} from './StyledComponents'

const SavedVideos = () => {
  const jwtToken = Cookie.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {savedList, isDark} = value
        const isEmpty = savedList.length === 0
        const slideColor = isDark ? ' #383838' : '#ffffff'
        const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'
        const iconColor = isDark ? 'icon' : null
        const bgColor = isDark ? ' #0f0f0f' : '#f9f9f9'
        const navColor = isDark ? ' #231f20' : ' #ebebeb'
        const iconCont = isDark ? '#000000' : ' #cbd5e1'
        return (
          <>
            <Header />
            <SaveCont>
              <Slider slideColor={slideColor}>
                <SlideElements>
                  <List>
                    <Link to="/">
                      <HomeBut>
                        <AiFillHome className={iconColor} />
                        <ListPara TextColor={TextColor}>Home</ListPara>
                      </HomeBut>
                    </Link>
                  </List>
                  <List>
                    <Link to="/trending">
                      <HomeBut>
                        <MdWhatshot className={iconColor} />
                        <ListPara TextColor={TextColor}>Trending</ListPara>
                      </HomeBut>
                    </Link>
                  </List>
                  <List>
                    <Link to="/gaming">
                      <HomeBut>
                        <SiYoutubegaming className={iconColor} />
                        <ListPara TextColor={TextColor}>Gaming</ListPara>
                      </HomeBut>
                    </Link>
                  </List>
                  <List>
                    <Link to="/saved-videos">
                      <HomeBut>
                        <MdPlaylistAdd className={iconColor} />
                        <ListPara TextColor={TextColor}>Saved videos</ListPara>
                      </HomeBut>
                    </Link>
                  </List>
                </SlideElements>
                <ContactContainer>
                  <Contact>CONTACT US</Contact>
                  <LogoContainer>
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                    />
                    <Logo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </LogoContainer>
                  <ListPara TextColor={TextColor}>
                    Enjoy! Now to see your channels and recommendations!
                  </ListPara>
                </ContactContainer>
              </Slider>
              <SaveList bgColor={bgColor}>
                {isEmpty ? (
                  <NoSave>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                      className="save"
                    />
                    <Head textColor={TextColor}>No saved videos found</Head>
                    <Nopara textColor={TextColor}>
                      You can save your videos while watching them
                    </Nopara>
                  </NoSave>
                ) : (
                  <>
                    <Nav navColor={navColor}>
                      <IconCont iconCont={iconCont}>
                        <MdWhatshot className="short" size={50} />
                      </IconCont>
                      <Title TextColor={TextColor}>Saved Videos</Title>
                    </Nav>
                    <ul>
                      {savedList.map(eachValue => (
                        <SavedVideoItem key={eachValue.id} item={eachValue} />
                      ))}
                    </ul>
                  </>
                )}
              </SaveList>
            </SaveCont>
          </>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default SavedVideos
