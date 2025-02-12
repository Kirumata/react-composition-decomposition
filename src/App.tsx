import "./App.css"
import FinanceBlock from "./components/Blocks/Finance/FinanceBlock"
import LocalBlock from "./components/Blocks/Local/LocalBlock"
import NewsBlock from "./components/Blocks/News/NewBlock"
import OnAirBlock from "./components/Blocks/OnAir/OnAirBlock"
import PopularBlock from "./components/Blocks/Popular/PopularBlock"
import SpecialBlock from "./components/Blocks/Special/SpecialBlock"
import TvBlock from "./components/Blocks/TV/TvBlock"
import WheatherBlock from "./components/Blocks/Wheather/WheatherBlock"

function App() {


  return (
    <div className="main-grid">
      <OnAirBlock/>
      <PopularBlock/>
      <TvBlock/>
      <NewsBlock/>
      <SpecialBlock/>
      <LocalBlock/>
      <WheatherBlock/>
      <FinanceBlock/>
    </div>
  )
}

export default App
