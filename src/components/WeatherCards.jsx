import { useStore } from '../../store';

import BrokenCloudsDay from './Weather Cards/BrokenCloudsDay.jsx';
import BrokenCloudsNight from './Weather Cards/BrokenCloudsNight.jsx';
import ClearDay from './Weather Cards/ClearDay.jsx';
import ClearNight from './Weather Cards/ClearNight.jsx';
import FewCloudsDay from './Weather Cards/FewCloudsDay.jsx';
import FewCloudsNight from './Weather Cards/FewCloudsNight.jsx';
import MistDay from './Weather Cards/MistDay.jsx';
import MistNight from './Weather Cards/MistNight.jsx';
import PouringDay from './Weather Cards/PouringDay.jsx';
import PouringNight from './Weather Cards/PouringNight.jsx';
import RainDay from './Weather Cards/RainDay.jsx';
import RainNight from './Weather Cards/RainNight.jsx';
import ScatteredCloudsDay from './Weather Cards/ScatteredCloudsDay.jsx';
import ScatteredCloudsNight from './Weather Cards/ScatteredCloudsNight.jsx';
import SnowDay from './Weather Cards/SnowDay.jsx';
import SnowNight from './Weather Cards/SnowNight.jsx';
import ThunderDay from './Weather Cards/ThunderDay.jsx';
import ThunderNight from './Weather Cards/ThunderNight.jsx';

export default function BackgroundImg() {
  const { weatherData } = useStore();

  const renderingBackGroundImage = (iconID) => {
    switch (iconID) {
      case '01d':
        return <ClearDay />;

      case '02d':
        return <FewCloudsDay />;

      case '03d':
        return <ScatteredCloudsDay />;

      case '04d':
        return <BrokenCloudsDay />;

      case '09d':
        return <PouringDay />;

      case '10d':
        return <RainDay />;

      case '11d':
        return <ThunderDay />;

      case '13d':
        return <SnowDay />;

      case '50d':
        return <MistDay />;

      case '01n':
        return <ClearNight />;

      case '02n':
        return <FewCloudsNight />;

      case '03n':
        return <ScatteredCloudsNight />;

      case '04n':
        return <BrokenCloudsNight />;

      case '09n':
        return <PouringNight />;

      case '10n':
        return <RainNight />;

      case '11n':
        return <ThunderNight />;

      case '13n':
        return <SnowNight />;

      case '50n':
        return <MistNight />;
    }
  };

  return <div>{renderingBackGroundImage(weatherData.iconID)}</div>;
}
