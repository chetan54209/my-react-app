import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const employee = {
    id: 1,
    name: "Rahul",
    designation: "Frontend Developer",
    skills: ["React", "JavaScript", "Redux"],
    isActive: true
  };

  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
        <EmployeeCard employee={employee} />
      </main>
      <Footer />
    </>
  );
}

export default App;
