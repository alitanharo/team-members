import React from 'react';
import { TeamProvider } from './context/TeamContext';
import View from './pages/View';


function App() {
  return (
    <TeamProvider>
     <View/>
    </TeamProvider>
  );
}

export default App;
