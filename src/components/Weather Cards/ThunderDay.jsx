import sun from '../../assets/svg/sunIcon.svg';
import clouds from '../../assets/svg/cloud-grey.svg';
import hills from '../../assets/svg/hills-day.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[.5em_.5em_0_0]'>
      <div className='h-[25em] bg-sky-700'>
        <div className='thunder-container absolute flex justify-between top-[7em]'>
          <div
            className='thunder bg-amber-300 w-[200px] h-[200px] relative bottom-[-1.5em] z-40 scale-y-[1.3] animate-[thunderStorm_2s_steps(3)_infinite]'
            style={{ clipPath: 'polygon(18% 0, 42% 1%, 26% 29%, 43% 44%, 27% 69%, 32% 100%, 21% 68%, 33% 43%, 9% 29%)' }}
          ></div>
          <div
            className='thunder bg-amber-300 w-[200px] h-[200px] relative bottom-[-1.5em] z-40 scale-y-[1.3] animate-[thunderStorm_5s_steps(3)_infinite]'
            style={{ clipPath: 'polygon(18% 0, 42% 1%, 26% 29%, 43% 44%, 27% 69%, 32% 100%, 21% 68%, 33% 43%, 9% 29%)' }}
          ></div>
          <div
            className='thunder bg-amber-300 w-[200px] h-[200px] relative bottom-[-1.5em] z-40 scale-y-[1.3] animate-[thunderStorm_3.5s_steps(3)_infinite]'
            style={{ clipPath: 'polygon(18% 0, 42% 1%, 26% 29%, 43% 44%, 27% 69%, 32% 100%, 21% 68%, 33% 43%, 9% 29%)' }}
          ></div>
        </div>
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
            className='blur-sm scale-x-[1.7] relative right-[17em] bottom-[5em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur-sm scale-x-[1.7] z-10 relative right-[-6em] bottom-[5em] animate-[cloudsss_300ms_linear_forwards]'
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
