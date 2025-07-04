import { useState } from "react"
import Card from "./components/Card"
import PassGeneratorIcon from "./assets/PassGenerator_icon.png"
import counterIcon from "./assets/counter_icon.png"
import colorChangerIcon from "./assets/colorChanger_icon.png"
import Counter from "./components/Counter"
import ColorChanger from "./components/ColorChanger"
import Calculator from "./components/Calculator"
import PassGenerator from "./components/PassGenerator"

function App() {

  const [view, setView] = useState("");
  const handleViewChange = (newView) => {
    setView(newView);
    console.log(`Current view: ${newView}`);
  };

  return (
    <>
    <div className="text-white bg-black p-5 shadow-lg shadow-gray/40 text-center text-xl italic">
      <h1 >Basic React Apps</h1>
    </div>
    <div className="flex items-center justify-center gap-5 flex-wrap p-3">
      <Card title="Counter" description="A React app using useState to increment and decrement a counter via button clicks." image={counterIcon} handleView={handleViewChange}/>
      <Card title="Color Changer" description="A React app that dynamically updates background or text color using useState and event handlers." image={colorChangerIcon} handleView={handleViewChange}/>
      <Card title="Password Generator" description="A React app that creates random passwords based on length, numbers, and special characters." image={PassGeneratorIcon} handleView={handleViewChange}/>
    </div>
    {view==="Counter" && <Counter />}
    {view==="Color Changer" && <ColorChanger/>}
    {view==="Password Generator" && <PassGenerator/>}
    {view==="" && <div className="text-center text-gray-500 mt-5">
      <p>Click on a card to view the app.</p>
    </div>}
    </>
  )
}

export default App
