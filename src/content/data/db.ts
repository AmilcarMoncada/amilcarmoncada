import NextJS from "../../components/icons/NextJS.astro"
import Tailwind from "../../components/icons/Tailwind.astro"
import Laravel from "../../components/icons/Laravel.astro"
import Supabase from "../../components/icons/Supabase.astro"
import React from "../../components/icons/React.astro"
import Typescript from "../../components/icons/Typescript.astro"
import Express from "../../components/icons/Express.astro"
import Node from "../../components/icons/node.astro"
import Spring from "../../components/icons/Spring.astro"
import MySQL from "../../components/icons/Mysql.astro"
import Php from "../../components/icons/Php.astro"
import Java from "../../components/icons/Java.astro"
import Pandas from "../../components/icons/Pandas.astro"
import Learn from "../../components/icons/Learn.astro"
import Python from "../../components/icons/Python.astro"
import Numpy from "../../components/icons/Numpy.astro"
import WhatsApp from "../../components/icons/Whats.astro"
import LinkedIn from "../../components/icons/LinkedIn.astro"
import GitHub from "../../components/icons/GitHub.astro"
import type  { Projects, InfoProps, Skills, Tags, ModulosProps, FooterProps} from '../../interfaces/Interface';
import Javascript from "../../components/icons/Javascript.astro"

export const info: InfoProps[] = [
    {
      title: 'Sobre mi',
      text: ` <p class="dark:[&>strong]:text-yellow-200  [&>strong]:font-bold ">
      Mi nombre es <strong>Amílcar José Moncada Vásquez</strong>, soy <strong>Hondureño</strong> y tengo <strong>20 años</strong>.
    </p>

    <p>
      Desde muy niño amé la tecnológia, la robótica y todo lo relacionado con computadoras, 
      eso fue lo que poco a poco me fue motivando a estar donde estoy y sumergirme en 
      múltiples tecnologías del campo, comprendiendo los distintos recursos necesarios 
      para el <strong>desarrollo de soluciones como el ciclo de vida de un software</strong>, desde el 
      <strong>diseño</strong> hasta la <strong>implementación y monitoreo</strong> de las mismas. 
    </p>

    <p>
      Además de toda mi motivación, mi capacidad de poder <strong>dar soluciones</strong> y poder entender 
      lo que el negocio necesita me ha permitido desempeñarme de la mejor manera en los diferentes
      proyectos clase y externos a lo largo de mi experiencia. 
    </p>`,
    image:  '/images/me.jpeg'
    ,
    icon: "👨🏻‍💻"
    },
    {
      title: 'Pasiones y Fortalezas',
      text:  `<p>Dentro de mis mayores fortalezas es el <strong>adaptarme a cualquier herramienta</strong>, 
          lenguaje o tecnología que el negocio desee, ya que tengo la capacidad y el deseo 
          de seguir aprendiendo más sobre nuevas y ya existentes tecnologías que alimenten 
          mi deseo por sumergirme más en el mundo de la <strong>programación y el desarrollo</strong>. 
          para el <strong>desarrollo de soluciones como el ciclo de vida de un software</strong>, desde el 
          <strong>diseño</strong> hasta la <strong>implementación y monitoreo</strong> de las mismas. 
        </p>
      
        <p>
          Otra de mis pasiones es la <strong>iglesia</strong>, soy un católico comprometido al <strong>servicio de niños y jóvenes</strong> de mi comunidad parroquial, 
          teniendo un recorrido en pastoral juvenil y pastoral de catequesis, confirmando que <strong>Dios ha sido 
          y es el motor que cada día me lleva a alcanzar las metas que me propongo cumplir.</strong> 
        </p>`,
        icon:"⛪"
    }
];


export const skills: Skills = {
    Frontend: {
      skills: [
        { name: "TypeScript", level: 50 },
        { name: "JavaScript", level: 45 },
        { name: "React", level: 35 },
        { name: "Vuejs", level: 30 },
        { name: "Next.js", level: 30 },
    ],
    color: "bg-orange-500",
  },
    Backend:{ 
      skills:[
        { name: "Java", level: 55 },
        { name: "PHP", level: 50 },
        { name: "Python", level: 50 },
        { name: "TypeScript", level: 50 },
        { name: "SpringBoot", level: 45 },
        { name: "Express", level: 45 },
        { name: "Laravel", level: 45 },
        { name: "C++", level: 30 },
      ],
      color: "bg-blue-500",
    },
    Databases:{ 
      skills:[
      { name: "Oracle Database", level: 50 },
      { name: "PostgreSQL", level: 50 },
      { name: "Microsoft SQL Server", level: 35 },
      { name: "MySQL", level: 40 },
      { name: "Data Warehouse", level: 30 }
    ],
    color: "bg-green-500",
  }
}


export const Items: ModulosProps[] = [
  {
    title: "Inicio",
    label: "Inicio",
    url: "/",
  },
  {
    title: "Habilidades",
    label: "Habilidades",
    url: "/habilidades",
  },
    {
      title: 'Proyectos',
      label: 'Proyectos',
      url: '/proyectos'
    } 
  ,  {
    title: "Experiencia",
    label: "experiencia",
    url: "/experiencia",
  }
];


const TAGS: Tags = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  LARAVEL: {
    name: "Laravel",
    class: "bg-black text-white",
    icon: Laravel,
  },
    SUPABASE: {
      name: "Supabase",
      class: "bg-black text-white",
      icon: Supabase,
    },
    EXPRESS: {
      name: "Express",
      class: "bg-black text-white",
      icon: Express,
    },
    TYPESCRIPT: {
      name: "TypeScript",
      class: "bg-black text-white",
      icon: Typescript,
    },
    NODE: {
      name: "Node.js",
      class: "bg-black text-white",
      icon: Node,
    },
    REACT: {
      name: "React",
      class: "bg-black text-white",
      icon: React,
    },
    JAVA: {
      name: "Java",
      class: "bg-black text-white",
      icon: Java,
    },
    SPRING: {
      name: "SpringBoot",
      class: "bg-black text-white",
      icon: Spring,
    },
    MYSQL: {
      name: "MySQL",
      class: "bg-black text-white",
      icon: MySQL,
    },
    PHP: {
      name: "PHP",
      class: "bg-black text-white",
      icon: Php,
    },
    JAVASCRIPT: {
      name: "JavaScript",
      class: "bg-black text-white",
      icon: Javascript,
    },
    NUMPY: {
      name: "Numpy",
      class: "bg-black text-white",
      icon: Numpy,
    },
    LEARN: {
      name: "Scikit-Learn",
      class: "bg-black text-white",
      icon: Learn,
    },
    PYTHON: {
      name: "Python",
      class: "bg-black text-white",
      icon: Python,
    },
    PANDAS: {
      name: "Pandas",
      class: "bg-black text-white",
      icon: Pandas,
    }
};


export const Proyectos: Projects[] = [
  
  {
    title: "Congreso de Innovación y Tecnologias UNAH 2025",
    description:
      `<p>Plataforma interactiva para los participantes del congreso, 
      donde pueden registrarse, obtener información sobre el evento, 
      y consultar sobre las diferentes presentaciones y actividades.</p>
      <br>
      <p>Como parte del <strong>backend</strong>, mi responsabilidad fue asegurar que las interacciones
      con la base de datos fueran rápidas, seguras y escalables,
      contribuyendo a una experiencia de usuario fluida.</p>`,
    link: "https://congresoinnovacionunah2025.com/",
    image: "/images/Congreso.jpg",
    tags: [TAGS.NODE, TAGS.TYPESCRIPT, TAGS.EXPRESS, TAGS.SUPABASE, TAGS.REACT, TAGS.JAVASCRIPT]
  },{

    title: "Simulador de Uber",
    description:  
    `<p>Aplicación web que replica el funcionamiento básico de una plataforma de transporte similar a <strong>Uber</strong>,  
    permitiendo a los usuarios solicitar un servicio de transporte, a los conductores recibir solicitudes de viajes  
    y a los administradores gestionar el sistema, ademas de integrar la <strong>API de Google Maps</strong> para
    mostrar mapas, calcular rutas y determinar distancias.</p>
    <br>
    <p>En este proyecto desempeñe el rol de <strong>Desarrollador Web Full Stack</strong>, permitiéndome desarrollar mis habilidades
    técnicas e integrar <strong>APIs externas</strong>, lo que seria valioso para
    roles de desarrollo web en empresas que requieren soluciones escalables e integradas. `
    ,
    github: "https://github.com/MoralesGuillermo/SimuladorUber",
    image: "/images/zorrito.png",
    tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.JAVA, TAGS.SPRING, TAGS.MYSQL]
  },
  {
    title: "Prototipo para la Detección de Fatiga Muscular",
    description:
     `<p>Aplicando <strong>aprendizaje automático y análisis de datos</strong>, a través 
      la librería <strong>Pandas</strong> para el  procesamiento de datos y <strong>Scikit-learn</strong>
       para aplicar el modelo de regresión lineal,  a partir de la lectura de <strong>electromiogramas (EMG)</strong>.</p> 
       <br>
       
       <p>Desempeñé el rol de <strong>desarrollador y responsable</strong> del modelo, me encargué de todo el proceso 
       de recolección y limpieza de datos hasta la <strong>creación y entrenamiento del modelo</strong>.</p>`,
       github: "https://github.com/dme2002/Modelo_Fatiga_Muscular",
    image: "/images/coil.png",
    tags: [TAGS.PYTHON, TAGS.PANDAS, TAGS.LEARN, TAGS.NUMPY]
  },
  {
    title: "Clon Funcional de Pinterest",
    description:
     ` <p>El proyecto replica la <strong>experiencia de usuario de Pinterest</strong>, incluyendo funcionalidades clave como la subida de imágenes,
      categorización, búsquedas y exploración de contenido visual.</p>
    <br>
    <p>Fui el desarrollador principal, desde la estructura de la base de datos, implementación de la interfaz de usuario 
    y la creación de una <strong>API REST con Springboot</strong>.</p>`,
    github: "https://github.com/AmilcarMoncada/ProyectoPinterestBackend",
    link: "https://github.com/AmilcarMoncada/ProyectoPinterest-Frontend",
    image: "/images/Pinterest.png",
    tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.JAVA, TAGS.SPRING, TAGS.MYSQL]
  }];


  export const Footerss: FooterProps[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amilcarmoncada/',
      icon: LinkedIn
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AmilcarMoncada',
      icon: GitHub
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+50495808377',
      icon: WhatsApp
    }
];