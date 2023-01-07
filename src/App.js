import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import LoggedInPage from "./Components/LoggedInPage";
import EntityDet from "./Components/Main/EntityDet";
import HeaderTypes from "./Components/HeaderTypes";
import ClientsCards from "./Components/Client/ClientsCard";
import Select from "./Components/Select";
import Company from "./Components/Main/Company";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";

function App() {
  return (
    <div className="container-fluid d-flex">
      <Sidebar/>
      <div className="clints-company">
        <div className="clints">
          <Navbar />
          <SearchBar />
          <Select />
          <ClientsCards />
        </div>
        <div className="about-company-container">
          <LoggedInPage />
          <About/>
          <HeaderTypes />
          <Company />
          <EntityDet />
        </div>
      </div>
    </div>
  );
}

export default App;
