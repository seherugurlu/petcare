// pages/pets.js
// Allows the user to add pets and view them in a list
import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Pets() {
    // Stores the list of pets
  const [pets, setPets] = useState([]);
    // Stores the current values in the form
  const [form, setForm] = useState({
    name: '',
    age: '',
    breed: '',
    type: '',
    allergies: '',
  });

  // Updates form values as user types
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
 // Handles form submission: adds pet to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    setPets([...pets, form]); // Add new pet to list
      // Reset form
    setForm({
      name: '',
      age: '',
      breed: '',
      type: '',
      allergies: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-pink-50 p-6">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">My Pets</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto mb-8"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Pet Name"
            className="border p-2 w-full mb-3 rounded"
            required
          />
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            className="border p-2 w-full mb-3 rounded"
            required
          />
          <input
            type="text"
            name="breed"
            value={form.breed}
            onChange={handleChange}
            placeholder="Breed"
            className="border p-2 w-full mb-3 rounded"
            required
          />
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Type (Dog, Cat, etc.)"
            className="border p-2 w-full mb-3 rounded"
            required
          />
          <input
            type="text"
            name="allergies"
            value={form.allergies}
            onChange={handleChange}
            placeholder="Allergies (if any)"
            className="border p-2 w-full mb-3 rounded"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
          >
            Add Pet
          </button>
        </form>

        {/* Pets list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center border border-gray-200 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-pink-600">{pet.name}</h3>
              <p className="text-gray-700">Age: {pet.age}</p>
              <p className="text-gray-700">Breed: {pet.breed}</p>
              <p className="text-gray-700">Type: {pet.type}</p>
              {pet.allergies && (
                <p className="text-red-500">Allergies: {pet.allergies}</p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
