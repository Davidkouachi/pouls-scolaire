import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Accueil from './pages/Accueil';

import Offre_emploi from './pages/Offre_emploi';
import Offre_emploi_details from './pages/Offre_emploi_details';

import Formation from './pages/Formation';
import Formation_details from './pages/Formation_details';

import Header from './composants/Header';
import Footer from './composants/Footer';


function App() {
  return (
    <div class="nk-body bg-lighter " >
      <div class="nk-app-root">
        <div class="nk-wrap ">

          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/offre emploi" element={<Offre_emploi />} />
              <Route path="/details offre emploi" element={<Offre_emploi_details />} />
              <Route path="/formation" element={<Formation />} />
              <Route path="/formation details" element={<Formation_details />} />
            </Routes>      
            <Footer />
          </Router>

        </div>
      </div>
    </div>

  );
}

export default App;