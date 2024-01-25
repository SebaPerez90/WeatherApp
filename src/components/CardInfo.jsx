import { FaLocationDot } from 'react-icons/fa6';
import { useStore } from '../../store.js';
import WeatherCards from './WeatherCards.jsx';

export default function EnglishCardInfo() {
  const { weatherData, languageEng, themeDark, temperatureUnit } = useStore();

  if (!weatherData.city) return;

  return (
    <section className={themeDark ? 'weather-container-dt' : 'weather-container-lt'}>
      <WeatherCards />

      <section className={themeDark ? 'weather-info-section-dt' : 'weather-info-section-lt'}>
        <div className={themeDark ? 'item-1-dt' : 'item-1-lt'}>
          <FaLocationDot className='text-rose-600' />
          {weatherData.city},{weatherData.country}
        </div>
        <time>
          {languageEng ? 'Date: ' : 'Fecha: '}
          {weatherData.date}
        </time>
        <span>
          {weatherData.temperature}
          {temperatureUnit === 'metric' ? '°C' : '°F'}
        </span>

        <div className={themeDark ? 'item-4-dt' : 'item-4-lt'}>
          <div>
            <p>
              {languageEng ? 'Feels :' : 'Sensación :'}
              <span className='ml-2'>{weatherData.temp_feels_like}</span>
            </p>
          </div>
          <p>
            {weatherData.tempMin}° / {weatherData.tempMax}°
          </p>
        </div>

        <div className={themeDark ? 'item-5-dt' : 'item-5-lt'}>
          <div>
            <p>
              {languageEng ? 'Humidity :' : 'Humedad :'}
              <span className='ml-2'>{weatherData.humidity} %</span>
            </p>
          </div>

          <div>
            <p>
              {languageEng ? 'Wind :' : 'Viento :'}
              <span className='ml-2'>{weatherData.wind_speed} km/h</span>
            </p>
          </div>
          <div>
            <p>
              {languageEng ? 'Visibility :' : 'Visibilidad :'}
              <span className='ml-2'>{weatherData.visibility}km</span>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
