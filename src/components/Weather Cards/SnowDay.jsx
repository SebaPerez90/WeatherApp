import sun from '../../assets/svg/sunIcon.svg';
import hills from '../../assets/svg/hills-snow.svg';
import clouds from '../../assets/svg/cloud.svg';

const RainDay = () => {
  return (
    <div className='flex flex-col relative overflow-hidden rounded-[0.6em_0.6em_0_0]'>
      <div
        className='rayShining flex justify-center items-center h-[25em]'
        style={{ background: 'linear-gradient(to top ,#CEE6F1 , #0a71d7)' }}
      >
        {/* 
         <div className='snow-container absolute top-2 flex justify-around w-full z-10'>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.1s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_2.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] rounded-full bg-sky-50 animate-[snowing_7s_linear_infinite]'></div>
        </div>
         */}
        <div className='snow-container absolute top-2 flex justify-around w-full z-10'>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.44s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.12s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.34s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.22s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.44s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.33s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.71s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.89s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.1s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.912s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.51s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.65s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.33s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.19s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.67s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.26s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.72s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.444s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.67s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.22s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.78s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.87s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.25s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.88s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.67s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.55s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.65s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.59s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.31s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.16s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.41s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.67s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.77s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.1s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.78s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.56s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.33s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5.76s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.55s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.6s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.4s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_2.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.9s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.7s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_5s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_4.2s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_3.8s_linear_infinite]'></div>
          <div className='snow h-[10px] w-[10px] relative bottom-6 rounded-full bg-sky-50 animate-[snowing_7s_linear_infinite]'></div>
        </div>
        <div className='flex flex-col animate-[rayShining_5s_linear_alternate-reverse_infinite] transition-all'>
          <div className='translate-y-6 translate-x-6'>
            <div
              className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative right-12 bottom-10 scale-[2] opacity-20'
              style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
            ></div>
            <div
              className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-16 opacity-70'
              style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
            ></div>
            <div
              className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-20 scale-50'
              style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
            ></div>
          </div>
          <div className='translate-y-[3em] scale-[1.7] translate-x-[1em]'>
            <div
              className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative right-12 bottom-10 scale-[2] opacity-20'
              style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
            ></div>
            <div
              className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-16 opacity-70'
              style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
            ></div>
            <div
              className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-20 scale-50'
              style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
            ></div>
          </div>
        </div>

        <div className='absolute flex'>
          <img
            className='blur-lg relative right-[17em] animate-[cloudsss_300ms_linear_forwards]'
            src={clouds}
            alt='clouds'
          />
          <img
            className='blur-lg relative right-[-6em] animate-[cloudsss_300ms_linear_forwards] z-40'
            src={clouds}
            alt='clouds'
          />
        </div>
        <img
          src={sun}
          alt='sun'
          style={{
            boxShadow: '0px 0px 1px #fcff333b',
            background: 'radial-gradient(circle, #fcff33e5 ,#fcff3317, transparent)',
            animation: 'sunShining 5s linear alternate-reverse infinite, SunRise 500ms linear forwards',
          }}
          className='translate-y-[13em] rounded-full border-[#fcff3316] absolute'
        />
      </div>
      <div className='absolute bottom-[-8em]'>
        <img
          src={hills}
          alt='hills'
          className='relative left-16 scale-y-[2] scale-x-[1.5] opacity-70'
        />
      </div>
    </div>
  );
};

export default RainDay;
