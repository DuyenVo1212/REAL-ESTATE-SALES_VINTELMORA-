import './CustomBanner.scss';
import banner from '../../../assets/images/banner.jpg';

function CustomBanner() {
  return (
    <div className='custom-banner'>
      {/* Banner image  */}
      <img src={banner} alt='banner' className='custom-banner--img' />

      {/* Banner content */}
      <div className='custom-banner__content'>
        <h1 className='custom-banner__content--heading'>
          SELL YOUR HOME <br /> RIGHT NOW WITH GAYLORD
        </h1>
      </div>
    </div>
  );
}

export default CustomBanner;
