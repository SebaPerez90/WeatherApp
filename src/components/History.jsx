import { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../store';
import { MdDelete } from 'react-icons/md';

const SearchHistory = forwardRef(({ valueCapture, styles }, ref) => {
  const { weatherData, themeDark, temperatureUnit, languageEng } = useStore();

  // history state
  const [searchHistory, setSearchHistory] = useState(
    localStorage.getItem('searchHistory') ? JSON.parse(localStorage.getItem('searchHistory')) : [],
  );

  // icon state
  const [iconSearchHistory, setIconSearchHistory] = useState(
    localStorage.getItem('iconSearchHistory') ? JSON.parse(localStorage.getItem('iconSearchHistory')) : [],
  );

  // temperature state
  const [tempSearchHistory, setTempSearchHistory] = useState(
    localStorage.getItem('tempSearchHistory') ? JSON.parse(localStorage.getItem('tempSearchHistory')) : [],
  );

  // error handling "state" if search history is empty
  const [isEmpty, setIsEmpty] = useState(
    localStorage.getItem('historyFlag') ? JSON.parse(localStorage.getItem('historyFlag')) : true,
  );

  useEffect(() => {
    if (!weatherData.city) return;

    localStorage.setItem('historyFlag', JSON.stringify(isEmpty));
    setIsEmpty(false);
  }, [weatherData]);

  // this efect preserve the current search history location before the page refresh
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));
    localStorage.setItem('tempSearchHistory', JSON.stringify(tempSearchHistory));
    localStorage.setItem('historyFlag', JSON.stringify(isEmpty));
  }, [searchHistory, iconSearchHistory, tempSearchHistory, isEmpty]);

  // temperature set storage fn
  const handleSetIcon = () => {
    localStorage.setItem('iconSearchHistory', JSON.stringify(iconSearchHistory));

    setIconSearchHistory([...iconSearchHistory, weatherData.iconID]);
  };

  // history set storage fn
  const handleSetHistory = () => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    setSearchHistory([...searchHistory, valueCapture]);
  };

  // temperature set storage fn
  const handleSetTemp = () => {
    localStorage.setItem('tempSearchHistory', JSON.stringify(tempSearchHistory));

    setTempSearchHistory([...tempSearchHistory, weatherData.temperature]);
  };

  // clean all search history and localStorage
  const cleanUpHistory = () => {
    localStorage.clear();
    location.reload();
  };

  useImperativeHandle(ref, () => ({
    handleSetHistory,
    handleSetIcon,
    handleSetTemp,
    isEmpty,
  }));

  return (
    <div>
      {isEmpty ? null : (
        <div
          className={themeDark ? 'search-history-dt' : 'search-history-lt'}
          style={styles}
        >
          <div>
            {searchHistory.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            {iconSearchHistory.map((item, index) => (
              <img
                key={index}
                src={`https://openweathermap.org/img/wn/${item}.png`}
                alt='reference icon location'
              />
            ))}
          </div>
          <div>
            {tempSearchHistory.map((item, index) => (
              <span key={index}>
                {item}
                {temperatureUnit === 'metric' ? '°C' : '°F'}
              </span>
            ))}
          </div>
          <button onClick={cleanUpHistory}>
            <MdDelete className='scale-125' />
            {languageEng ? 'clear' : 'limpiar'}
          </button>
        </div>
      )}
    </div>
  );
});

SearchHistory.propTypes = {
  valueCapture: PropTypes.any,
  styles: PropTypes.any,
};

SearchHistory.displayName = 'SearchHistory';

export default SearchHistory;
