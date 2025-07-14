// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Product from "../components/Product";
import Services from "../components/Services";
import Client from "../components/Client";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => (
    <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Product />
        <Services />
        <Client />
        <Contact />
        <Footer />
    </div>
);

export default Home;
