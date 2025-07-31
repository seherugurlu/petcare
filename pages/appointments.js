import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ type: '', location: '', date: '', pet: '', details: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addAppointment = () => {
    if (!form.date || !form.type) return;
    setAppointments([...appointments, form]);
    setForm({ type: '', location: '', date: '', pet: '', details: '' });
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Schedule an Appointment</h2>
        <input name="type" placeholder="Type (Check-up, Vaccination...)" value={form.type} onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <input name="pet" placeholder="For which pet?" value={form.pet} onChange={handleChange} />
        <textarea name="details" placeholder="Additional notes" value={form.details} onChange={handleChange}></textarea>
        <button onClick={addAppointment}>Add Appointment</button>

        <h3>Upcoming Appointments</h3>
        <ul>
          {appointments.map((appt, i) => (
            <li key={i}>
              {appt.date} – {appt.type} for {appt.pet} at {appt.location}<br />
              Notes: {appt.details}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
