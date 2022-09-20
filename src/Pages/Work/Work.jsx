import './Work.css'
import img1 from './Assets/Rectangle 2032.png'

const Work = props => {
	return (
		<>
        <div className="top-spacer"></div>
        <div className='container'>
            <div className='featured-box'>
                <h3>Featured</h3>
                <h2>Works &</h2>
                <h2> Projects</h2>
            </div>
            <div className='years'>
                <h2>2021</h2>
                <h2>2022</h2>
            </div>
        </div>
        <div className='work-gallery'>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
            <GalleryItem src={img1} title='Federation'/>
        </div>
		</> 
	);
}

function GalleryItem ({src, title, props}) {
    return(
        <>
        <a href="" className='gallery-item'>
            {/* <img src={src} alt="" /> */}
            <img src={src} className='gallery-image'/>
            <h3 className='gallery-item-title'>{title}</h3>
            {/* <div className='galerry-item'>
                <h3 className='item-title'>título</h3>
                <img src={src} alt="" />

            </div> */}
        </a>
        </>
    )
}

export default Work;