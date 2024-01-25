import clouds from '../../assets/svg/cloud.svg';
import hills from '../../assets/svg/hills-day.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[.5em_.5em_0_0]'>
      <div className='rayShining flex justify-center items-center bg-blue-400 h-[25em]'>
        <div className='absolute flex'>
          <img
            className='blur relative right-[17em] scale-x-150 animate-[clouds_4s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur relative left-[-10em] top-[-2em] scale-x-150 animate-[clouds_4s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur relative left-[-55em] top-[-2.2em] scale-x-150 animate-[clouds_4s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur absolute left-[30em] top-[-2em] animate-[clouds_4s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur absolute left-[9em] top-[2em] scale-x-150 animate-[clouds_4s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur absolute left-[21em] top-[2em] scale-x-150 animate-[clouds_4s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur absolute left-[-2em] top-[5em] scale-x-150 animate-[clouds_2s_linear_infinite_alternate-reverse]'
            src={clouds}
            alt='clouds'
          />
        </div>
      </div>
      <div className='absolute bottom-[-8em] '>
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
