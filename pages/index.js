// pages/index.js (Home Page)
// Displays a welcome message with the app logo
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pet">
        <div className="pet-content">
          <img src="petcare-logo.png" alt="PetCare+ Logo" className="pet-image" />
          <div className="pet-text">
            <h1>Welcome to <span>PetCare+</span></h1>
            <p>Track your pet’s wellness,<br />appointments, and more.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
