import sun from '../../assets/svg/sunIcon.svg';
import clouds from '../../assets/svg/cloud-grey.svg';
import hills from '../../assets/svg/hills-day.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[.5em_.5em_0_0]'>
      <div className='rain-containter absolute h-full w-full flex flex-col translate-y-7 z-50'>
        <div className='flex justify-evenly relative bottom-4 left-10'>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_1.1s_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_770ms_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_500ms_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_730ms_linear_infinite]'></div>
          <div className='big-drop h-[0.5em] w-[0.5em] rounded-[50%] bg-[#a4d5f4] relative z-50 rotate-[15deg] animate-[raining_1.3s_linear_infinite]'></div>
        </div>
        <div className='flex justify-around relative bottom-6 left-11'>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_800ms_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_960ms_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1.1s_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_830ms_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1.2s_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_970ms_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_780ms_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_1s_linear_infinite]'></div>
          <div className='small-drop bg-[#a4d5f4] relative rounded-[50%] z-40 h-[0.30em] w-[0.30em] rotate-[15deg] animate-[raining_920ms_linear_infinite]'></div>
        </div>
      </div>

      <div className='flex justify-around items-center  bg-[#7392c8]'>
        <img
          src={clouds}
          alt='clouds'
          className='blur-sm scale-50 scale-x-150 translate-x-28 translate-y-[-6em]'
        />
        <img
          src={sun}
          alt='sun'
          className='scale-[4] translate-y-[-7em]'
        />
        <img
          src={clouds}
          alt='clouds'
          className='blur-sm scale-75 scale-x-110 translate-x-[-4em] '
        />
        <img
          src={clouds}
          alt='clouds'
          className='blur-sm scale-50 scale-x-110 translate-y-[-7em]'
        />
        <img
          src={clouds}
          alt='clouds'
          className='blur-sm scale-50 scale-x-110 translate-y-[-6em] translate-x-[11em] absolute'
        />
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
