import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  VideoCard,
  VideoListItems,
  Thumbnail,
  Desc,
  Profile,
  ViewsName,
  Title,
} from './StyledComponents'
import './index.css'

const VideoThumbnail = props => {
  const {Item} = props
  const {id} = Item
  const res = new Date(Item.publishedAt)
  const year = formatDistanceToNow(
    new Date(res.getFullYear(), res.getMonth(), res.getDate()),
  )
  const path = `/videos/${id}`

  return (
    <VideoListItems>
      <VideoCard>
        <Link to={path}>
          <Thumbnail src={Item.thumbnailUrl} alt="video thumbnail" />
        </Link>
        <Desc>
          <Profile src={Item.channel.profileImageUrl} alt="channel logo" />
          <div>
            <Title>{Item.title}</Title>
            <ViewsName>{Item.channel.name}</ViewsName>
            <ViewsName>
              {Item.viewCount} views <BsDot />
              {year.slice(4, year.length)} ago
            </ViewsName>
          </div>
        </Desc>
      </VideoCard>
    </VideoListItems>
  )
}

export default VideoThumbnail
