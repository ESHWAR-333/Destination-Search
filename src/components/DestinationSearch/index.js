import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {value: ''}

  updateState = event => {
    this.setState({value: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {value} = this.state
    const updatedValue = value.toLowerCase()
    const searchPlaces = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(updatedValue),
    )

    // console.log(searchPlaces)
    // console.log(value)
    return (
      <div className="mainContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search"
            className="searchInput"
            onChange={this.updateState}
            value={value}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchImage"
          />
        </div>
        <ul className="itemsContainer">
          {searchPlaces.map(eachItem => (
            <DestinationItem placeDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
