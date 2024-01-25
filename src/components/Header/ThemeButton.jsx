import sunIcon from '../../assets/svg/sunIcon.svg';
import moonIcon from '../../assets/svg/moonIcon.svg';
import { useStore } from '../../../store';
import { useRef, useEffect } from 'react';

const ThemeButton = () => {
  const { themeDark, toggleTheme } = useStore();
  const btnRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    themeDark ? (svgRef.current.style.animation = 'rise 500ms linear forwards') : '';
  }, [themeDark]);

  const toggleEfect = () => {
    if (themeDark) {
      btnRef.current.style.animation = 'efect2 200ms linear 1 forwards';
      setTimeout(() => {
        toggleTheme();
      }, 220);
    } else {
      btnRef.current.style.animation = 'efect1 200ms linear 1 forwards';
      svgRef.current.style.animation = 'rotation 300ms linear infinite';
      setTimeout(() => {
        toggleTheme();
      }, 220);
    }
  };

  return (
    <>
      {themeDark ? (
        <div className='scale-[1.1] border-[2px] border-[#353149] flex justify-between items-center w-24 rounded-full bg-[#3a3a3a] shadow-[5px_5px_5px_#13131376] overflow-hidden duration-200 hover:border-[#b1adcc]'>
          <button
            ref={btnRef}
            onClick={toggleEfect}
            className='bg-[#534c7d] rounded-full border-4 h-7 w-7 ml-2 z-20'
          ></button>
          <img
            ref={svgRef}
            className='rounded-full mr-2 scale-125 z-10 relative top-12'
            src={moonIcon}
            alt='dark-theme-icon'
          />
        </div>
      ) : (
        <div className='scale-[1.1] border-[2px] border-[#ff980b] flex justify-between items-center w-24 rounded-full bg-[#ffa500] shadow-[2px_2px_6px_#3a3a3a] duration-200 hover:border-[#ffe5a6]'>
          <img
            ref={svgRef}
            className='rounded-full ml-1 z-10'
            src={sunIcon}
            alt='sun-theme-icon'
          />
          <button
            ref={btnRef}
            onClick={toggleEfect}
            className='bg-[#ffa500] rounded-full border-4 border-[#ffe5a6] h-7 w-7 mr-2 z-20'
            id='btn'
          ></button>
        </div>
      )}
    </>
  );
};

export default ThemeButton;
