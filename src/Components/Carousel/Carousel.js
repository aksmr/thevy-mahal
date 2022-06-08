import './Carousel.css';
import photo1 from '../../images/open.jpg';
import photo2 from '../../images/template_restaurant.png';
import photo3 from '../../images/world_map.jpg';

export const Carousel = () => {
    return (
        <div id="galerie">
            <br/>
            <h1><strong id='galerieTitle'>Galerie</strong></h1>
            <div id="galerie2" className="carousel slide carousel-fade" data-bs-ride="false">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#galerie2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#galerie2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#galerie2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={photo1} className="d-block w-100" alt="photo1"  />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={photo2} className="d-block w-100" alt="photo2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={photo3} className="d-block w-100" alt="photo3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#galerie2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#galerie2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};