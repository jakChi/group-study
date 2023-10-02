import "./App.css";
import Leaderboard from "./components/Leaderboard";
import RandomQoutes from "./components/RandomQoutes";
import Gate from "./components/Gate";


function App() {  
  return (
    <div>
      <RandomQoutes />
      <Gate />
      <Leaderboard />
    </div>
  );
}

export default App;
