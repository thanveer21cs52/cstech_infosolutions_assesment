import { useEffect, useState } from "react";
import axios from "axios";
import './AgentList.css'; // Import the CSS file

const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [agentDetails, setAgentDetails] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  // Fetch agents from the API
  useEffect(() => {
    const fetchAgents = async () => {
      const res = await axios.get("http://localhost:5000/api/agents");
      setAgents(res.data);
    };
    fetchAgents();
  }, []);

  // Handle editing an agent
  const handleEdit = (agent) => {
    setSelectedAgent(agent);
    setAgentDetails({
      name: agent.name,
      email: agent.email,
      mobile: agent.mobile,
    });
    setIsEdit(true);
  };

  // Handle deleting an agent
  const handleDelete = async (agentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/agents/${agentId}`);
      setAgents(agents.filter((agent) => agent._id !== agentId));
    } catch (error) {
      console.error("Error deleting agent:", error);
    }
  };

  // Handle form input change for edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAgentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handle save changes to agent
 const handleSaveChanges = async (e) => {
  e.preventDefault(); // Prevent the form from triggering a redirect

  try {
    await axios.put(
      `http://localhost:5000/api/agents/${selectedAgent._id}`,
      agentDetails
    );

    // After the update, fetch the updated list from the server
    const res = await axios.get("http://localhost:5000/api/agents");
    setAgents(res.data); // Update the agents list with the latest data
    setIsEdit(false);
    setSelectedAgent(null);
    setAgentDetails({
      name: "",
      email: "",
      mobile: "",
    });
  } catch (error) {
    console.error("Error updating agent:", error);
  }
};

  return (
    <div className="agent-list-container">
      {isEdit ? (
        <div className="edit-form-container">
          <h3>Edit Agent</h3>
          <form onSubmit={handleSaveChanges}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={agentDetails.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={agentDetails.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={agentDetails.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="agent-actions">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setIsEdit(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h2>Agent List & Tasks</h2>
          {agents.map((agent) => (
            <div key={agent._id} className="agent-card">
              <div className="agent-details agent-actions">
                <h3>
                  {agent.name} ({agent.email})
                </h3>
                <p>📞 {agent.mobile}</p>
              </div>

              <ul>
                {agent.tasks?.map((task, i) => (
                  <li key={i}>
                    <b>{task.FirstName}</b> - {task.Phone} - {task.Notes}
                  </li>
                ))}
              </ul>
              <div className="agent-actions">
                <button onClick={() => handleEdit(agent)}>Edit</button>
                <button onClick={() => handleDelete(agent._id)}>Delete</button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AgentList;
