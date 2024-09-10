
import Navbar from "../Navbar";
import Particle from "../Particle";
import Footer from "../Footer";

function DefaultLayout({children}) {
  return (
    <>
      <Navbar />
      <Particle />
      <div className="container py-20 mx-auto">
          {children}
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout;