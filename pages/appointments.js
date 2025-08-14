// pages/appointments.js
// This page displays the calendar, lists appointments for the selected date,
// and allows adding new appointments.


import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Calendar's default CSS

export default function Appointments() {
    // State for all appointments
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({ type: '', location: '', date: '', pet: '', details: '' });  // State for the appointment form inputs
  const [selectedDate, setSelectedDate] = useState(new Date());    // State for currently selected date on the calendar

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });   // Updates form state when a field changes
 // Adds a new appointment to the list
  const addAppointment = () => {
    if (!form.date || !form.type) return; // Simple validation
    setAppointments([...appointments, form]);
    setForm({ type: '', location: '', date: '', pet: '', details: '' }); // Reset form
  };

   // Filter appointments to only show those matching the selected date

  const filteredAppointments = appointments.filter(appt => appt.date === selectedDate.toISOString().slice(0,10));

  return (
    <>
      <Navbar />
      <main className="appointments">
        <div style={{ maxWidth: 400, margin: 'auto' }}>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </div>

        <h3>Appointments for {selectedDate.toDateString()}</h3>
        <ul className="appointments-list">
          {filteredAppointments.length === 0 && <li>No appointments for this date.</li>}
          {filteredAppointments.map((appt, i) => (
            <li key={i}>
              <strong>{appt.date}</strong> – {appt.type} for <strong>{appt.pet}</strong> at {appt.location}<br />
              <em>Notes:</em> {appt.details}
            </li>
          ))}
        </ul>

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
      </main>
      <Footer />
    </>
  );
}
