import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const CarouselComponent = ({ commaSeparatedSliderImages }) => {
    const sliderImagesArray = (commaSeparatedSliderImages || "").split(",");
    return (
        <AwesomeSlider>
            {
                sliderImagesArray.map((imageSrc, index) => (
                    <div key={index} data-src={imageSrc}></div>
                ))
            }
        </AwesomeSlider>);
}

export default CarouselComponent;