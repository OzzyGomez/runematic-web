import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import Footer from './Components/Footer';

function App() {
  return (
		<HashRouter>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/terms-of-use" element={<Terms />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</HashRouter>
  );
}

export default App;
