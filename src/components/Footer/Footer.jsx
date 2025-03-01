import "./Footer.css";
import FooterData from "../../utils/constant/Footer";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-section">
          <h3>{FooterData.about.title}</h3>
          <p>{FooterData.about.text1}</p>
          <p>{FooterData.about.text2}</p>

          <div className="social-icons">
          {FooterData.socialIcons.map((icon) => (
            <a key={icon.id} href={icon.link} className="icon">
              <i className={icon.icon}></i>
            </a>
          ))}
        </div>
        </div>

        <div className="footer-section">
          <h3>{FooterData.navigation.title}</h3>
          <ul>
            {FooterData.navigation.links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>


        <div className="footer-section">
          <h3>{FooterData.recentPosts.title}</h3>
          {FooterData.recentPosts.posts.map((post, index) => (
            <div key={index} className="recent-post">
              <p>{post.text}</p>
              <span><i className="fa fa-calendar"></i> {post.date}</span>
            </div>
          ))}
        </div>

        <div className="footer-section">
          <h3>{FooterData.newsletter.title}</h3>
          <p>{FooterData.newsletter.text}</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
