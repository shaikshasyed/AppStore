import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {imageUrl, appName} = AppDetails
  return (
    <li className="app-item-container">
      <img className="App-image" src={imageUrl} alt={appName} />
      <p className="App-name">{appName}</p>
    </li>
  )
}

export default AppItem
