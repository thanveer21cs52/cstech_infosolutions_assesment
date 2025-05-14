import { useState } from "react";
import axios from "axios";
import './AddAgent.css'; // Import the CSS file

const AddAgent = () => {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/agents", form);
      setMessage(res.data.message);
      setForm({ name: "", email: "", mobile: "", password: "" });
    } catch (err) {
      setMessage(err.response?.data?.message || "Error creating agent");
    }
  };

  return (
    <div className="add-agent-container">
      <h2>Add Agent</h2>
      <form onSubmit={handleSubmit} className="flex">
     <input
  type="text"
  name="name"
  placeholder="Name"
  value={form.name}
  onChange={handleChange}
  required
/>

<input
  type="email"
  name="email"
  placeholder="Email"
  value={form.email}
  onChange={handleChange}
  required
/>

<input
  type="tel"
  name="mobile"
  placeholder="Mobile"
  value={form.mobile}
  onChange={handleChange}
  pattern="[0-9]{10}"
  title="Enter a 10-digit mobile number"
  required
/>

<input
  type="password"
  name="password"
  placeholder="Password"
  value={form.password}
  onChange={handleChange}
  required
/>

    <button type="submit">Add Agent</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddAgent;
