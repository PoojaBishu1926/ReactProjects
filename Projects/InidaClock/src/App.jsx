import IndiaClock from "./components/IndiaClock"
import ClockMoto from "./components/ClockMoto"
import CurrTime from "./components/CurrTime"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
function App() {
  return <center>
    <IndiaClock></IndiaClock>
    <ClockMoto></ClockMoto>
    <CurrTime></CurrTime>
  </center>
}

export default App
