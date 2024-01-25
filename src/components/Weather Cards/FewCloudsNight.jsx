import hills from '../../assets/svg/hills-day.svg';
import clouds from '../../assets/svg/cloud-grey.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[0.6em_0.6em_0_0]'>
      <div className='flex justify-center items-center bg-slate-800  h-[25em]'>
        <div className='moon-container bg-yellow-100 overflow-hidden w-24 h-24 rounded-full shadow-[0_0_25px_#fff200] relative animate-[MoonRise_600ms_linear_forwards] z-10 right-[1em] top-[-9em]'>
          <div className='crater-1 bg-[#9a998445] translate-x-[1.2em] translate-y-[0.2em]  h-4 w-4 rounded-full'></div>
          <div className='crater-2 bg-[#9a998445] translate-x-[3em] translate-y-[1em] h-8 w-8 rounded-full'></div>
          <div className='crater-3 bg-[#9a998445] translate-x-[3em] translate-y-[1.7em] h-2 w-2 rounded-full'></div>
          <div className='crater-4 bg-[#9a998445] translate-x-[.2em] translate-y-[1em] h-4 w-4 rounded-full'></div>
          <div className='crater-5 bg-[#9a998445] translate-x-[2em] translate-y-[-1.2em] h-4 w-4 rounded-full'></div>
          <div className='crater-6 bg-[#9a998445] translate-x-[3.2em] translate-y-[-5.8em] h-4 w-4 rounded-full'></div>
          <div className='crater-7 bg-[#9a998445] translate-x-[.5em] translate-y-[-4.9em] h-4 w-4 rounded-full'></div>
          <div className='crater-8 bg-[#9a998445] translate-x-[4em] translate-y-[-3em] h-4 w-4 rounded-full'></div>
          <div className='crater-9 bg-[#9a998445] translate-x-[1.2em] translate-y-[-3.6em] h-7 w-7 rounded-full'></div>
          <div className='crater-10 bg-[#9a998445] translate-x-[4.7em] translate-y-[-9em] h-4 w-4 rounded-full'></div>
        </div>
        <div>
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