import './App.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetail from './components/VideoItemDetail'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import WatchContext from './context/WatchContext'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {isDark: false, savedList: [], text: false}

  onAddItem = item => {
    this.setState(prevState => ({
      savedList: [...prevState.savedList, item],
      text: !prevState.text,
    }))
  }

  changeThemeBg = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark, savedList, text} = this.state
    console.log(savedList)
    return (
      <WatchContext.Provider
        value={{
          isDark,
          savedList,
          text,
          changeTheme: this.changeThemeBg,
          addItem: this.onAddItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos/:id" component={VideoItemDetail} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
