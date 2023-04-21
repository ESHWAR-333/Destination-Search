import './index.css'

const DestinationItem = props => {
  const {placeDetails} = props
  return (
    <li className="itemContainer">
      <img
        src={placeDetails.imgUrl}
        className="image"
        alt={placeDetails.name}
      />
      <p className="placeName">{placeDetails.name}</p>
    </li>
  )
}
export default DestinationItem
