import {Link} from 'react-router-dom'
import WatchContext from '../../context/WatchContext'
import {Card, Text, Para, Thumb} from './StyledComponent'

const GameItem = props => {
  const {item} = props
  const {id} = item
  const path = `/videos/${id}`
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'

        return (
          <Card>
            <Link to={path}>
              <Thumb src={item.thumbnail} alt="video thumbnail" />
            </Link>
            <Text textColor={TextColor}>{item.title}</Text>
            <Para>{item.views} views ago</Para>
          </Card>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default GameItem
