import clouds from '../../assets/svg/cloud.svg';
import hills from '../../assets/svg/hills-day.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[.5em_.5em_0_0]'>
      <div className='rayShining flex justify-center items-center bg-blue-400 h-[25em]'>
        <div className='absolute flex'>
          <img
            className='blur-lg relative right-[17em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur-lg relative right-[-6em] animate-[cloudsss_300ms_linear_forwards]'
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
