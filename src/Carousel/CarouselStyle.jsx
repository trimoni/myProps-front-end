import Carousel from "react-bootstrap/Carousel";

function CarouselStyle(props) {
  return (
    
    
    <div class="carousel-item">
      <img
        src={props.photo}
        className="d-block w-100"
        alt=""
        height="200"
        width="200"
        />
      </div>
    
        
  );
}

export default CarouselStyle;
