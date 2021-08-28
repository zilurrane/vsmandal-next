import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CarouselComponent = ({ commaSeparatedSliderImages }) => {
    const sliderImagesArray = (commaSeparatedSliderImages || "").split(",");
    return (
        <AwesomeSlider>
            {
                sliderImagesArray.map((imageSrc) => (
                    <div data-src={imageSrc}></div>
                ))
            }
        </AwesomeSlider>);
}

export default CarouselComponent;