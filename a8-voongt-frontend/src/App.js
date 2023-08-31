
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import products from './data/products.js';

//import BlogPage from './pages/BlogPage';
//import ContactPage from './pages/ContactPage';

import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import Gallery from './pages/Gallery.js';
import Staff from './pages/Staff.js';
import Order from './pages/Order.js';
import LogPage from './pages/LogPage.js';
import AddComicPage from './pages/AddComicPage';
import EditComicPage from './pages/EditComicPage';
import Navigation from './components/Navigation';
import TopicsPage from './pages/TopicsPage';

import './App.css';

function App() {

  const [comic, setComicToEdit] = useState([])

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Tevin Voong's Site
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
          </h1>
        </header>

        <Nav />
        <Navigation />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/LogPage" element={<LogPage setComic={setComicToEdit}/>} />
                <Route path="/create" element={<AddComicPage />} /> 
                <Route path="/update" element={<EditComicPage comicToEdit={comic} />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Order" element={<Order products={products} />} />
                <Route path="/Staff" element={<Staff />} />
                <Route path="/TopicsPage" element={<TopicsPage />} />
            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Tevin Voong</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
