import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
