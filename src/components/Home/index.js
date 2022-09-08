import './styles.scss';
import Body from '../../assets/body.png';
import Muscu1 from '../../assets/muscu1.jpg';
import Muscu2 from '../../assets/muscu2.jpg';
import Muscu3 from '../../assets/muscu3.jpg';

const Home = () => {
	
	return (
	<div className="home">
	
		<div className="container">	
		<img src={ Body } alt="react logo" />
		<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={Muscu1} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Programmer</h5>
        <p>Structurer vos séances en fonction de votre matériel.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={Muscu2} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Atteindre</h5>
        <p>Arrive à accomplir vos objectifs.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Muscu3} class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Préparer</h5>
        <p>Prévoir vos repas et votre structure alimentaire.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


	</div>
);
};

export default Home;


