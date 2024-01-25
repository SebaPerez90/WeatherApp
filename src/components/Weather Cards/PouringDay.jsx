import sun from '../../assets/svg/sunIcon.svg';
import clouds from '../../assets/svg/cloud-grey.svg';
import hills from '../../assets/svg/hills-day.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[.5em_.5em_0_0]'>
      <div className='h-[25em] bg-sky-700'>
        <div className='rain absolute top-2 flex justify-around w-full z-10'>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_200ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_300ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_200ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_320ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_310ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_500ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_300ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_470ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_280ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_490ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_350ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_250ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_500ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_600ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_450ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_520ms_linear_infinite;]'></div>
          <div className='drop h-4 w-[3px] bg-sky-400 animate-[pouringRain_370ms_linear_infinite;]'></div>
        </div>
        <img
          src={sun}
          alt='sun'
          className='relative left-[18em] top-[2em] scale-[2.5]'
        />
        <div className='clouds absolute flex'>
          <img
            className='scale-x-[1.7] relative right-[17em] bottom-[5em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='scale-x-[1.7] z-10 relative right-[-6em] bottom-[5em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
        </div>
      </div>
      <div className='hills absolute bottom-[-8em] '>
        <img
          src={hills}
          alt='hills'
          className='relative left-16 scale-y-[2] scale-x-[1.5]'
        />
      </div>
    </div>
  );
};

export default RainDay;
