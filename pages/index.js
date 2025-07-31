import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to PetCare+</h1>
        <p>Track your pet's wellness, appointments, and more.</p>



      </main>
      <Footer />
    </>
  );
}
