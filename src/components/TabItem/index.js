import './index.css'

const TabItem = props => {
  const {tabDetails, getResultedApps, isActive} = props
  const {tabId, displayText} = tabDetails

  const getApps = () => {
    getResultedApps(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab' : ''
  return (
    <li className="tab-item-container">
      <button type="button" className={`tab-btn ${activeTabClassName}`} onClick={getApps}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
