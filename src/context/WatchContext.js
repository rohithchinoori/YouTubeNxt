import React from 'react'

const WatchContext = React.createContext({
  isDark: false,
  savedList: [],
  text: false,
  changeTheme: () => {},
  addItem: () => {},
})
export default WatchContext
