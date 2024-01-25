import { create } from 'zustand';

export const useStore = create((set) => ({
  //states
  themeDark: true,
  languageEng: true,
  valueCapture: '',
  shouldRedirect: false,
  hiddenHistory: true,
  weatherData: {},
  temperatureUnit: 'metric',

  //actions
  toggleTheme: () => set((state) => ({ themeDark: state.themeDark ? false : true })),

  toggleLanguage: () => set((state) => ({ languageEng: state.languageEng ? false : true })),  

  setValueCapture: (e) => set({ valueCapture: e.target.value }),

  setShouldRedirect: () => set((state) => ({ shouldRedirect: state.shouldRedirect ? false : true })),

  setHiddenHistory: () => set((state) => ({ hiddenHistory: state.hiddenHistory === true ? false : true })),

  setWeatherData: async (URLDinamicRequest) => {
    try {
      const response = await fetch(`${URLDinamicRequest}`);

      if (response.status === 404) {
        set({ shouldRedirect: true });
        throw new Error('the input value must be a valid location', response.message);
      }

      const data = await response.json();

      set({
        weatherData: {
          city: data.city.name,
          country: data.city.country,
          temperature: data.list[0].main.temp.toFixed(0),
          temp_feels_like: data.list[0].main.feels_like.toFixed(1),
          humidity: data.list[0].main.humidity,
          tempMax: data.list[0].main.temp_max.toFixed(1),
          tempMin: data.list[0].main.temp_min.toFixed(1),
          iconID: data.list[0].weather[0].icon,
          wind_speed: (data.list[0].wind.speed * 3.6).toFixed(1),
          date: data.list[0].dt_txt.slice(5, 10),
          visibility: data.list[0].visibility / 1000,

          // this data is to represent the next fordward days in the 'ForecastNextDays.jsx'
          date_first_day: data.list[6].dt_txt.slice(5, 10),
          tempMax_first_day: Math.ceil(data.list[6].main.temp_max),
          tempMin_first_day: Math.floor(data.list[6].main.temp_min),
          temperature_first_day: data.list[6].main.temp.toFixed(1),
          iconID_first_day: data.list[6].weather[0].icon,

          date_second_day: data.list[14].dt_txt.slice(5, 10),
          tempMax_second_day: Math.ceil(data.list[14].main.temp_max),
          tempMin_second_day: Math.floor(data.list[14].main.temp_min),
          temperature_second_day: data.list[14].main.temp.toFixed(1),
          iconID_second_day: data.list[14].weather[0].icon,

          date_third_day: data.list[22].dt_txt.slice(5, 10),
          tempMax_third_day: Math.ceil(data.list[22].main.temp_max),
          tempMin_third_day: Math.floor(data.list[22].main.temp_min),
          temperature_third_day: data.list[22].main.temp.toFixed(1),
          iconID_third_day: data.list[22].weather[0].icon,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },

  setTemperatureUnit: () =>
    set((state) => ({ temperatureUnit: state.temperatureUnit === 'metric' ? 'imperial' : 'metric' })),
}));
