
import './About.css'

// eslint-disable-next-line react/prop-types
const About = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {subTitle, title, text1, text2,imgUrl, btn} = data
  return (
    <div className="about-wrapper">
                <div className="about-content">                   
                    <div className="about-text">
                        <p><span>{subTitle}</span></p>
                        <h1>{title}</h1>
                        <h6>{text1}</h6>
                        <h6>{text2}</h6>
                        <button className="btn">{btn}</button>
                    </div>

                    <div className="about-img">
                        <img src={imgUrl} alt="About" />
                    </div>
                </div>
            </div>
  )
}

export default About