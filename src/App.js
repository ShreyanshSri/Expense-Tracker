import "./App.css";
import AddTranscation from "./components/AddTranscation";
import Balance from "./components/Balance";
import TranscationList from "./components/TranscationList";
import Header from "./components/header.js";
import IncomeExpenses from "./components/incomeExpenses";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TranscationList/>
        <AddTranscation/>
      </div>
    </GlobalProvider>
  );
}

export default App;
