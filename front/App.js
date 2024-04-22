import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Categorie from "./components/categorie/Categorie";
import Marque from "./components/marque/Marque";
import Produit from "./components/produit/Produit";
import Login from "./Login/Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                {sessionStorage.getItem("session") ? (
                <>
                    					<Route path="/categorie" element={<Categorie />} />
					<Route path="/marque" element={<Marque />} />
					<Route path="/produit" element={<Produit />} />
	
                </>
                ) : (
                    <Route path="/*" element={<Login />} />
                )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
