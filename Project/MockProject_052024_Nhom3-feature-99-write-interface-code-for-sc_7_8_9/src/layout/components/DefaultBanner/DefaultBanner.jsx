import './DefaultBanner.scss';
import banner from '../../../assets/images/banner.jpg';

function DefaultBanner() {
  return (
    <div className='default-banner'>
      {/* Banner image  */}
      <img src={banner} alt='banner' className='default-banner--img' />

      {/* Banner content */}
      <div className='default-banner__content'>
        <h1 className='default-banner__content--heading'>
          AGENT <br /> FRIENDS OF CUSTOMERS
        </h1>
      </div>
    </div>
  );
}

export default DefaultBanner;
