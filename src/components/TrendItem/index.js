import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import WatchContext from '../../context/WatchContext'
import './index.css'
import {Card, Text, Para, Thumb} from './StyledComponents'

const TrendItem = props => {
  const {item} = props
  const {id} = item
  const res = new Date(item.publishedAt)
  const year = formatDistanceToNow(
    new Date(res.getFullYear(), res.getMonth(), res.getDate()),
  )
  const path = `/videos/${id}`
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'

        return (
          <Card>
            <Link to={path}>
              <Thumb src={item.thumbnailUrl} alt="video thumbnail" />
            </Link>
            <div>
              <Text textColor={TextColor}>{item.title}</Text>
              <Para>{item.channel.name}</Para>
              <Para>
                {item.viewCount} views {year} ago
              </Para>
            </div>
          </Card>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default TrendItem
