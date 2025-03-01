import './Client.css'

// eslint-disable-next-line react/prop-types
const Client = ({data}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {imgUrl} = data
  return (
    <div className='client-wrapper'>
      <div className="client-content">
      <img src={imgUrl} alt="Brand logo" />
      </div>
    </div>
  )
}

export default Client