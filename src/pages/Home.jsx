import About from "../components/About/About"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
// import Navbar from "../components/Navbar/Navbar"



import { AboutData } from "../utils/constant/About"

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}

      <Banner /> 
      <About data={AboutData} /> 
    </div>
  )
}

export default Home
