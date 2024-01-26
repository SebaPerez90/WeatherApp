import Header from '../components/Header/Header.jsx';
import avatar from '../assets/images/avatar.png';
import { useStore } from '../../store.js';
import { useRef } from 'react';
import { Link } from 'wouter';
import { FaCopy } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { FaArrowUpLong } from 'react-icons/fa6';
import input_dt from '../assets/images/input-marked-dt.png';
import input_lt from '../assets/images/input-marked-lt.png';
import btn_dt from '../assets/images/btn-marked-dt.png';
import btn_lt from '../assets/images/btn-marked-lt.png';
import history_dt from '../assets/images/history-marked-dt.png';
import history_lt from '../assets/images/history-marked-lt.png';
import overview_app from '../assets/videos/overview-app.mp4';
import overview_weather_cards from '../assets/videos/weather-cards-presentation.mp4';
import screen_1 from '../assets/images/screenshoot-1.png';
import screen_2 from '../assets/images/screenshoot-2.png';
import screen_3 from '../assets/images/screenshoot-3.png';
import screen_4 from '../assets/images/screenshoot-4.png';
import screen_5 from '../assets/images/screenshoot-5.png';
import screen_6 from '../assets/images/screenshoot-6.png';
import screen_7 from '../assets/images/screenshoot-7.png';

const Readme = () => {
  const { themeDark, languageEng } = useStore();
  const URLresourse = useRef();
  const btnRef = useRef();

  const copySucess = (text) => toast.success(text, { position: 'top-center' });

  const handleCopyToClipboard = () => {
    btnRef.current.innerHTML = `<svg stroke="#478647" fill="#478647" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"></path></svg>`;

    setTimeout(() => {
      themeDark
        ? (btnRef.current.innerHTML = `<svg stroke="#8580b0" fill="#8580b0" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>`)
        : (btnRef.current.innerHTML = `<svg stroke="#ffb232" fill="#ffb232" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>`);
    }, 2000);

    const textToCopy = URLresourse.current.innerText;

    navigator.clipboard.writeText(textToCopy);
    languageEng ? copySucess('copied in the clipboard') : copySucess('copiado en el portapapeles');
    return;
  };

  return (
    <>
      <Header />
      <main className={themeDark ? 'readme-main-dt' : 'readme-main-lt'}>
        <div className='wraper'>
          <h1>{languageEng ? 'README SECTION' : 'README SECCIÓN'}</h1>
          <p>
            {languageEng
              ? 'In this section, we will inform you about all the important technical aspects related to the application. As well as its installation, features, and everything necessary in case you want to explore the application or contribute to the project'
              : 'En esta sección te informaremos sobre todos los aspectos técnicos importantes relacionados con la aplicacion. Como también su instalación , funcionalidades y todo lo que se necesario en caso de que quieras explorar la aplicación o constribuir al proyecto'}
          </p>
          <div className='flex flex-col'>
            <section className={themeDark ? 'index-content-container-dt' : 'index-content-container-lt'}>
              <p id='index'>{languageEng ? 'Index of content :' : 'Indice de contenido :'}</p>
              <ul>
                <li>
                  <a href={themeDark ? '#issues-container-dt' : '#issues-container-lt'}>
                    {languageEng ? 'Issues' : 'Asuntos/Pendientes'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#overview-container-dt' : '#overview-container-lt'}>
                    {languageEng ? 'Overview' : 'Descripción general'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#features-container-dt' : '#features-container-lt'}>
                    {languageEng ? 'Features' : 'Funcionalidades'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#usage-container-dt' : '#usage-container-lt'}>
                    {languageEng ? 'How to use' : 'Modo de uso'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#technologies-container-dt' : '#technologies-container-lt'}>
                    {languageEng ? 'Technologies' : 'Tecnologías'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#instalation-container-dt' : '#instalation-container-lt'}>
                    {languageEng ? 'Installation' : 'Instalación'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#design-container-dt' : '#design-container-lt'}>
                    {languageEng ? 'Design / Structure' : 'Diseño / Estructura'}
                  </a>
                </li>
                <li>
                  <a href={themeDark ? '#contact-container-dt' : '#contact-container-lt'}>
                    {languageEng ? 'Contact' : 'Contacto'}
                  </a>
                </li>
              </ul>
            </section>

            <section id={themeDark ? 'issues-container-dt' : 'issues-container-lt'}>
              <h1>{languageEng ? '⚠️Issues' : '⚠️Asuntos/Pendientes'}</h1>
              <div>
                <p>
                  {languageEng
                    ? 'During the development of this project, I faced challenges related to routing due to the lack of backend support. Developing the application entirely on the frontend made routing complicated when attempting to access different sections of the application via the URL. However, navigation within the user interface posed no issues.'
                    : 'Durante el desarrollo de este proyecto, enfrenté desafíos relacionados con el enrutamiento debido a la falta de soporte de backend. Al desarrollar la aplicación completamente en el frontend, el enrutamiento se volvió complicado al intentar acceder a diferentes secciones de la aplicación a través de la URL. Sin embargo, la navegación dentro de la interfaz de usuario no presentaba problemas.'}
                </p>
                <p>
                  {languageEng
                    ? 'In the development stage, the application worked correctly, but problems arose when deploying it to production as I had not adequately considered routing management. Although I considered that the solution could be implementing more robust routing, such as server-side routing, I opted for a quicker solution to maintain focus on the core functionality of the application.'
                    : 'En la etapa de desarrollo, la aplicación funcionaba correctamente, pero problemas surgieron al llevarla a producción ya que no había contemplado adecuadamente el manejo del enrutamiento. Aunque consideré que la solución podría ser implementar un enrutamiento más robusto, como el enrutamiento del lado del servidor, opté por una solución más rápida para mantener el enfoque en la funcionalidad principal de la aplicación.'}
                </p>
                <p>
                  {languageEng
                    ? 'I implemented the solution of using hash-based routing, which initially resolved the routing problem. However, this solution introduced new problems, especially in the README section. Here, navigation within the section became problematic as clicking on index content links caused the URL to change, making it difficult to find the new route.'
                    : 'Implementé la solución de utilizar hash-based routing, que inicialmente resolvió el problema de enrutamiento. Sin embargo, esta solución introdujo nuevos problemas, especialmente en la sección README. Aquí, la navegación dentro de la sección se volvió problemática ya que al hacer clic en los enlaces del índice de contenido, la URL cambiaba y dificultaba encontrar la nueva ruta.'}
                </p>
                <p>
                  {languageEng
                    ? 'In conclusion, although the hash-based routing solution provided a temporary fix for the initial routing problem, it highlighted the need to properly address routing in future iterations of the application. More robust and scalable routing management options will be considered in the future to ensure a seamless and hassle-free user experience.'
                    : 'En conclusión, aunque la solución de hash-based routing proporcionó una solución temporal para el problema inicial de enrutamiento, destacó la necesidad de abordar adecuadamente el enrutamiento en futuras iteraciones de la aplicación. Se considerarán opciones más robustas y escalables para el manejo del enrutamiento en el futuro, garantizando una experiencia de usuario fluida y sin problemas.'}
                </p>
              </div>
            </section>

            <section id={themeDark ? 'overview-container-dt' : 'overview-container-lt'}>
              <h2>{languageEng ? 'Overview' : 'Descripción general'}</h2>
              <div>
                <h1>{languageEng ? 'Welcome to the Weather App!' : '¡Bienvenido a la Aplicación del Clima!'}</h1>
                <p>
                  {languageEng
                    ? 'This is an interactive application developed with React that allows you to explore the current weather and future forecasts in a simple and dynamic way.'
                    : 'Esta es una aplicación interactiva desarrollada con React que te permite explorar el clima actual y pronósticos futuros de manera sencilla y dinámica.'}
                </p>
              </div>
              <div>
                <p>{languageEng ? 'Features and Characteristics:' : 'Funcionalidades y Características:'}</p>
                <ul>
                  <li>
                    {languageEng
                      ? 'Stay informed about real-time weather with accurate data'
                      : 'Estar informado del clima en tiempo real con datos precisos'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Get the most relevant data to organize your week'
                      : 'Obtener los datos más relevantes para organizar tu semana'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Dynamic animated images of the current weather for better understanding'
                      : 'Imágenes animadas del clima actual dinámicas para mayor comprensión'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Use the measurement unit according to your region (Fahrenheit or Celsius)'
                      : 'Usar la unidad de medición acorde a tu región (Fahrenheit o Celsius)'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Customize the language to your preference (English or Spanish)'
                      : 'Personalización del lenguaje a tu gusto (idioma inglés o idioma español)'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Customize the theme to your liking (light theme or dark theme)'
                      : 'Personalización del tema a tu gusto (tema claro o tema oscuro)'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Keep a record of successful searches made, i.e., a search history'
                      : 'Tener un registro de las búsquedas exitosas realizadas, es decir, un historial de búsquedas'}
                  </li>
                  <li>
                    {languageEng
                      ? 'FAQ section to clear doubts'
                      : 'Sección de preguntas frecuentes para despejar dudas'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Readme section for more technical aspects'
                      : 'Sección de README para aspectos más técnicos'}
                  </li>
                  <li>
                    <Link
                      to='/contact'
                      className='link'
                    >
                      {languageEng ? 'Contact section ' : 'Sección de contacto '}
                    </Link>
                    {languageEng ? 'to share your user experience' : 'para contarnos tu experiencia de usuario'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Contact social networks to collaborate or work together'
                      : 'Redes sociales laborales de contacto para colaborar o trabajar juntos'}
                  </li>
                  <li>
                    {languageEng
                      ? 'Intuitive messages about usage errors and information'
                      : 'Mensajes intuitivos sobre errores de uso e informativos'}
                  </li>
                  <li>
                    {languageEng
                      ? 'In case of a non-existing location or syntax error in the search, redirect to a 404 page with information about what happened'
                      : 'En caso de no existir una ubicación o tener un error de sintaxis en la búsqueda, redirección a una página 404 con información sobre qué pasó'}
                  </li>
                </ul>
              </div>

              <div>
                <p>
                  {languageEng
                    ? 'Overall presentation of some functionalities and features of the application.'
                    : 'Presentacion general de algunas funcionalidades y caracteristicas de la aplicación.'}
                </p>
                <video controls>
                  <source
                    src={overview_app}
                    type='video/mp4'
                  />
                  {languageEng
                    ? 'Your browser does not support the video element.'
                    : 'Tu navegador no soporta el elemento de video.'}
                </video>
              </div>
              <div>
                <p>
                  {languageEng
                    ? 'Here are the cards displaying potential weather conditions based on the search conducted.'
                    : 'Estas son las tarjetas de las posibles condiciones climáticas , dependiendo de la busqueda que se realize.'}
                </p>
                <video controls>
                  <source
                    src={overview_weather_cards}
                    type='video/mp4'
                  />
                  {languageEng
                    ? 'Your browser does not support the video element.'
                    : 'Tu navegador no soporta el elemento de video.'}
                </video>
              </div>
              <p>
                {languageEng
                  ? 'Explore the weather in your area or anywhere in the world intuitively with the Weather App!'
                  : '¡Explora el clima en tu zona o en cualquier lugar del mundo de manera intuitiva con la Aplicación del Clima!'}
              </p>
            </section>

            <section id={themeDark ? 'features-container-dt' : 'features-container-lt'}>
              <h2>{languageEng ? 'Features' : 'Funcionalidades'}</h2>
              <div className={themeDark ? 'container-dt' : 'container-lt'}>
                <div>
                  <h1>💡</h1>
                  <div>
                    <p>
                      {languageEng
                        ? 'You can adjust the app according to your preferences '
                        : 'Puedes ajustar la app segun tus preferencias '}
                      <strong>:</strong>
                    </p>
                    <ul>
                      <li>
                        {languageEng
                          ? 'Click on the hamburger menu at the top right.'
                          : 'Haz click en el menu de barras en la parte superior derecha'}
                      </li>
                      <li>
                        {languageEng ? 'Click on the "preferences" option' : 'Haz click en la opción "preferencias" '}
                      </li>
                      <li>
                        {languageEng
                          ? 'Set up the language, theme, and temperature unit.'
                          : 'Configura el idioma, el tema y la unidad de temperatura.'}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={themeDark ? 'second-container-dt' : 'second-container-lt'}>
                  <div>
                    <h2>{languageEng ? 'Key Features' : 'Características Principales'}</h2>
                    <ul>
                      <li>
                        <span>{languageEng ? 'Customizable Theme :' : 'Tema Personalizable :'}</span>{' '}
                        {languageEng
                          ? ' With the ability to switch between light and dark themes, we adapt the visual experience to your preference.'
                          : ' Con la capacidad de alternar entre temas claro y oscuro, adaptamos la experiencia visual a tu preferencia.'}
                      </li>
                      <li>
                        <span>{languageEng ? 'Available Languages :' : 'Idiomas Disponibles :'}</span>
                        {languageEng
                          ? ' Enjoy the application in Spanish or English. Choose your favorite language for a more comfortable and personalized experience!'
                          : ' Disfruta de la aplicación en español o inglés. ¡Elige tu idioma favorito para una experiencia más cómoda y personalizada!'}
                      </li>
                      <li>
                        <span>{languageEng ? 'Measurement Units :' : 'Unidades de Medición :'}</span>
                        {languageEng
                          ? ' You can select the temperature unit you prefer, either Fahrenheit or Celsius. We cater to your needs and preferences.'
                          : ' Puedes seleccionar la unidad de temperatura que prefieras, ya sea Fahrenheit o Celsius. Nos adaptamos a tus necesidades y preferencias.'}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2>{languageEng ? 'Highlighted Features' : 'Funcionalidades Destacadas'}</h2>
                    <ul>
                      <li>
                        <span>{languageEng ? 'Detailed Visualization : ' : 'Visualización Detallada:'}</span>
                        {languageEng
                          ? ' We present the weather for the next 3 days with detailed and easy-to-understand information.'
                          : ' Presentamos el clima de los próximos 3 días con información detallada y fácil de comprender.'}
                      </li>
                      <li>
                        <span>{languageEng ? 'Dynamic API Data :' : 'Datos Dinámicos de la API :'}</span>
                        {languageEng
                          ? ' We display precise data extracted from the API and provide corresponding images dynamically to offer an enriching experience.'
                          : ' Mostramos datos precisos extraídos de la API y proporcionamos imágenes correspondientes de forma dinámica para ofrecer una experiencia enriquecedora.'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id={themeDark ? 'usage-container-dt' : 'usage-container-lt'}>
              <h2>{languageEng ? 'How to use' : 'Modo de uso'}</h2>
              <div className={themeDark ? 'usage-dt' : 'usage-lt'}>
                <div className='wraper'>
                  <div>
                    <p>step 1</p>
                    <p>{languageEng ? 'Fill the input field' : 'Llenar el input'}</p>
                    <img
                      src={themeDark ? input_dt : input_lt}
                      alt='input-img-reference'
                    />
                  </div>
                  <p>
                    {languageEng
                      ? 'Make sure to enter the desired location correctly and semantically, as any syntax error might redirect you to the "not-found" page, indicating that the search does not exist. It is also important to avoid using accents and specify the country. Simply entering the city in the search is sufficient.'
                      : 'Asegúrate de escribir la ubicación que desees correcta semánticamente , ya que si hay algún error de sintaxis podría redireccionarte a la pagina "not-found" que significa que la busqueda no existe. También es importante omitir el uso de acentos , como también especificar país. Con solo realizar la busqueda con la ciudad es suficiente.'}
                  </p>
                </div>
                <div className='wraper'>
                  <div>
                    <p>step 2</p>
                    <p>{languageEng ? 'Click the search button.' : 'Haz click el boton de busqueda'}</p>
                    <img
                      src={themeDark ? btn_dt : btn_lt}
                      alt='button-img-reference'
                    />
                  </div>
                  <p>
                    {languageEng
                      ? 'Make sure that the text field is not empty, as otherwise you won´t be able to proceed. However, the application is intuitive and will display a message with further information. The same process must be followed after each successful search.'
                      : 'Asegurate de que el campo de texto no se encuentre vacio ya que esa manera no podrás avanzar, de todas formas la aplicación es intuitiva y se te mostrara un mensaje con mas información al respecto. El mismo proceso se debe realizar despues de cada busqueda exitosa.'}
                  </p>
                </div>
                <div className='wraper'>
                  <div>
                    <h3>step 3</h3>
                    <p>
                      {languageEng
                        ? 'After each successful search, they are saved in the search history.'
                        : 'Luego de cada busqueda exitosa , estas se guardan en el historial de busquedas.'}
                    </p>
                    <img
                      className='history-img-reference'
                      src={themeDark ? history_dt : history_lt}
                      alt='history-img-reference'
                    />
                  </div>
                  <p>
                    {languageEng
                      ? 'Before conducting a search, make sure to set up the application beforehand. To be more precise, configure the temperature measurement unit, as the stored data is saved in degrees depending on whether you prefer Fahrenheit or Celsius.'
                      : 'Antes de realizar una busqueda , asegurate de configurar previamente la aplicación. Para ser mas preciso , la unidad de medición de temperatura , ya que los datos almacenados se guardan en los grados dependiendo si usted prefiere Fahrenheit or Celsius.'}
                  </p>
                </div>
              </div>
              <div>
                <h1>{languageEng ? 'Screenshoots' : 'Capturas de Pantalla'}</h1>
                <div>
                  <img
                    src={screen_1}
                    alt='screen-shoot-feature'
                  />
                  <img
                    className='rounded-lg'
                    src={screen_2}
                    alt='screen-shoot-feature'
                  />
                  <img
                    src={screen_3}
                    alt='screen-shoot-feature'
                  />
                  <img
                    src={screen_4}
                    alt='screen-shoot-feature'
                  />
                  <img
                    src={screen_5}
                    alt='screen-shoot-feature'
                  />
                  <img
                    src={screen_6}
                    alt='screen-shoot-feature'
                  />
                  <img
                    src={screen_7}
                    alt='screen-shoot-feature'
                  />
                </div>
              </div>
            </section>

            <section id={themeDark ? 'technologies-container-dt' : 'technologies-container-lt'}>
              <div>
                <h2>{languageEng ? 'Technologies' : 'Tecnologías'}</h2>
                <p>
                  {languageEng
                    ? 'For this project, the following technologies were used:'
                    : 'Para este proyecto, se emplearon las siguientes tecnologías:'}
                </p>
              </div>
              <ul>
                <li>
                  <span>Node.js</span>
                  <p>
                    {languageEng
                      ? 'Used as the package manager for the project'
                      : 'Utilizado como gestor de paquetes del proyecto'}
                  </p>
                </li>
                <li>
                  <span>React.js</span>
                  <p>
                    {languageEng
                      ? 'Used as the foundation of the project for the user interface'
                      : 'Utilizado como base del proyecto para la interfaz de usuario'}
                  </p>
                </li>
                <li>
                  <span>React Icons</span>
                  <p>
                    {languageEng ? 'Used for icons within the project' : 'Utilizado para iconos dentro del proyecto'}
                  </p>
                </li>
                <li>
                  <span>Sass</span>
                  <p>
                    {languageEng
                      ? 'Used for styling throughout the application'
                      : 'Utilizado para estilar en general de la aplicación'}
                  </p>
                </li>
                <li>
                  <span>Tailwind</span>
                  <p>
                    {languageEng
                      ? 'Used to style most of the weather cards in ./src/components/WeatherCards for its simplicity and easy implementation'
                      : 'Utilizado para estilar en su mayor parte las cartas de climas ./src/components/WeatherCards por su simplicidad y facil implementación'}
                  </p>
                </li>
                <li>
                  <span>Zustand</span>
                  <p>{languageEng ? 'Used as global state manager' : 'Utilizado como gestor de estado global'}</p>
                </li>
                <li>
                  <span>Wouter</span>
                  <p>
                    {languageEng ? 'Used for application routing' : 'Utilizado para el enrutamiento de la aplicación'}
                  </p>
                </li>
                <li>
                  <span>Eslint / Prettier</span>
                  <p>
                    {languageEng
                      ? 'Used to maintain code consistency and apply coding styles'
                      : 'Utilizados para mantener la consistencia del código y aplicar estilos de codificación.'}
                  </p>
                </li>
                <li>
                  <span>{languageEng ? 'Resource/ API' : 'Recurso / API'}</span>
                  <p>
                    <a
                      href='https://openweathermap.org/'
                      target='blank_'
                    >
                      https://openweathermap.org/
                    </a>
                  </p>
                </li>
              </ul>
            </section>

            <section id={themeDark ? 'instalation-container-dt' : 'instalation-container-lt'}>
              <h2>{languageEng ? 'Installation' : 'Instalación'}</h2>
              <h3>
                {languageEng
                  ? 'If you want to contribute to the project, make sure to fork the repository and then follow the step-by-step instructions.'
                  : 'Si desea contribuir con el proyecto, asegúrate hacer el fork del repositorio y luego sigue el paso a paso.'}
              </h3>
              <div className={themeDark ? 'container-dt' : 'container-lt'}>
                <div>
                  <p>{languageEng ? '# Clone the repository.' : '# Clona el repositorio.'}</p>
                  <div className={themeDark ? 'git-clone-dt' : 'git-clone-lt'}>
                    <p>$ git clone</p>
                    <div className='flex gap-4'>
                      <p ref={URLresourse}>https://github.com/SebaPerez90/WeatherApp.git</p>
                      <button
                        ref={btnRef}
                        className='FaCopyIcon'
                        onClick={handleCopyToClipboard}
                      >
                        <FaCopy />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <p>{languageEng ? '# Go into repository.' : '# Ingresa al repositorio.'}</p>
                  <p>$ cd WheaterApp</p>
                </div>

                <div>
                  <p>{languageEng ? '# Install the dependencies.' : '# Instala las dependencias.'}</p>
                  <p>$ npm install</p>
                </div>

                <div>
                  <p>
                    {languageEng
                      ? '# Start a local server to preview the site.'
                      : '# Inicia un servidor local para previsualizar el sitio..'}
                  </p>
                  <p>$ npm run dev</p>
                </div>
              </div>
              <div>
                <p>
                  {languageEng
                    ? '# Adjust the linter and formatter according to your development preferences '
                    : '# Ajusta el linter y el formateador según tus preferencias de desarrollo '}
                </p>
                <div>
                  <p>
                    <strong>ESLint</strong> - <span>./eslintrc.cjs</span>
                    <br></br>
                    {languageEng
                      ? ' uses as a linter to maintain consistency in the code.'
                      : '  utiliza como linter para mantener consistencia en el código.'}
                  </p>
                  <p>
                    <strong>Prettier</strong> - <span>./prettierrc</span>
                    <br></br>
                    {languageEng
                      ? ' used as a formatter to ensure a consistent style in the source code.'
                      : ' utilizado como formateador para asegurar un estilo uniforme en el código fuente. '}
                  </p>
                </div>
              </div>
            </section>

            <section id={themeDark ? 'design-container-dt' : 'design-container-lt'}>
              <h2>{languageEng ? 'Design / Structure' : 'Diseño / Estructura'}</h2>
              {/* prettier-ignore */}
              <ul className={themeDark ? 'structure-container-dt' : 'structure-container-lt'}>
                <li>./src</li>
                <li className='ml-4'>/assets</li>
                <li className='ml-8'>/images <span>{languageEng ? '//contiene todas las imagenes':'//contains all images'}</span></li>
                <li className='ml-8'>/svg <span>{languageEng ? '//contains the SVG used frecuently':'//contiene los SVG que se utilizan con frecuencia.'}</span></li>
                <br></br>
                <li className='ml-4'>/components</li>
                <li className='ml-8'>/Footer <span>{languageEng ? '//contains all the components of the footer':'//contiene todos los componentes del footer.'}</span></li>
                <li className='ml-8'>/Header <span>{languageEng ? '//contains all the components of the header':'//contiene todos los componentes del header.'}</span></li>
                <li className='ml-8'>/Weather Cards <span>{languageEng ? '//contains all the weather condition cards.':'//contiene todas las cards de las condiciones climaticas'}</span></li>
                <br></br>
                <li className='ml-8'>CardInfo.jsx <span>{languageEng ? '//it renders the data fetched from the API and its corresponding image dynamically.':'//renderiza los datos extraidos de la api y su respectiva imagen dinamicamente'}</span></li>
                <li className='ml-8'>ForecastNextDays.jsx <span>{languageEng ? '//it renders the weather for the next 3 days.':'//renderiza el clima de los siguientes 3 días'}</span></li>
                <li className='ml-8'>History.jsx <span>{languageEng ? '//search history component':'//componente de historial de busquedas realizadas'}</span></li>
                <li className='ml-8'>Main.jsc <span>{languageEng ? '//main card of the project':'//carta principal del proyecto'}</span></li>
                <li className='ml-8'>OverviewApp.jsx <span>{languageEng ? '//overview component':'//componente de descripción general'}</span></li>
                <li className='ml-8'>WeatherCards.jsx <span>{languageEng ? '//renders the weather dynamically according to the search performed':'//renderiza el clima dinamicamente acorde a la busqueda realizada'}</span></li>
                <br></br>
                <li className='ml-4'>/routes</li>
                <li className='ml-8'>Contact.jsx <span>{languageEng ? '//contact component to provide feedback about the application':'//componente de contacto para dejar feedback sobre la aplicacoón'}</span></li>
                <li className='ml-8'>NotFound.jsx <span>{languageEng ? '//renders when the query response is 404.':'//se renderiza cuando la respuesta de la consulta sea 404.'}</span></li>
                <li className='ml-8'>Readme.jsx <span>{languageEng ? '//contains all documentation about how the app works.':'//contiene toda la documentación sobre cómo funciona la aplicación.'}</span></li>
                <br></br>
                <li className='ml-4'>/styles</li>
                <li className='ml-8'>animations.scss <span>{languageEng ? '//contains frequently used animations.':'//contiene las animaciones utilizadas con frecuencia'}</span></li>
                <li className='ml-8'>dark-theme.scss <span>{languageEng ? '//contains all the properties when the "dark theme" is active.':'//contiene todas las propiedad cuando el "tema oscuro" esta activo.'}</span></li>
                <li className='ml-8'>light-theme.scss <span>{languageEng ? '//contains all the properties when the "light theme" is active.':'//contiene todas las propiedad cuando el "tema claro" esta activo.'}</span></li>
                <li className='ml-8'>weather-cards.scss <span>{languageEng ? '//contains specific styles for the "Weather Cards" components.':'//contiene estilos específicos de los componentes de "Weather Cards"'}</span></li>
                <br></br>
                <li>App.jsx</li>
                <li>Main.jsx</li>
              </ul>
            </section>

            <section id={themeDark ? 'contact-container-dt' : 'contact-container-lt'}>
              <h2>{languageEng ? 'Contact' : 'Contacto'}</h2>
              <div>
                <div>
                  <img
                    src={avatar}
                    alt='avatar-img'
                  />
                  <p>
                    {languageEng ? '- This proyect was developed by ' : '- Este proyecto fue realizado por '}
                    <br></br>
                    <strong>Sebastian Perez</strong>
                  </p>
                </div>
                <div className={themeDark ? 'second-container-dt' : 'second-container-lt'}>
                  <p>
                    {languageEng
                      ? 'If you are interested in collaborating or working together, I invite you to get in touch with me.'
                      : 'Si estas interesado en colaborar o trabajar juntos , te invito a que te pongas en contacto conmigo.'}
                  </p>
                  <ul>
                    <li>
                      Linkedin:{' '}
                      <a
                        href='https://www.linkedin.com/in/sebaperez90/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        https://www.linkedin.com/in/sebaperez90/
                      </a>
                    </li>
                    <li>
                      Github:{' '}
                      <a
                        href='https://github.com/SebaPerez90'
                        target='_blank'
                        rel='noreferrer'
                      >
                        https://github.com/SebaPerez90
                      </a>
                    </li>
                    <li>
                      Email: <Link to='/contact'>sebastian.perez.jobs@gmail.com </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <a href='#index'>
            <FaArrowUpLong className={themeDark ? 'up-arrow-dt' : 'up-arrow-lt'} />
          </a>
        </div>
      </main>
    </>
  );
};

export default Readme;
