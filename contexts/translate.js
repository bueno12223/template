import React, { createContext, useState } from 'react';
import Testimonials from '../components/testimonials';

const translations = {
  es: {
    navbar: {
        navigation: [
            "Servicios",
            "Nosotros",
            "Testimonios",
        ],
        button: "Contactar"
    },
    legal : ["Términos", "Privacidad", "Legal"],
    hero: {
        title: 'Eficiencia y rentabilidad para tu empresa con',
        text: 'Desarrollamos soluciones de software a la medida, entendemos mejoramos y automatizamos tus procesos operativos.',
        button: 'Agenda una llamada'
    },
    services: {
        pretitle: 'Servicios',
        title: 'Lo que hacemos',
        bullets: [
            {
                title: 'Desarrollo de software a la medida',
                desc: 'Desarrollamos soluciones a la medida de tus necesidades, utilizando tecnologías de vanguardia y las mejores prácticas de desarrollo.',
            },
            {
                title: 'Consultoría en tecnología',
                desc: 'Te apoyamos en la implementación de la solución, te capacitamos y te acompañamos en el proceso de adopción.',
            },
            {
                title: 'Optimización de procesos',
                desc: 'Estudiaremos tus procesos operativos para identificar oportunidades, haremos comparativas con casos de éxito y te presentaremos un plan de acción.',
            }
        ]
    },
    video: 'https://www.youtube-nocookie.com/embed/-kX8KW3i5Rc',
    us: {
        pretitle: 'Nosotros',
        title: 'Mira cómo funciona'
    },
    testimonials: {
        pretitle: 'Testimonios',
        title: 'Lo que dicen nuestros clientes',
        testimonials: [
          {
              text: "En LiviinX, nuestra nueva plataforma personalizada ha transformado la experiencia de vida. Desde la gestión de reservas hasta la comunicación interna, hemos creado una comunidad más unida y acogedora. <p>La satisfacción de los residentes se ha incrementado en un 3X</p>, ofreciendo un ambiente universitario excepcional.",
              name: "Pablo T., Directora de Residencia",
              title: "Equipo de Desarrollo LiviinX",
          },
          {
              name: "Alejandro G., Director de Tecnología",
              title: "Equipo del Stereo Picnic",
              text: "El Stereo Picnic ha sido revolucionado con nuestra aplicación personalizada. Desde la optimización de la gestión de entradas hasta la mejora en la comunicación con los asistentes, hemos logrado una significativa mejora en la logística del evento. <p>Se ha reducido el tiempo de espera en un 70%</p> a comparación de otros años, brindando una experiencia más satisfactoria. "
          },
          {
              name: "Santiago Espinosa, CEO de Foody Latam",
              title: "Equipo de Desarrollo Foody Latam",
              text: "En Foody Latam, nuestra aplicación personalizada ha transformado por completo el manejo de ventas en línea. Hemos simplificado procesos, permitiendo <p>mejorar la eficiencia y rentabilidad al doble</p> y ofrecer una experiencia de compra más rápida y conveniente."
          }
      ]
    },
    faq: {
        title: 'Inicia a tu camino al éxito',
        button: 'Agenda una llamada',
        secondButton: 'Contactar',
        cards: [
          {
          title: 'Análisis y Exploración',
          description: 'Tomemos juntos los primeros pasos para dar forma a tu solución revolucionaria. Hemos ayudado a más de 100 clientes a alcanzar sus metas'
          },
          {
          title: 'Diseño Innovador',
          description: 'Entendiendo tus necesidades y objetivos únicos, identificamos oportunidades y diseñamos estrategias a medida'
          },
          {
          title: 'Construido para Prosperar',
          description: 'Nuestro equipo está comprometido a crear los mejores productos con la mayor calidad posible. Impulsar el crecimiento es nuestro objetivo'
          },
          {
          title: 'Mide tu Crecimiento',
          description: 'Saber que tu desarrollo está en curso, proporcionamos soporte y datos para ayudarte a tomar mejores decisiones'
          }
        ],
    },
    contact: {
        title: 'Nos encantaría saber de ti, escríbenos',
        pretitle: 'Contacto',
        name: 'Nombre:',
        message: 'Mensaje',
        button: 'Enviar'
    },
    footer: {
      text: 'Desarrollamos software a la medida enfocando en la eficiencia y la rentabilidad de tu empresa.',
    }
  },
en: {
    navbar: {
        navigation: [
            "Services",
            "About Us",
            "Testimonials",
        ],
        button: "Contact"
    },
    legal : ["Terms", "Privacy", "Legal"],
    hero: {
        title: 'Efficiency and profitability for your company with',
        text: 'We develop custom software solutions, we understand and automate your operational processes.',
        button: 'Schedule a call'
    },
    services: {
        pretitle: 'Services',
        title: 'What we do',
        bullets: [
            {
                title: 'Custom software development',
                desc: 'We develop solutions tailored to your needs, using cutting-edge technologies and best development practices.',
            },
            {
                title: 'Technology consulting',
                desc: 'We support you in the implementation of the solution, we train you and accompany you in the adoption process.',
            },
            {
                title: 'Process optimization',
                desc: 'We will study your operational processes to identify opportunities, we will make comparisons with successful cases and present you with an action plan.',
            }
        ]
    },
    video: 'https://www.youtube-nocookie.com/embed/Vbrnm9QL6tA',
    us: {
        pretitle: 'About Us',
        title: 'See how it works'
    },
    testimonials: {
        pretitle: 'Testimonials',
        title: 'What our clients say',
        testimonials: [
          {
              text: "At LiviinX, our new custom platform has transformed the living experience. From reservation management to internal communication, we have created a more united and welcoming community. <p>Resident satisfaction has increased 3X</p>, offering an exceptional university environment.",
              name: "Pablo T., Residence Director",
              title: "LiviinX Development Team",
          },
          {
              name: "Alejandro G., Technology Director",
              title: "Stereo Picnic Team",
              text: "The Stereo Picnic has been revolutionized with our custom application. From optimizing ticket management to improving communication with attendees, we have achieved a significant improvement in event logistics. <p>Waiting time has been reduced by 70%</p> compared to other years, providing a more satisfying experience. "
          },
          {
              name: "Santiago Espinosa, CEO of Foody Latam",
              title: "Foody Latam Development Team",
              text: "At Foody Latam, our custom application has completely transformed online sales management. We have simplified processes, allowing <p>to improve efficiency and profitability by double</p> and offer a faster and more convenient shopping experience."
          }
      ]
    },
    faq: {
        title: 'Start your path to success',
        button: 'Schedule a call',
        secondButton: 'Contact',
        cards: [
          {
          title: 'Analysis and Exploration',
          description: 'Let\'s take the first steps together to shape your revolutionary solution. We have helped over 100 clients reach their goals'
          },
          {
          title: 'Innovative Design',
          description: 'Understanding your unique needs and goals, we identify opportunities and design custom strategies'
          },
          {
          title: 'Built to Thrive',
          description: 'Our team is committed to creating the best products with the highest possible quality. Driving growth is our goal'
          },
          {
          title: 'Measure your Growth',
          description: 'Knowing that your development is underway, we provide support and data to help you make better decisions'
          }
        ],
    },
    contact: {
        title: 'We would love to hear from you, write to us',
        pretitle: 'Contact',
        name: 'Name:',
        message: 'Message',
        button: 'Send'
    },
    footer: {
      text: 'We develop custom software focusing on the efficiency and profitability of your company.',
    }
  },
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}