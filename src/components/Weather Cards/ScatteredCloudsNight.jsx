import hills from '../../assets/svg/hills-day.svg';
import clouds from '../../assets/svg/cloud-grey.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[0.6em_0.6em_0_0]'>
      <div className='flex justify-center items-center bg-slate-800  h-[25em]'>
        <div className='opacity-30'>
          <div className='stars w-[7px] h-[.5px] block relative right-9 bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[22em] bottom-[2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[12em] bottom-[4.7em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[14.5em] bottom-[7em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-6em] bottom-[11em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[9.2em] bottom-[9em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.5s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-4.2em] bottom-[5em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.9s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[16.9em] bottom-[10em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-10em] bottom-[8.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-1em] bottom-[7.6em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[7em] bottom-[1.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[14.4em] bottom-[1.5em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-7em] bottom-[1.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-1.2em] bottom-[3em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[1em] bottom-[11em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[18.3em] bottom-[5.4em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.66s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[13em] bottom-[10.3em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-5.7em] bottom-[8.2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.1s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-8em] bottom-[6em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.7s_linear_alternate-reverse_infinite]'></div>
          <div className='stars w-[7px] h-[.5px] block relative right-[-9.6em] bottom-[4.2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
        </div>
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
      <div className='absolute bottom-[-8em]'>
        <img
          src={hills}
          alt='hills'
          className='relative left-16 scale-y-[2] scale-x-[1.6] brightness-75'
        />
      </div>
    </div>
  );
};

export default RainDay;
