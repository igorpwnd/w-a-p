import { useState } from 'react';

import NeedForSpeed from './page/need-for-speed/need-for-speed';
import Presentation from './page/presentation/presentation';

function App() {

  const [showPresentation, setShowPresentation] = useState(true)


  return showPresentation ? <Presentation setShowPresentation={setShowPresentation} /> : <NeedForSpeed setShowPresentation={setShowPresentation}/>


}

export default App;
