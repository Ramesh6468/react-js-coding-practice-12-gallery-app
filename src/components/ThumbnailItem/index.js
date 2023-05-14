// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbId} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  console.log(thumbnailAltText)

  const onClickImage = () => {
    setActiveThumbId(id)
  }

  const thumbnail = isActive ? 'thumbnail1' : 'thumbnail2'
  return (
    <li className="imageContainer">
      <button className="button" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={thumbnail} />
      </button>
    </li>
  )
}
export default ThumbnailItem
