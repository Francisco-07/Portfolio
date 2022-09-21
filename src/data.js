const stats = [
  {
    tech: 'HTML',
    percent: 85,
    delay: 0.5,
    key: 1,
  },
  {
    tech: 'CSS',
    percent: 85,
    delay: 0.7,
    key: 2,
  },
  {
    tech: 'JAVASCRIPT',
    percent: 80,
    delay: 0.9,
    key: 3,
  },
  {
    tech: 'REACT',
    percent: 75,
    delay: 1.1,
    key: 4,
  },
  {
    tech: 'NEXT',
    percent: 75,
    delay: 1.1,
    key: 4,
  },
  {
    tech: 'EXPRESS',
    percent: 60,
    delay: 1.3,
    key: 5,
  },
  {
    tech: 'MONGO DB',
    percent: 60,
    delay: 1.5,
    key: 6,
  },
]

const about = [
  {
    size: '80px',
    delay: 0.2,
    title: 'Responsive',
    text1: 'Funcionan en',
    text2: 'cualquier dispositivo',
  },
  {
    size: '40px',
    delay: 0.4,
    title: 'Rapidas',
    text1: 'Mis sitios son rapidos y',
    text2: 'estan libres de lag',
  },
  {
    size: '40px',
    delay: 0.6,
    title: 'Dinamico',
    text1: 'Una mayor interaccion',
    text2: 'y mejor experiencia',
  },
  {
    size: '40px',
    delay: 0.8,
    title: 'Intuitivo',
    text1: 'Interfaces simples de',
    text2: 'usar e intuitivas',
  },
]

const redes = [
  {
    href: 'https://www.linkedin.com/in/francisco-garciarena/',
  },
  {
    href: 'https://github.com/Francisco-07',
  },
  {
    href: 'https://www.instagram.com/fran_garciarena/',
  },
]

const projects = [
  {
    tech: [
      'CSS modules',
      'Express',
      'React',
      'React Router',
      'Redux',
      'Mongo DB',
    ],
    delay: '1.3',
    linkProject: 'https://shopeccommerce.herokuapp.com/',
    linkRepo: 'https://github.com/Francisco-07/ecom-2',
    img: '/assets/ecom.jpg',
    alt: 'Ecommerce',
    reverse: false,
    title: 'Full Stack Ecommerce',
    text: 'Sitio full stack, hecho con Express, Mongo DB, JWT, React y Redux. El sitio incluye routing con React Router, paginación, panel de admin, registro, login.',
  },
  {
    tech: ['Styled Components', 'React', 'Sanity cms'],
    delay: '1.8',
    linkProject: 'https://cmrlp.netlify.app/',
    linkRepo: 'https://github.com/Francisco-07/CMR',
    img: '/assets/cmr.jpg',
    alt: 'cmr',
    reverse: true,
    title: 'CMR',
    text: 'Landing page hecha con React, styled components, completamente editable con Sanity.',
  },

  {
    tech: ['Styled Components', 'Next JS', 'Sanity cms', 'SWR'],
    delay: '0.8',
    linkProject: 'https://nextblogsanity.netlify.app/',
    linkRepo: 'https://github.com/Francisco-07/blog',
    img: '/assets/simpleblog.jpg',
    alt: 'Simple Blog',
    reverse: false,
    title: 'Simple Blog',
    text: 'Un blog sencillo, front end hecho con Next Js, Sanity cms para editar el contenido y SWR para data fetching.',
  },
]

export { projects, stats, about, redes }
