import './Home.css'
import Carousel from './Components/Carousel'
import Services from './Components/Services';
import CommentCards from './Components/CommentCards';

const Home = props => {
	return (
		<>
        <div className="spacer"></div>
        <div className='intro'>
            <div className='we-are-box'>
                <h3>We are a</h3>
                <h2>multimedia</h2>
                <h2>content</h2>
                <h3 style={{textAlign: "right"}}>studio</h3>
            </div>
            <p>909 Media Labs is creating and providing NFTs and content for companies, artists, event logistics, we provide artwork, web design, work-in-process, digital files, metadata, advertising, design, 3D and motion graphics, drawings, sketches, ideas, audiovisual programs, original works of authorship, audio engineering for artists, brand design, audio/video editing, sound design, and music production.</p>
        </div>
        <Carousel/>
        <div className='bio'>
            <Services/>
            <div className='bio-text'>
                <p>909 Media Labs is a media content supplier for other companies, starting with musical media as well as event production, contracts with artists, and a study of the Latin American market.
                <br /> <br /> We create and handle digital content for NFTs and provide marketing solutions for different enterprises. Our team has been working together in the last 16 months. We value the passion, professionalism, and unity in our work. 
                <br /> <br /> Our team is ready for this emerging industry!
                </p>
            </div>
        </div>
        
        <CommentCards/>
        
		</>
	);
}

export default Home;