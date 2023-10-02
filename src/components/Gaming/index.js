import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import GameItem from '../GameItem'
import WatchContext from '../../context/WatchContext'
import './index.css'
import {
  VideoHome,
  Slider,
  SlideElements,
  List,
  ListPara,
  Contact,
  Logo,
  ContactContainer,
  LogoContainer,
  VideoPlayer,
  FailedImage,
  FailureHead,
  Retry,
  Nav,
  IconCont,
  Title,
  HomeBut,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendVideos: []}

  componentDidMount() {
    this.renderTrendingPlayer()
  }

  renderTrendingPlayer = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookie.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const formatData = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      thumbnail: eachVideo.thumbnail_url,
      title: eachVideo.title,
      views: eachVideo.view_count,
    }))
    console.log(formatData)

    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendVideos: formatData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.onSuccessTrendingVideo()
      case apiStatusConstants.failure:
        return this.onFailureTrendingVideo()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onSuccessTrendingVideo = () => {
    const {trendVideos} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'
          const navColor = isDark ? ' #231f20' : ' #ebebeb'
          const iconCont = isDark ? '#000000' : ' #cbd5e1'
          return (
            <>
              <Nav navColor={navColor}>
                <IconCont iconCont={iconCont}>
                  <SiYoutubegaming className="short" size={50} />
                </IconCont>
                <Title TextColor={TextColor}>Gaming</Title>
              </Nav>
              <ul className="ul">
                {trendVideos.map(eachVideo => (
                  <GameItem key={eachVideo.id} item={eachVideo} />
                ))}
              </ul>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onFailureTrendingVideo = () => (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const fail = isDark ? '#f9f9f9' : '#0f0f0f'
        const image = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <div className="failure">
            <FailedImage src={image} alt="failure view" />
            <FailureHead fail={fail}>Oops!Something Went Wrong</FailureHead>
            <ListPara>
              We are having some trouble to complete your request.
              <br />
              Please try again
            </ListPara>
            <Retry type="button" onClick={this.renderNxtVideos}>
              Retry
            </Retry>
          </div>
        )
      }}
    </WatchContext.Consumer>
  )

  onSuccessVideoPlayer = () => {}

  render() {
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'
          const iconColor = isDark ? 'icon' : null
          const slideColor = isDark ? ' #383838' : '#ffffff'
          const bgColor = isDark ? ' #0f0f0f' : '#f9f9f9'
          return (
            <>
              <Header />
              <VideoHome>
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
                          <ListPara TextColor={TextColor}>
                            Saved videos
                          </ListPara>
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
                <VideoPlayer bgColor={bgColor} data-testid="gaming">
                  {this.onRenderVideos()}
                </VideoPlayer>
              </VideoHome>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Gaming
