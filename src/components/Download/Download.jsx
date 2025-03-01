
import './Download.css'

// eslint-disable-next-line react/prop-types
const Download = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {subTitle, title, text1, text2, text3, text4, text5, text7, imgUrl, btn} = data
  return (
    <div className="down-wrapper">
                <div className="down-content">                   
                    <div className="down-text">
                        <p><span>{subTitle}</span></p>
                        <h1>{title}</h1>
                        <h6>{text1}</h6>
                        <h6>{text2}</h6>
                        <h6>{text3}</h6>
                        <h6>{text4}</h6>
                        <h6>{text5}</h6>
                        <h6>{text7}</h6>
                        <button className="btn">{btn}</button>
                    </div>

                    <div className="down-img">
                        <img src={imgUrl} alt="App Image" />
                    </div>
                </div>
            </div>
  )
}

export default Download