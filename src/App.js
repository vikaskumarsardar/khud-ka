import Image from './firebase/image';
import './App.css'
import UploadFiles from './firebase/Files'
function App() {
  // const [mod,setMod]=useState(null);
  // const [setu,setSetu]=useState(false);
  
  
  return (
    <div className="App">
    <UploadFiles/>
    <Image/>
    {/* <h2>swapan kumar sardar chor hai</h2> */}
    
    
      
    </div>
  );
}

export default App;
