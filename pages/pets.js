import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Pets() {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState({
    name: '',
    age: '',
    breed: '',
    type: '',
    allergies: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addPet = () => {
    if (!form.name) return;
    setPets([...pets, form]);
    setForm({ name: '', age: '', breed: '', type: '', allergies: '' });
  };

  const removePet = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete this pet?');
    if (confirmed) {
      const updatedPets = pets.filter((_, i) => i !== index);
      setPets(updatedPets);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pets">
        <div className="pets-form-container">
          <h2>Add a Pet</h2>
          <div className="pet-form">
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
            <input name="breed" placeholder="Breed" value={form.breed} onChange={handleChange} />
            <input name="type" placeholder="Type (Dog, Cat...)" value={form.type} onChange={handleChange} />
            <input name="allergies" placeholder="Allergies" value={form.allergies} onChange={handleChange} />
            <button onClick={addPet}>Add Pet</button>
          </div>
        </div>

        <h3>My Pets</h3>
        <div className="pets-list">
                {pets.map((pet, i) => (
                  <div className="pet-card" key={i}>
                    <div className="pet-info">
                      <p><strong>Name:</strong> {pet.name}</p>
                      <p><strong>Type:</strong> {pet.type}</p>
                      <p><strong>Age:</strong> {pet.age}</p>
                      <p><strong>Breed:</strong> {pet.breed}</p>
                      <p><strong>Allergies:</strong> {pet.allergies}</p>
                    </div>
                    <button className="delete-btn" onClick={() => removePet(i)}>Delete</button>
                  </div>
                ))}
              </div>
      </main>
      <Footer />
    </>
  );
}
