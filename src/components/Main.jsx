import CardInfo from './CardInfo.jsx';
import ForecastNextDays from './ForecastNextDays.jsx';
import History from './History.jsx';

import { FcSearch } from 'react-icons/fc';
import { FaHistory } from 'react-icons/fa';

import { Redirect } from 'wouter';
import { useStore } from '../../store.js';
import { toast } from 'react-hot-toast';
import { useEffect, useRef } from 'react';
import OverViewApp from './OverViewApp.jsx';

export default function WeatherData() {
  const {
    shouldRedirect,
    languageEng,
    valueCapture,
    setValueCapture,
    setWeatherData,
    themeDark,
    weatherData,
    hiddenHistory,
    setHiddenHistory,
    temperatureUnit,
  } = useStore();

  const APIkey = '3d9cbbaa2c744ad8b91912d8c0979261';
  const URLDinamicRequest = `https://api.openweathermap.org/data/2.5/forecast?q=${valueCapture}&units=${temperatureUnit}&appid=${APIkey}`;

  // references
  const historyRef = useRef();
  const myInput = useRef();

  useEffect(() => {
    if (!weatherData.city) return;

    historyRef.current.handleSetHistory();
    historyRef.current.handleSetIcon();
    historyRef.current.handleSetTemp();
  }, [weatherData]);

  // alert message in the case the input it is empty
  const errorMessage = () => {
    document.querySelector('.message').classList.toggle('error-message');
    if (themeDark) {
      document.querySelector('.weather-input-dt').classList.toggle('error-container');
      document.querySelector('.main-weather-form-dt').style.animation = 'error-efect 300ms linear infinite';

      setTimeout(() => {
        document.querySelector('.message').classList.remove('error-message');
        document.querySelector('.weather-input-dt').classList.remove('error-container');
        document.querySelector('.main-weather-form-dt').style.animation = 'none';
      }, 1500);
    } else {
      document.querySelector('.weather-input-lt').classList.toggle('error-container');
      document.querySelector('.main-weather-form-lt').style.animation = 'error-efect 300ms linear infinite';

      setTimeout(() => {
        document.querySelector('.message').classList.remove('error-message');
        document.querySelector('.weather-input-lt').classList.remove('error-container');
        document.querySelector('.main-weather-form-lt').style.animation = 'none';
      }, 1500);
    }
  };

  const searchHistoryEmptymessage = (message) =>
    toast.error(message, {
      position: 'top-center',
    });

  // this function is trigger by the button 'search' to control the content in the input type text is not empty and
  // if everything is ok, trigger the fetch fn() and history search fn()
  const checkingInput = () => {
    if (!valueCapture) {
      errorMessage();
      return;
    } else {
      setWeatherData(URLDinamicRequest);
      myInput.current.value = '';
    }
  };

  const showHistorySearch = () => {
    if (!historyRef.current.isEmpty) {
      setHiddenHistory();
    } else {
      languageEng
        ? searchHistoryEmptymessage('search history is empty')
        : searchHistoryEmptymessage('el historial de busqueda está vacio');
      return;
    }
  };

  // these styles are applied when the state that renders "Search History" is changed.
  const conditionalStyles = {
    scale: '1',
    position: 'absolute',
    zIndex: 60,
    transform: ' translate(-1em , 3em)',
  };

  return (
    <main className={themeDark ? 'main-weather-container-dt' : 'main-weather-container-lt'}>
      <section className={themeDark ? 'form-container-dt' : 'form-container-lt'}>
        {/* this state control show/hide search history if the localStorage is not empty*/}
        {hiddenHistory ? (
          <History
            valueCapture={valueCapture}
            ref={historyRef}
            styles={{}}
          />
        ) : (
          <History
            valueCapture={valueCapture}
            ref={historyRef}
            styles={conditionalStyles}
          />
        )}

        <div className='flex flex-col items-center'>
          <div className={themeDark ? 'main-weather-form-dt' : 'main-weather-form-lt'}>
            <input
              placeholder={languageEng ? 'enter a Location ...' : 'ingrese una ubicación ...'}
              type='text'
              name='country'
              className={themeDark ? 'weather-input-dt' : 'weather-input-lt'}
              autoFocus
              autoComplete='country-name'
              ref={myInput}
              onChange={setValueCapture}
            />
            <button
              className={themeDark ? 'weather-serchBtn-dt' : 'weather-serchBtn-lt'}
              onClick={checkingInput}
            >
              <FcSearch />
            </button>
          </div>
          <p className='message hidden'>{languageEng ? 'fiel is required' : 'campo obligatorio'}</p>
        </div>

        <button
          className='history'
          onClick={showHistorySearch}
        >
          <FaHistory className='scale-110' />
          {languageEng ? 'history' : 'historial'}
        </button>
      </section>
      {/* if 'weatherData.city' does not have data yet, the application only displays an app overview  */}
      {weatherData.city ? (
        <>
          <ForecastNextDays />
          <CardInfo />
        </>
      ) : (
        <OverViewApp />
      )}

      {/* if fetch fn response code status is equal to '404' , redirect to URL path that contains more info about this type error in fetching data */}
      {shouldRedirect ? <Redirect to='/notfound' /> : null}
    </main>
  );
}
