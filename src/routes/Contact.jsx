import Header from '../components/Header/Header';
import { PiGithubLogoFill } from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
import { useStore } from '../../store.js';
import avatar from '../assets/images/avatar.png';
import sun from '../assets/svg/sunIcon.svg';
import cloud from '../assets/svg/cloud.svg';
import { toast } from 'react-hot-toast';
import { useRef, useEffect, useState } from 'react';

const Contact = () => {
  const { themeDark, languageEng } = useStore();

  const [formData, setFormData] = useState({ name: '', email: '', coment: '' });

  const [formSendSuccessfully, setFormSendSuccessfully] = useState(false);

  const btn_ref = useRef();

  const input_email_ref = useRef();

  // If the input fields and text area are empty, the send button won't work.
  const inactiveButton = () => {
    if (formData.name && formData.email && formData.coment) {
      themeDark ? (btn_ref.current.className = 'send-btn-dt') : (btn_ref.current.className = 'send-btn-lt');
    } else {
      themeDark ? (btn_ref.current.className = 'inactive-btn-dt') : (btn_ref.current.className = 'inactive-btn-lt');
    }
  };

  useEffect(() => {
    formSendSuccessfully ? null : inactiveButton();
  }, [formData.coment, themeDark]);

  // update form content state
  const captureInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // check that the email address is a valid address.
    if (e.target.name === 'email') {
      const email = e.target.value;
      const regExp =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      const verificar = regExp.test(email);

      if (verificar) {
        {
          themeDark
            ? (input_email_ref.current.className = 'input-email-dt')
            : (input_email_ref.current.className = 'input-email-lt');

          themeDark
            ? (input_email_ref.current.style.animation = 'checkEmail-dt 2s ease-out')
            : (input_email_ref.current.style.animation = 'checkEmail-lt 2s linear');

          document.querySelector('.msj-info').remove();
        }
      } else {
        {
          themeDark
            ? (input_email_ref.current.className = 'wrong-email-dt')
            : (input_email_ref.current.className = 'wrong-email-lt');
        }

        languageEng
          ? input_email_ref.current.insertAdjacentHTML(
              'afterend',
              `<div class="msj-info">must be a valid adrdress</div>`,
            )
          : input_email_ref.current.insertAdjacentHTML(
              'afterend',
              `<div class="msj-info">debe ser una dirección válida</div>`,
            );
      }

      setTimeout(() => {
        document.querySelector('.msj-info').remove();
      }, 1500);
    }
  };

  // form handle submit function
  const sendComent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mbjnlnlq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        languageEng ? toast.success('Form submitted successfully!') : toast.success('Formulario enviado exitosamente!');

        setTimeout(() => {
          setFormSendSuccessfully(true);
        }, 2000);
      } else {
        languageEng ? toast.error('Something goes wrong!') : toast.error('Algo salió mal!');
      }
    } catch (error) {
      console.error('Request Error:', error);
    }
  };

  return (
    <>
      <Header />
      <main className={themeDark ? 'main-container-dt' : 'main-container-lt'}>
        {formSendSuccessfully ? (
          <section className='gratitude'>
            <div>
              <p>
                {languageEng ? 'Thank you' : 'Gracias'} <strong>{formData.name}</strong>{' '}
                {languageEng ? 'for sending us your feedback!' : 'por enviarnos tu feedback!'} 😄
              </p>
              <br></br>
              <p>
                {languageEng
                  ? 'All comments help us to keep growing and improving.'
                  : 'Todos los comentarios sirven para poder seguir creciendo y mejorando.'}
              </p>
              <p>
                {languageEng
                  ? 'You can visit our social media to stay informed about future projects.'
                  : 'Puedes visitar las redes para estar al pendiente de futuros proyectos.'}
              </p>
            </div>
            <ul>
              <li>
                <p>Github :</p>
                <a
                  href='https://github.com/SebaPerez90'
                  rel='noreferrer'
                  target='_blank'
                  className='github'
                >
                  <PiGithubLogoFill />
                </a>
              </li>
              <li>
                <p>Linkedin :</p>
                <a
                  href='https://www.linkedin.com/in/sebaperez90/'
                  rel='noreferrer'
                  target='_blank'
                  className='linkedin'
                >
                  <RiLinkedinFill />
                </a>
              </li>
            </ul>
            <div>
              <p>{languageEng ? 'Sebastian Perez © 2023 | made with ❤️' : 'Sebastian Perez © 2023 | Echo con ❤️'}</p>
            </div>
          </section>
        ) : (
          <>
            <section className={themeDark ? 'subtitle-container-dt' : 'subtitle-container-lt'}>
              <h1>
                {languageEng
                  ? 'Hello! If you got here. You are forced to leave your feedback😉'
                  : 'Hola! si llegaste hasta aca. Estas obligado a dejar tu feedback😉'}
              </h1>
              <div>
                <p>
                  {languageEng
                    ? 'In this section, I invite you to tell us more in detail about your experience using the application: functionalities, design, response times, structure, and for example, whether you found it intuitive and user-friendly.'
                    : 'En esta sección te invito a que nos cuentes mas a detalle sobre tu experiencia con el uso de la aplicación. Funcionalidades , diseño , tiempos de respuesta, estructuración y por ejemplo si te resulto intuitiva y amigable.'}
                </p>
                <p>
                  {languageEng
                    ? 'Any kind of feedback is constructive and very important, as it will be taken into consideration.'
                    : 'Cualquier tipo de comentario es constructivo y es muy importante ya que van a ser tenidos en cuenta.'}
                </p>
              </div>
            </section>
            <section className={themeDark ? 'contact-section-dt' : 'contact-section-lt'}>
              <form
                onSubmit={sendComent}
                action='POST'
                className={themeDark ? 'form-container-dt' : 'form-container-lt'}
              >
                <input
                  placeholder={languageEng ? 'name' : 'nombre'}
                  name='name'
                  type='text'
                  autoComplete='name'   
                  onChange={captureInput}
                  className={themeDark ? 'input-name-dt' : 'input-name-lt'}
                />

                <input
                  placeholder={languageEng ? 'email' : 'correo'}
                  ref={input_email_ref}
                  name='email'
                  type='text'
                  autoComplete='user-email'
                  onChange={captureInput}
                  className={themeDark ? 'input-email-dt' : 'input-email-lt'}
                />
                <textarea
                  placeholder={languageEng ? 'message' : 'mensaje'}
                  name='coment'
                  onChange={captureInput}
                  className={themeDark ? 'text-area-dt' : 'text-area-lt'}
                ></textarea>
                <button
                  ref={btn_ref}
                  type='submit'
                  className={themeDark ? 'send-btn-dt' : 'send-btn-lt'}
                >
                  {languageEng ? 'send coment' : 'enviar comentario'}
                </button>
              </form>
              <div className={themeDark ? 'aside-form-dt' : 'aside-form-lt'}>
                {themeDark ? (
                  <div className='bg-form-dt'>
                    <div className='moon-svg bg-yellow-100 overflow-hidden w-24 h-24 rounded-full shadow-[0_0_25px_#fff200] relative animate-[MoonRise_600ms_linear_forwards] z-10 right-[1em] top-[-9em]'>
                      <div className='crater-1 bg-[#9a998445] translate-x-[1.2em] translate-y-[0.2em]  h-4 w-4 rounded-full'></div>
                      <div className='crater-2 bg-[#9a998445] translate-x-[3em] translate-y-[1em] h-8 w-8 rounded-full'></div>
                      <div className='crater-3 bg-[#9a998445] translate-x-[3em] translate-y-[1.7em] h-2 w-2 rounded-full'></div>
                      <div className='crater-4 bg-[#9a998445] translate-x-[.2em] translate-y-[1em] h-4 w-4 rounded-full'></div>
                      <div className='crater-5 bg-[#9a998445] translate-x-[2em] translate-y-[-1.2em] h-4 w-4 rounded-full'></div>
                      <div className='crater-6 bg-[#9a998445] translate-x-[3.2em] translate-y-[-5.8em] h-4 w-4 rounded-full'></div>
                      <div className='crater-7 bg-[#9a998445] translate-x-[.5em] translate-y-[-4.9em] h-4 w-4 rounded-full'></div>
                      <div className='crater-8 bg-[#9a998445] translate-x-[4em] translate-y-[-3em] h-4 w-4 rounded-full'></div>
                      <div className='crater-9 bg-[#9a998445] translate-x-[1.2em] translate-y-[-3.6em] h-7 w-7 rounded-full'></div>
                      <div className='crater-10 bg-[#9a998445] translate-x-[4.7em] translate-y-[-9em] h-4 w-4 rounded-full'></div>
                    </div>
                    <div className='stars-container'>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-9 bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_900ms_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[22em] bottom-[2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[12em] bottom-[4.7em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[14.5em] bottom-[7em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-6em] bottom-[11em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[9.2em] bottom-[9em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.5s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-4.2em] bottom-[5em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.9s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[16.9em] bottom-[10em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.2s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-9em] bottom-[8.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-1em] bottom-[7.6em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[7em] bottom-[1.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[14.4em] bottom-[1.5em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-7em] bottom-[1.8em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-1.2em] bottom-[3em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.8s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[1em] bottom-[11em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.3s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[18.3em] bottom-[5.4em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.66s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[13em] bottom-[10.3em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-5.7em] bottom-[8.2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.1s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-8em] bottom-[6em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_1.7s_linear_alternate-reverse_infinite]'></div>
                      <div className='stars w-[7px] scale-125 h-[.5px] block relative right-[-9.6em] bottom-[4.2em] bg-yellow-100 blur-[.7px] opacity-40 animate-[stars_2s_linear_alternate-reverse_infinite]'></div>
                    </div>
                  </div>
                ) : (
                  <div className='bg-form-lt'>
                    <div>
                      <img
                        src={sun}
                        alt='sun-svg'
                      />
                      <div className='flex flex-col animate-[rayShining_5s_linear_alternate-reverse_infinite] transition-all'>
                        <div className='translate-y-6 translate-x-6'>
                          <div
                            className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative right-12 bottom-10 scale-[2] opacity-20'
                            style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                          ></div>
                          <div
                            className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-16 opacity-70'
                            style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                          ></div>
                          <div
                            className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-20 scale-50'
                            style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                          ></div>
                        </div>
                        <div className='translate-y-[3em] scale-[1.7] translate-x-[1em]'>
                          <div
                            className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative right-12 bottom-10 scale-[2] opacity-20'
                            style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                          ></div>
                          <div
                            className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-16 opacity-70'
                            style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                          ></div>
                          <div
                            className='border-2 border-[#fcff3300] h-5 w-5 bg-[#fcff333b] relative bottom-10 right-20 scale-50'
                            style={{ clipPath: 'polygon(64% 3%, 100% 43%, 86% 100%, 0 100%, 0 26%)' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src={cloud}
                        alt='cloud-svg'
                      />
                      <img
                        src={cloud}
                        alt='cloud-svg'
                      />
                    </div>
                  </div>
                )}
                <div>
                  <h1>{languageEng ? 'Contact Section' : 'Sección de Contacto'}</h1>
                  <img
                    src={avatar}
                    alt='avatar-imagge'
                    className={themeDark ? 'avatar-image-dt' : 'avatar-image-lt'}
                  />
                </div>
                <p>
                  {languageEng
                    ? 'Feel free to share your user experience'
                    : 'Siéntete libre de compartir tu experiencia'}
                  <br></br>
                  {languageEng ? 'Leave your coment.' : 'Deja tu comentario.'}
                </p>
              </div>
            </section>
            <div className={themeDark ? 'developed-dt' : 'developed-lt'}>
              <p>{languageEng ? 'Sebastian Perez © 2023 | made with ❤️' : 'Sebastian Perez © 2023 | Echo con ❤️'}</p>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Contact;
