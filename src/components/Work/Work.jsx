import "./Work.css";

// eslint-disable-next-line react/prop-types
const Work = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const {title, subTitle, imgUrl } = data
    return (
        <div className="work-wrapper">               
                <div className="work-content">
                    <img src={imgUrl} alt="" />
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                </div>
        </div>
    );
};

export default Work;