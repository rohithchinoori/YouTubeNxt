import './index.css'
import {List} from './StyledComponents'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <List>
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {tabId}
      </button>
    </List>
  )
}

export default TabItem
