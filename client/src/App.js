import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import AddAgent from "./components/addagent";
import AgentList from "./components/agentlist";
import UploadCSV from "./components/uploadcsv";

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("token");
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes under Main layout */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      >
        <Route index element={<h2 style={{margin:"80px auto" }}>Welcome to the Main Page</h2>} />
        <Route path="add-agent" element={<AddAgent />} />
        <Route path="agents" element={<AgentList />} />
        <Route path="upload" element={<UploadCSV />} />
      </Route>

      {/* Catch-all: Redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

