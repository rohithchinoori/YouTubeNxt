import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import WatchContext from '../../context/WatchContext'
import {Card, Text, Para, Thumb} from './StyledComponent'

const SavedVideoItem = props => {
  const {item} = props
  const res = new Date(item.published)
  const year = formatDistanceToNow(
    new Date(res.getFullYear(), res.getMonth(), res.getDate()),
  )
  const {id} = item
  const path = `/videos/${id}`
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        const TextColor = isDark ? '#f9f9f9' : '#0f0f0f'
        return (
          <>
            <Card>
              <Link to={path}>
                <Thumb src={item.thumbnail} alt="video thumbnail" />
              </Link>
              <div>
                <Text textColor={TextColor}>{item.title}</Text>
                <Para>{item.channel.name}</Para>
                <Para>
                  {item.views} views {year.slice(4, year.length)} ago
                </Para>
              </div>
            </Card>
          </>
        )
      }}
    </WatchContext.Consumer>
  )
}
export default SavedVideoItem
