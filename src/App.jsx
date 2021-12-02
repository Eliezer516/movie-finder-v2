import Navbar from "./components/Navbar";
import CardContainer from './components/CardContainer'
import Footer from './components/Footer'

import useGlobalState from './state/global.js'

function App() {
    return (
    <div>
      <Navbar />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
