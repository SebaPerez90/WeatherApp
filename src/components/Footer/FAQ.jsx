import { useRef } from 'react';
import { useStore } from '../../../store';
import { MdExpandMore } from 'react-icons/md';
import inputImgDT from '../../assets/images/input-img-dt.png';
import inputImgLT from '../../assets/images/input-img-lt.png';

const FAQ = () => {
  const { languageEng, themeDark } = useStore();
  const refIcon1 = useRef();
  const refIcon2 = useRef();
  const refIcon3 = useRef();
  const refIcon4 = useRef();
  const refIcon5 = useRef();

  const firstQuestion = useRef();
  const secondQuestion = useRef();
  const fourthQuestion = useRef();
  const fifthQuestion = useRef();
  const sixthQuestion = useRef();

  const expandCollapseContent = (refQuestion, refIcon) => {
    refQuestion.current.classList.toggle('expand-content');

    switch (themeDark) {
      case true:
        if (refQuestion.current.classList[1] === undefined) {
          refQuestion.current.className = 'faq-answer-dt';
          refIcon.current.style.animation = 'toggleCollapse 600ms forwards';
        } else {
          refQuestion.current.className = refQuestion.current.classList[1];
          refIcon.current.style.animation = 'toggleExpand 600ms forwards';
        }

        break;
      case false:
        if (refQuestion.current.classList[1] === undefined) {
          refQuestion.current.className = 'faq-answer-lt';
          refIcon.current.style.animation = 'toggleCollapse 600ms forwards';
        } else {
          refQuestion.current.className = refQuestion.current.classList[1];
          refIcon.current.style.animation = 'toggleExpand 600ms forwards';
        }

        break;
    }
  };

  return (
    <section className={themeDark ? 'faq-section-container-dt' : 'faq-section-container-lt'}>
      <h1>{languageEng ? 'F A Q' : 'Preguntas Comunes'}</h1>
      {/* prettier-ignore */}
      <div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(firstQuestion, refIcon1)}>
              {languageEng ?
              'How can I a request in the app?'
              :
              '¿Cómo puedo realizar una solicitud en la aplicación?'
              }
            </p>
            <span ref={refIcon1}><MdExpandMore className='scale-150' /></span>
          </div>
          <div
            ref={firstQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <div>
                <p>
                  {languageEng ?
                  'Fill in the text input and click on the search button with the magnifying glass icon to its right.'
                  :
                  'Complete la entrada de texto y haga clic en el botón con el icono de búsqueda , a su derecha.'
                  }
                </p>
                {themeDark ? 
                  <img src={inputImgDT} alt='input-text-img' /> 
                  :
                  <img src={inputImgLT} alt='input-text-img' /> 
                  }
                <p>
                  {languageEng ?
                  'You only need to enter the city name without the country name'
                  :
                  'Solo necesitas poner el nombre de la ciudad sin el nombre del país'
                  }
                </p>
              </div>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(secondQuestion, refIcon2)}>
              {languageEng ? 
              'How works the searchs history?'
              :
              '¿Cómo funciona el historial de búsquedas?'
              }
            </p>
            <span ref={refIcon2}><MdExpandMore className='scale-150' /></span>
          </div>
          <div
            ref={secondQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
               <div>
                 <p>
                  {languageEng ?
                  `When you make a successful request, the data from this search (temperature, city name, and main weather condition) is saved in memory.`
                  :
                  'Cuando realiza una solicitud exitosa, los datos de esta búsqueda (temperatura, nombre de la ciudad y clima principal) se guardan en la memoria.'
                  }
                </p><br></br>
                 <p>
                  {languageEng ?
                  `You can view the search history by clicking on the icon that refers to the search history.`
                  :
                  'Puede ver el historial de búsqueda haciendo clic en el icono que referencia al  historial de búsqueda.'
                  }
                </p><br></br>
                 <p>
                  {languageEng ?
                  ` If you want to clear the search history, you can click on the icon that refers to delete within the search history.`
                  :
                  'Si desea limpiar el historial de búsqueda, puede hacer clic que referencia a eliminar dentro de historial de busqueda'
                  }
                </p>
               </div>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(fourthQuestion, refIcon3)}>
              {languageEng ?
              'API calls return an error 404?'
              :
              '¿Las llamadas API devuelven un error 404?'
              }  
            </p>
            <span ref={refIcon3}><MdExpandMore className='scale-150' /></span>
          </div>
          <div
            ref={fourthQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>
                {languageEng ?
                `If you enter an invalid location name or if it's not grammatically correct, the request may not yield results. Instead, you will be redirected to another page with more information about what happened with your request`
                :
                'Si ingresas un nombre de ubicación inválido o si no es gramaticalmente correcto, es posible que la solicitud no arroje resultados. En su lugar, serás redirigido a otra página con más información sobre lo que sucedió con tu solicitud.'
                }
              </p>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(fifthQuestion, refIcon4)}>
              {languageEng ?
              'Can I choose the unit of temperature measurement in celcius or fahrenheit?'
              :
              '¿Puedo elegir la unidad de medida de la temperatura en celcius o fahrenheit?'
              }
            </p>
            <span ref={refIcon4}><MdExpandMore className='scale-150'/></span>
          </div>
          <div
            ref={fifthQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
             <div className='answer-4'>
                <p>{languageEng ? 'You need follow the nexts steps :' : 'Necesitas seguir los siguientes pasos :'}</p>

                <ul>
                  <li>{languageEng ? 'go to the right on top and click on the hamburguer menu icon.' : 've a la derecha en la parte superior y haz clic en el ícono del menú de hamburguesa.'}</li>
                  <li>{languageEng ? 'go to preferences settings and click on them.' : 'vaya a la configuración de preferencias y haga clic en ellas.'}</li>
                  <li>{languageEng ? 'click on your preference unit temperature icon ( °C or °F ).' : 'haga clic en el icono de temperatura de la unidad de preferencia (°C o °F).'}</li>
                  <li>{languageEng ? 'if you already make a success request, you must refresh the app.' : 'si ya realizó una solicitud exitosa, debe actualizar la aplicación.'}</li>
                </ul>

             </div>
          </div>
        </div>

        <div className={themeDark ? 'faq-question-dt' : 'faq-question-lt'}>
          <div className='first-container'>
            <p onClick={()=>expandCollapseContent(sixthQuestion, refIcon5)}>
              {languageEng ?
              'Where can I get more information to explore with the API?'
              :
              '¿Donde puedo obtener mas informacion para explorar con la API?'
              }
              </p>
              <span ref={refIcon5}><MdExpandMore className='scale-150' /></span>
          </div>
          <div
            ref={sixthQuestion}
            className={ themeDark ? 'faq-answer-dt' : 'faq-answer-lt'}>
              <p>
                {languageEng ? 
                'if you want more information to explore more alternatives and work with this API, check this ' 
                : 
                'Si desea obtener más información para explorar más alternativas y trabajar con esta API, consulte esta '}
                <a 
                  className='source-link' 
                  href='#resourse'
                  >
                    {languageEng ? 'source.' : 'fuente.'}
                </a>
              </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
