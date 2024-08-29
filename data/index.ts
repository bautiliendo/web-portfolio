export const navItems = [
  // { name: "Inicio", link: "#hero" },
  { name: "Sobre mí", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Desarrollo páginas web Modernas, Innovadoras y Diseñadas a tu Medida",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full ml-2.5",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Estudiante de Ingeniría en Software - Universidad Siglo 21",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "ml-40 md:mt-20",
    titleClassName: "justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 3,
    title: "Tecnologías",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   "id": 4,
  //   "title": "Entusiasta de la tecnología con pasión por el desarrollo",
  //   "description": "",
  //   "className": "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   "imgClassName": "",
  //   "titleClassName": "justify-start",
  //   "img": "/grid.svg",
  //   "spareImg": "/b4.svg"
  // },
  {
    "id": 5,
    "title": "Página web portfolio",
    "description":
      "Esta página web es mi último trabajo realizado, hecho con Next.js, Three.js para elementos 3D, Framer Motion para animaciones y TailwindCSS para el estilo.",
    "className": "md:col-span-3 md:row-span-2",
    "imgClassName": "absolute right-0 bottom-0 md:w-96 w-60",
    "titleClassName": "justify-center md:justify-start lg:justify-center",
    "img": "/grid.svg",
    "spareImg": "/b4.svg"
  },
  {
    id: 6,
    title: "¿Tenés un proyecto en mente? Contactame",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sitio web corporativo - Empresa Clusterbaf",
    des: "Página web realizada para la empresa de servicios de ingeniería de Córdoba CLUSTERBAF. Función para cambiar de idioma al inglés",
    img: "/clusterbaf.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.clusterbaf.com/",
  },
  {
    id: 2,
    title: "E-commerce - Amanecer By Bagues",
    des: "Base de datos + 340 productos. Simplificación de pedidos a través de un sistema que permite añadir productos al carrito y completar su compra a través de un proceso de mensajería directa con el negocio.",
    img: "/amanecer.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      "/node-js-svgrepo-com.svg",
    ],
    link: "https://www.amanecerbybagues.com.ar/",
  },
  {
    id: 3,
    title: "E-commerce - Negocio Renovarte",
    des: "Catálogo de + 300 productos y un sistema de pedidos que permite añadir productos al carrito y completar su compra a través de un proceso de mensajería directa con el negocio.",
    img: "/renovarte.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node-js-svgrepo-com.svg"],
    link: "https://www.renovarte.com.ar/",
  },
  {
    id: 4,
    title: "Chatbot con Inteligencia Artificial",
    des: "Realicé una app con distintas funciones para las cuales utiliza inteligencia artficial, como traductor de texto, generación y edición de imágenes, conversor de audio a texto, texto a audio y demás.",
    img: "/reactgpt.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "nestjs.svg"],
    link: "https://github.com/bautiliendo/react-gpt-front",
  },
];

export const testimonials = [
  // {
  //   quote:
  //   "Bautista demostró ser un profesional excepcional. Su creatividad y habilidad técnica transformaron nuestra visión en una realidad digital impresionante. Su enfoque y capacidad para entender nuestras necesidades resultaron en un sitio web que superó nuestras expectativas.",
  //   name: "Javier",
  //   title: "Ingeniero Miembro Clusterbaf",
  // },
  {
    quote:
    "Trabajar con Bautista en la Imagen y Web de nuestra empresa fue excelente. Su puntualidad, profesionalismo, rapidez y dedicación a resultados fueron increíbles en todo el proyecto. Si buscas mejorar tu sitio web y elevar tu marca,  Bautista te va a dar la mejor solución!!",
    name: "Gonzalo Comba",
    title: "Socio Gte. Clusterbaf",
  },
  {
    quote:
      "Desde el primer momento que tuve contacto con Bautista me encantó su dedicación, esmero y profesionalismo. Comprometido de lleno con el proyecto, Bautista es el socio ideal.",
    name: "Gabriela Ludueña",
    title: "Emprendedora negocio Amanecer By Bagues",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bauti-liendo/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/bautiliendo/",
  },
];
