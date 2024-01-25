import { PiGithubLogoFill } from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';
import { FaArrowUpLong } from 'react-icons/fa6';
import { useStore } from '../../../store';
import moonIcon from '../../assets/svg/moonIcon.svg';
import sunIcon from '../../assets/svg/sunIcon.svg';
import FAQ from './FAQ';
import { Link } from 'wouter';
import { HiExternalLink } from 'react-icons/hi';
import { register } from 'swiper/element/bundle';
register();

export default function Footer() {
  const { languageEng, themeDark } = useStore();

  return (
    <footer
      style={{ color: 'white' }}
      className={themeDark ? 'footer-container-dt' : 'footer-container-lt'}
    >
      <FAQ />
      <section className={themeDark ? 'readme-section-container-dt' : 'readme-section-container-lt'}>
        <h1>README</h1>
        <swiper-container
          pagination='true'
          class='swiper-pagination'
        >
          <swiper-slide>
            <p>{languageEng ? 'Do you want collaborate on this project ?' : '¿Quieres colaborar en este proyecto?'}</p>
          </swiper-slide>
          <swiper-slide>
            <p>
              {languageEng ? 'Do you want clone it to your local machine ?' : '¿Quieres clonarlo en tu máquina local?'}
            </p>
          </swiper-slide>
          <swiper-slide>
            <p>{languageEng ? 'Do you want explore further alternatives ?' : '¿Quieres explorar más alternativas?'}</p>
          </swiper-slide>
          <swiper-slide>
            <div>
              <p className='mx-8'>
                {languageEng
                  ? 'Click on button for more explanations on how to do this.'
                  : 'Haga clic en el botón para obtener más explicaciones sobre cómo hacer esto.'}
              </p>
              <Link
                className='readme-btn'
                to='/readme'
              >
                README <HiExternalLink className='scale-125' />
              </Link>
            </div>
          </swiper-slide>
        </swiper-container>
      </section>

      <aside className={themeDark ? 'footer-aside-container-dt' : 'footer-aside-container-lt'}>
        <div className={themeDark ? 'title-aside-dt' : 'title-aside-lt'}>
          <h1>{languageEng ? 'Weather App' : 'App del Clima'}</h1>
          {themeDark ? (
            <img
              src={moonIcon}
              alt='moon-icon-reference'
            />
          ) : (
            <img
              src={sunIcon}
              alt='sun-icon-reference'
            />
          )}
        </div>
        <ul className={themeDark ? 'footer-list-dt' : 'footer-list-lt'}>
          <li>
            <a
              className={themeDark ? 'list-item-dt linkedin' : 'list-item-lt linkedin'}
              href='https://www.linkedin.com/in/sebaperez90/'
              rel='noreferrer'
              target='_blank'
            >
              <RiLinkedinFill />
            </a>
          </li>
          <li>
            <a
              className={themeDark ? 'list-item-dt github' : 'list-item-lt github'}
              href='https://github.com/SebaPerez90'
              rel='noreferrer'
              target='_blank'
            >
              <PiGithubLogoFill />
            </a>
          </li>
          <li>
            <a
              className={themeDark ? 'list-item-dt email' : 'list-item-lt email'}
              href='/contact'
              rel='noreferrer'
            >
              <SiMinutemailer />
            </a>
          </li>
        </ul>
        <div className={themeDark ? 'developed-dt' : 'developed-lt'}>
          <p>{languageEng ? 'Sebastian Perez © 2023 | made with ❤️' : 'Sebastian Perez © 2023 | Echo con ❤️'}</p>
        </div>
      </aside>
      <a href='#resourse'>
        <FaArrowUpLong className={themeDark ? 'up-arrow-dt' : 'up-arrow-lt'} />
      </a>
    </footer>
  );
}
