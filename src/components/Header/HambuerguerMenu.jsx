import { useRef, useState, useEffect } from 'react';
import { useStore } from '../../../store';
import ThemeButton from './ThemeButton';
import LanguageButton from './LanguageButton';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { TbTemperatureFahrenheit } from 'react-icons/tb';
import { toast } from 'react-hot-toast';
import { MdExpandMore } from 'react-icons/md';
import { Link } from 'wouter';

const HambuerguerMenu = () => {
  const { themeDark, languageEng, temperatureUnit, setTemperatureUnit } = useStore();

  const container_bars = useRef();
  const first_bar = useRef();
  const second_bar = useRef();
  const third_bar = useRef();
  const refIcon = useRef();

  const [active, setActive] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const infoMsjUnits = themeDark
    ? (text) =>
        toast(text, {
          icon: '💡',
          style: {
            borderRadius: '10px',
            background: '#8580b0',
            color: '#fff',
            minWidth: 'max-content',
          },
          duration: 2500,
        })
    : (text) =>
        toast(text, {
          icon: '💡',
          style: {
            borderRadius: '10px',
            background: '#f08179',
            border: '1px solid #fff',
            color: '#fff',
            minWidth: 'max-content',
          },
          duration: 2500,
        });

  // this efect run when "temperature units" change
  useEffect(() => {
    if (isFirstRender) {
      // if is the first rendering, dont do anything
      setIsFirstRender(false);
      return;
    }
    if (languageEng) {
      temperatureUnit === 'metric'
        ? infoMsjUnits('Current measurement unit: degrees Celsius')
        : infoMsjUnits('Current measurement unit: degrees Fahrenheit');
    } else {
      temperatureUnit === 'metric'
        ? infoMsjUnits('Unidad de medición actual : grados Celsius')
        : infoMsjUnits('Unidad de medición actual : grados Fahrenheit');
    }
  }, [temperatureUnit]);

  // this feature controls the view of the hamburger menu when the user clicks on it.
  const openMenu = () => {
    if (active) {
      first_bar.current.style.cssText = 'height: 0.1;transition: 300ms; transform: rotate(0deg)';
      second_bar.current.style.cssText = 'height: 0.1;transition: 300ms; opacity:1';
      third_bar.current.style.cssText = 'height: 0.1;transition: 300ms; transform: rotate(0deg)';

      setTimeout(() => {
        container_bars.current.style.cssText = 'gap: 0.4; transition: all 300ms';
      }, 300);

      setActive(!active);
    } else {
      container_bars.current.style.cssText = 'gap:0 ; transition: all 100ms; transform : translateY(.5em)';

      setTimeout(() => {
        first_bar.current.style.animation = 'rotation 200ms linear forwards';
        second_bar.current.style.animation = 'rotation 200ms linear forwards';
        third_bar.current.style.animation = 'rotation 200ms linear forwards';
      }, 120);

      setTimeout(() => {
        first_bar.current.style.cssText =
          'height:0.3; transition: 300ms; transform: rotate(-40deg); position:relative;';
        second_bar.current.style.opacity = '0';
        third_bar.current.style.cssText =
          'height:0.3; transition: 300ms; transform: rotate(40deg); position:relative;top:-0.6em';
      }, 500);

      setActive(!active);
    }
  };

  // this feature controls the expand/collapse preference menu option.
  const expandPreferences = () => {
    let preference = document.querySelector('.hidden-preference-options');

    preference.classList.toggle('preferences-dt');
    preference.classList.toggle('preferences-lt');

    if (preference.classList.contains('preferences-dt')) {
      refIcon.current.style.animation = 'toggleExpand 600ms forwards';
    } else {
      refIcon.current.style.animation = 'toggleCollapse 600ms forwards';
    }

    if (preference.classList.contains('preferences-lt')) {
      refIcon.current.style.animation = 'toggleExpand 600ms forwards';
    } else {
      refIcon.current.style.animation = 'toggleCollapse 600ms forwards';
    }
  };

  return (
    <>
      <div
        ref={container_bars}
        onClick={openMenu}
        className='ham-menu-container'
      >
        <span
          ref={first_bar}
          className='first-bar'
        ></span>
        <span
          ref={second_bar}
          className='second-bar'
        ></span>
        <span
          ref={third_bar}
          className='third-bar'
        ></span>
      </div>
      {active ? (
        <div className={themeDark ? 'header-menu-dt' : 'header-menu-lt'}>
          <h1>Menu</h1>

          <nav className='nav-bar'>
            <Link
              className='text-rose-50'
              to='/'
            >
              {languageEng ? 'Home' : 'Inicio'}
            </Link>
            <Link
              className='text-rose-50'
              to='/readme'
            >
              readme
            </Link>
            <Link
              className='text-rose-50'
              to='/contact'
            >
              {languageEng ? 'contact' : 'contacto'}
            </Link>

            <div>
              <div className={themeDark ? 'preference-container-dt' : 'preference-container-lt'}>
                <p onClick={expandPreferences}>{languageEng ? 'preferences' : 'preferencias'}</p>
                <span ref={refIcon}>
                  <MdExpandMore />
                </span>
              </div>

              <div className='hidden-preference-options'>
                <ul className={themeDark ? 'menu-list-dt' : 'menu-list-lt'}>
                  <li>
                    <ThemeButton />
                  </li>
                  <li className='asado flex items-center justify-between'>
                    <LanguageButton />

                    {temperatureUnit === 'metric' ? (
                      <button onClick={() => setTemperatureUnit()}>
                        <TbTemperatureCelsius className='scale-[2]' />
                      </button>
                    ) : (
                      <button onClick={() => setTemperatureUnit()}>
                        <TbTemperatureFahrenheit className='scale-[2]' />
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
};

export default HambuerguerMenu;
