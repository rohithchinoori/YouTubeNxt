import {Component} from 'react'
import Cookie from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {GrFormClose, GrFormSearch} from 'react-icons/gr'
import Header from '../Header'
import WatchContext from '../../context/WatchContext'
import VideoThumbnail from '../VideoThumbnail'
import {
  HomeBg,
  Slider,
  SlideElements,
  List,
  ListPara,
  Contact,
  Logo,
  ContactContainer,
  LogoContainer,
  VideoContainer,
  Banner,
  BannerTop,
  NxtImage,
  Close,
  NxtVideos,
  SearchInput,
  SearchButton,
  VideoList,
  FailedImage,
  FailureHead,
  Retry,
  HomeBut,
} from './StyledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isClose: false,
    apiStatus: apiStatusConstants.initial,
    searchText: '',
    videos: [],
  }

  componentDidMount() {
    this.renderNxtVideos()
  }

  renderNxtVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchText} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const jwtToken = Cookie.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    const formatData = data.videos.map(eachVideo => ({
      id: eachVideo.id,
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    console.log(formatData)
    if (response.ok === true) {
      this.setState({
        apiStatus: apiStatusConstants.success,
        videos: formatData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderVideoStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.onSuccessVideoView()
      case apiStatusConstants.failure:
        return this.onFailureVideoView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  onSuccessVideoView = () => {
    const {videos} = this.state
    const dataLength = videos.length !== 0
    return dataLength ? (
      <VideoList>
        {videos.map(eachItem => (
          <VideoThumbnail key={eachItem.id} Item={eachItem} />
        ))}
      </VideoList>
    ) : (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const fail = isDark ? '#f9f9f9' : '#0f0f0f'
          const textColor = isDark ? '#f9f9f9' : '#0f0f0f'
          return (
            <div className="failure">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
                className="no-vid"
              />
              <FailureHead fail={fail}>No Search results Found</FailureHead>
              <ListPara TextColor={textColor}>
                Try different key words or remove search filter
              </ListPara>
              <Retry type="button" onClick={this.renderNxtVideos}>
                Retry
              </Retry>
            </div>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  onFailureVideoView = () => (
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

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  getSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  renderBanner = () => (
    <Banner data-testid="banner">
      <BannerTop>
        <NxtImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Close type="button" data-testid="close" onClick={this.closeBanner}>
          <GrFormClose size={20} />
        </Close>
      </BannerTop>
      <div className="banner-text">
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <button type="button" className="prem-but">
          GET IT NOW
        </button>
      </div>
    </Banner>
  )

  closeBanner = () => {
    this.setState(prevState => ({isClose: !prevState.isClose}))
  }

  searchResults = () => {
    this.renderNxtVideos()
  }

  render() {
    const {isClose, searchText} = this.state
    const jwtToken = Cookie.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? ' #181818' : '#f9f9f9'
          const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'
          const iconColor = isDark ? 'icon' : null
          const slideColor = isDark ? ' #383838' : '#ffffff'
          const buttonBg = isDark ? '#383838' : '#e2e8f0'
          return (
            <>
              <Header />
              <HomeBg data-testid="home">
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
                <VideoContainer bgColor={bgColor}>
                  {isClose ? null : this.renderBanner()}
                  <NxtVideos>
                    <SearchInput
                      type="search"
                      placeholder="search"
                      onChange={this.getSearchInput}
                      onKeyDown={this.onEnterSearchInput}
                      TextColor={TextColor}
                    />
                    <SearchButton
                      buttonBg={buttonBg}
                      type="button"
                      onClick={this.searchResults}
                      data-testid="searchButton"
                      value={searchText}
                    >
                      <GrFormSearch />
                    </SearchButton>
                  </NxtVideos>
                  {this.onRenderVideoStatus()}
                </VideoContainer>
              </HomeBg>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
