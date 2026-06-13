/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://github.com/SebasCoder2022',
  meta: {
    title: 'Sebastián Torres C. | Software Backend Developer',
    description:
      'Portafolio profesional: Desarrollo de software, arquitectura backend, clean code y bases de datos robustas.',
  },
  hero: {
    name: 'Sebastián Torres',
    role: 'Software Backend Developer',
    tagline: 'Especializado en el ecosistema Java y Spring Boot. Enfocado en la creación de microservicios robustos, diseño de arquitectura de software y optimización de bases de datos.',
    contact: 'Disponible para integrarse a equipos de ingeniería backend con tecnologías Java de alto impacto.',
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Sebastián Torres C.',
  },
  about: {
    paragraphs: [
      'Desarrollador Backend enfocado en ingeniería de software, diseño de arquitecturas escalables y construcción de sistemas eficientes en el servidor utilizando Java y Spring Boot. Priorizo el uso de Clean Code, patrones de diseño y modelado óptimo de bases de datos para garantizar la integridad del software.',
      'Me apasiona traducir requerimientos complejos en microservicios modulares y APIs RESTful de alto rendimiento mediante Spring Boot y Spring Data. Cuento con bases prácticas implementando arquitecturas tradicionales por capas y paradigmas reactivos asíncronos no bloqueantes con Spring WebFlux.',
      {
        heading: 'Stack Tecnológico',
        techItems: ['Java', 'Spring Boot', 'WebFlux', 'Netty', 'JPA / Hibernate', 'PostgreSQL', 'Postman', 'Git'],
      },
    ],
  },
  experiences: [
    {
      period: 'Jun 2025 - Act',
      title: 'Desarrollador Backend Jr.',
      company: 'Isoptic Group',
      summary:
        'Implementación de soluciones de seguridad informática robustas en Java y Spring Boot enfocadas en la gestión centralizada de accesos bajo el modelo Zero Trust.',
      highlights: [
        'Desarrollo de componentes backend seguros para la gestión centralizada de usuarios y credenciales.',
        'Diseño y consumo de APIs RESTful avanzadas para la monitorización de flujos de datos dinámicos en tiempo real.',
        'Aplicación de buenas prácticas de desacoplamiento de código y optimización de lógica empresarial en el servidor.',
      ],
      tech: ['Java', 'Spring Boot', 'APIs REST', 'Zero Trust'],
    },
    {
      period: '2024 - 2025',
      title: 'Ingeniero de TI',
      company: 'Isoptic Group',
      summary:
        'Administración, configuración y mantenimiento preventivo de la infraestructura de servidores empresariales y redes de seguridad perimetral.',
      highlights: [
        'Gestión y mantenimiento de servidores empresariales garantizando alta disponibilidad de los servicios del negocio.',
        'Monitoreo activo de la seguridad perimetral en redes y administración estricta de políticas de acceso.',
        'Centralización de flujos de información y soporte especializado a la infraestructura tecnológica.',
      ],
      tech: ['Servidores', 'Seguridad', 'Linux', 'Infraestructura'],
    },
    {
      period: '2022 - 2023',
      title: 'Ingeniero de Infraestructura de TI',
      company: 'Electritorres S.A.S',
      summary:
        'Diseño, montaje y gestión de la arquitectura física y lógica de conectividad, enrutamiento y redes de comunicaciones.',
      highlights: [
        'Diseño, montaje y cableado estructurado de racks de comunicaciones asegurando interconexión eficiente.',
        'Administración lógica de servidores locales, enrutamiento y habilitación avanzada de puertos de red.',
        'Optimización física de los recursos de conectividad e infraestructura interna de la compañía.',
      ],
      tech: ['Redes', 'Hardware', 'Puertos', 'Enrutamiento'],
    },
  ],
  featuredProjects: [
    {
      title: 'Microservicio Reactivo de Transferencias',
      period: '2026',
      summary: 'Backend asíncrono y no bloqueante diseñado para el procesamiento de alta concurrencia transaccional.',
      solution: 'Implementación de arquitectura reactiva con Spring WebFlux y Netty, estructurando flujos mediante tipos Mono/Flux.',
      impact: 'Manejo controlado de excepciones asíncronas en caliente mediante operadores de resiliencia sin interrumpir el servidor.',
      image: 'SpringWebFlux2.1',
      imageAlt: 'Microservicio Reactivo de Transferencias Bancarias',
      techCategories: [
        {
          category: 'Reactivo',
          items: ['Java', 'WebFlux', 'Netty'],
        },
        {
          category: 'Buenas Prácticas',
          items: ['Lombok', 'Resiliencia', 'DTOs'],
        },
      ],
    },
    {
      title: 'API REST de Gestión de Inventarios',
      period: '2025',
      summary: 'API RESTful robusta para el control, auditoría y administración automatizada de stock empresarial.',
      solution: 'Desarrollo estructurado bajo una arquitectura limpia por capas separando Controladores, Servicios y Repositorios.',
      impact: 'Persistencia relacional óptima mediante JPA e Hibernate, garantizando un mapeo eficiente y consistencia de datos.',
      image: 'Springbootoscuro1.jpg',
      imageAlt: 'API REST de Gestión de Inventarios',
      techCategories: [
        {
          category: 'Persistencia',
          items: ['Java', 'Spring Boot', 'JPA'],
        },
        {
          category: 'Data & Test',
          items: ['PostgreSQL', 'Postman', 'Clean Code'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'Todos los proyectos',
    description: 'Archivo completo de laboratorios, tecnologías y despliegues backend.',
    intro: 'Un historial detallado del desarrollo e infraestructura ejecutados.',
  },
  projectArchive: [
    { date: '2026', project: 'Microservicio Reactivo de Transferencias', role: 'Backend', techStack: 'Java, Spring WebFlux, Netty, Lombok' },
    { date: '2025', project: 'API REST de Gestión de Inventarios', role: 'Backend', techStack: 'Java, Spring Boot, JPA, Hibernate, Postgres' },
    { date: '2025', project: 'Software de Seguridad (Zero Trust)', role: 'Backend', techStack: 'Java, Spring Boot, Gestión Centralizada' },
    { date: '2024', project: 'Administración de Servidores Perimetrales', role: 'Infraestructura', techStack: 'Linux, Redes de Seguridad' },
    { date: '2022', project: 'Diseño e Infraestructura de Conectividad', role: 'Infraestructura', techStack: 'Racks de comunicaciones, Puertos, Enrutamiento' },
  ],
  contact: {
    email: 'torressebastian260@gmail.com',
    github: 'https://github.com/SebasCoder2022',
    linkedin: 'https://www.linkedin.com/in/johan-sebastián-torres-castañeda-1149bb1b7/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];

