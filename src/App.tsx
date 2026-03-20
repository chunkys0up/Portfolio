import './styles.css'
import Image_gallery from './pages/ImageGallery';
function App() {

    return (
        <div>
            <nav>
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
            </nav>
            <Image_gallery />
        </div >
    );
}

export default App;
