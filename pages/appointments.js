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
            <main className="appointments">
          <div className="appointments-form-container">
            <h2>Schedule an Appointment</h2>
            <div className="appointment-form">
              <input name="type" placeholder="Type (Check-up, Vaccination...)" value={form.type} onChange={handleChange} />
              <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
              <input type="date" name="date" value={form.date} onChange={handleChange} />
              <input name="pet" placeholder="For which pet?" value={form.pet} onChange={handleChange} />
              <textarea name="details" placeholder="Additional notes" value={form.details} onChange={handleChange}></textarea>
              <button onClick={addAppointment}>Add Appointment</button>
            </div>
          </div>

          <h3>Upcoming Appointments</h3>
          <ul className="appointments-list">
            {appointments.map((appt, i) => (
              <li key={i}>
                <strong>{appt.date}</strong> – {appt.type} for <strong>{appt.pet}</strong> at {appt.location}<br />
                <em>Notes:</em> {appt.details}
              </li>
            ))}
          </ul>
        </main>
      <Footer />
    </>
  );
}
