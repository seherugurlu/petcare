import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', breed: '', type: '', allergies: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addPet = () => {
    if (!form.name) return;
    setPets([...pets, form]);
    setForm({ name: '', age: '', breed: '', type: '', allergies: '' });
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Add a Pet</h2>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
        <input name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} />
        <input name="type" placeholder="Type (Dog, Cat...)" value={form.type} onChange={handleChange} />
        <input name="allergies" placeholder="Allergies" value={form.allergies} onChange={handleChange} />
        <button onClick={addPet}>Add Pet</button>

        <h3>My Pets</h3>
        <ul>
          {pets.map((pet, i) => (
            <li key={i}>{pet.name} ({pet.type}) - Age: {pet.age}, Breed: {pet.breed}, Allergies: {pet.allergies}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
