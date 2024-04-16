import React from 'react';
import { ${					<Route path="/categorie" element={<Categorie />} />
					<Route path="/marque" element={<Marque />} />
					<Route path="/produit" element={<Produit />} />
	
}
					<Route path="/categorie" element={<Categorie />} />
					<Route path="/marque" element={<Marque />} />
					<Route path="/produit" element={<Produit />} />
	
owserRouter as Router, Route, Routes } from 'react-router-dom';
import Categorie from "./components/categorie/Categorie";
import Marque from "./components/marque/Marque";
import Produit from "./components/produit/Produit";


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
					<Route path="/categorie" element={<Categorie />} />
					<Route path="/marque" element={<Marque />} />
					<Route path="/produit" element={<Produit />} />
	
                </Routes>
            </div>
        </Router>
    );
}

export default App;
