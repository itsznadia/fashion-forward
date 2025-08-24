
import Bslider from "./components/Bslider"
import Favourites from "./components/Favourites"
import Sticky from "./components/Sticky"
import Tabs from "./components/Tabs"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"


const page = () => {


  return (
    <div className="max-w-[400px] mx-auto relative">

      <Navbar />
      <Sticky />
      <Bslider />
      <Tabs />
      <Favourites />
      <Footer />

    </div>
  )
}

export default page
