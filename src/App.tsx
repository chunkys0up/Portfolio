import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Image_gallery from './pages/ImageGallery';
import AboutMe from './pages/AboutMe';
import './styles.css';

function App() {
    return (
        <HashRouter>
            <nav>
                <Link to="/">About</Link>
                <Link to="/gallery">Gallery</Link>
            </nav>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/gallery" element={<Image_gallery />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
