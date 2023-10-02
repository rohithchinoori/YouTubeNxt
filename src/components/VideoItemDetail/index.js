import {Component} from 'react'
import ReactPlayer from 'react-player'
import {Link, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookie from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {GrLike, GrDislike} from 'react-icons/gr'
import Header from '../Header'
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
  Para,
  Views,
  LikeSave,
  Li,
  ChannelInfo,
  Profile,
  HomeBut,
} from './StyledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetail extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: [],
    isClick: false,
    isClick1: false,
    isChecked: true,
  }

  componentDidMount() {
    this.renderVideoPlayer()
  }

  renderVideoPlayer = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookie.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formatData = {
      channel: {
        name: data.video_details.channel.name,
        profileImage: data.video_details.channel.profile_image_url,
        subscribers: data.video_details.channel.subscriber_count,
      },
      description: data.video_details.description,
      id: data.video_details.id,
      published: data.video_details.published_at,
      thumbnail: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      views: data.video_details.view_count,
    }
    console.log(formatData)
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formatData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getLike = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  getDisLike = () => {
    this.setState(prevState => ({isClick1: !prevState.isClick1}))
  }

  onRenderVideoPlayer = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.onSuccessVideoPlayer()
      case apiStatusConstants.failure:
        return this.onFailureVideoPlayer()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onFailureVideoPlayer = () => (
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

  onSuccessVideoPlayer = () => {
    const {videoData, isClick, isClick1, isChecked} = this.state
    console.log(isChecked)
    const res = new Date(videoData.published)
    const year = formatDistanceToNow(
      new Date(res.getFullYear(), res.getMonth(), res.getDate()),
    )
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark, addItem, text} = value
          const textColor = isDark ? '#f9f9f9' : '#0f0f0f'
          const name = isClick ? 'active' : 'inactive'
          const name1 = isClick1 ? 'active' : 'inactive'
          const icon = isClick ? 'active-icon' : 'icons'
          const icon1 = isClick1 ? 'active-icon' : 'icons'
          const Text = text ? 'Saved' : 'Save'
          const getAddItem = () => {
            addItem(videoData)
          }
          return (
            <>
              <ReactPlayer url={videoData.videoUrl} />
              <Para textColor={textColor}>{videoData.title}</Para>
              <div className="list">
                <Views>
                  {videoData.views} views
                  <BsDot />
                  {year.slice(4, year.length)} ago
                </Views>
                <LikeSave>
                  <button type="button" onClick={this.getLike} className={name}>
                    <Li>
                      <GrLike className={icon} />
                      Like
                    </Li>
                  </button>
                  <button
                    type="button"
                    onClick={this.getDisLike}
                    className={name1}
                  >
                    <Li>
                      <GrDislike className={icon1} />
                      Dislike
                    </Li>
                  </button>
                  <button type="button" className="buts" onClick={getAddItem}>
                    <Li>
                      <MdPlaylistAdd />
                      {Text}
                    </Li>
                  </button>
                </LikeSave>
              </div>
              <hr className="hr" />
              <ChannelInfo>
                <Profile
                  src={videoData.channel.profileImage}
                  alt="channel logo"
                />
                <div>
                  <Para>{videoData.channel.name}</Para>
                  <Views>{videoData.channel.subscribers} subscribers</Views>
                  <Views>{videoData.description}</Views>
                </div>
              </ChannelInfo>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }

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
                <VideoPlayer bgColor={bgColor} data-testid="videoItemDetails">
                  {this.onRenderVideoPlayer()}
                </VideoPlayer>
              </VideoHome>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default VideoItemDetail
