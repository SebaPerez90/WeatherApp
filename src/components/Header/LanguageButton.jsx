import englishIcon from '../../assets/images/englishIcon.png';
import spanishIcon from '../../assets/images/spanishIcon.png';
import { useStore } from '../../../store';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

const LanguageButton = () => {
  const { languageEng, toggleLanguage, themeDark } = useStore();
  const btnRef = useRef();

  const infoMsjLanguage = languageEng
    ? themeDark
      ? () =>
          toast('El idioma actual es el español!', {
            icon: '💡',
            style: {
              borderRadius: '10px',
              background: '#8580b0',
              color: '#fff',
            },
            duration: 2500,
          })
      : () =>
          toast('El idioma actual es el español!', {
            icon: '💡',
            style: {
              borderRadius: '10px',
              background: '#f08179',
              border: '1px solid #fff',
              color: '#fff',
            },
            duration: 2500,
          })
    : themeDark
    ? () =>
        toast('current language is english!', {
          icon: '💡',
          style: {
            borderRadius: '10px',
            background: '#8580b0',
            color: '#fff',
          },
          duration: 2500,
        })
    : () =>
        toast('current language is english!', {
          icon: '💡',
          style: {
            borderRadius: '10px',
            background: '#f08179',
            border: '1px solid #fff',
            color: '#fff',
          },
          duration: 2500,
        });

  const toggleEfect = () => {
    if (languageEng) {
      btnRef.current.style.animation = 'iconEnglish 800ms linear';
      setTimeout(() => {
        toggleLanguage();
        infoMsjLanguage();
      }, 700);
    } else {
      btnRef.current.style.animation = 'iconSpanish 1.2s linear reverse';
      setTimeout(() => {
        toggleLanguage();
        infoMsjLanguage();
      }, 500);
    }
  };

  return (
    <>
      {languageEng ? (
        <button
          ref={btnRef}
          onClick={toggleEfect}
        >
          <img
            src={englishIcon}
            alt='english-icon-reference'
            className='scale-[1.2]'
          />
        </button>
      ) : (
        <button
          ref={btnRef}
          onClick={toggleEfect}
        >
          <img
            src={spanishIcon}
            alt='spanish-icon-reference'
            className='scale-[1.2]'
          />
        </button>
      )}
    </>
  );
};

export default LanguageButton;
