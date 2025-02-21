import NextJS from "../../components/icons/NextJS.astro"
import Tailwind from "../../components/icons/Tailwind.astro"
import type  { Proyects, InfoProps, CardIndexProps, ItemProps, Skills, WorkExperienceItem, Tags } from '../../interfaces/Interface';

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

export const cards: CardIndexProps[] = [
    {
      title: 'Sobre Mí',
      title_en: 'About Me',
      description: `🌐 Profesional de TI hondureño con más de <span class="font-semibold text-orange-600">15 años de experiencia</span> alineando las tecnologías de la información con los objetivos estratégicos de las organizaciones. Especializado en <span class="font-semibold text-orange-600">EdTech</span>, implementando soluciones de software educativo que se adaptan óptimamente a las necesidades del negocio, contribuyendo al crecimiento 📈 y eficiencia empresarial ⚙️.`,
      description_en: `🌐 Honduran IT professional with over <span class="font-semibold text-orange-600">15 years of experience</span> aligning information technology with organizations' strategic objectives. Specializing in <span class="font-semibold text-orange-600">EdTech</span>, implementing educational software solutions that optimally fit business needs, contributing to growth 📈 and operational efficiency ⚙️.`
    },
    {
      title: 'Trayectoria Profesional',
      title_en: 'Professional Journey',
      description: `Desde <span class="font-semibold text-orange-600">desarrollador web</span> 💻 hasta <span class="font-semibold text-orange-600">gerente de equipos de ciencia de datos</span> 📊, mi enfoque ha sido mejorar la <span class="font-semibold text-orange-600">gobernanza de datos</span> 🔐. Esto incluye desde la recolección de datos 📥 hasta el análisis 🔎 y la compartición de métricas relevantes para el negocio 📊.`,
      description_en: `From <span class="font-semibold text-orange-600">web developer</span> 💻 to <span class="font-semibold text-orange-600">manager of data science teams</span> 📊, my focus has been on improving <span class="font-semibold text-orange-600">data governance</span> 🔐. This includes everything from data collection 📥 to analysis 🔎 and sharing business-relevant metrics 📊.`
    },
    {
      title: 'Entusiasta del Café',
      title_en: 'Coffee Enthusiast',
      description: `☕ Apasionado del café, sueño con participar en campeonatos 🏆 para mostrar los <span class="font-semibold text-orange-600">granos de especialidad</span> 🌱 de Honduras 🇭🇳. Me encanta experimentar con diferentes métodos de preparación 🧪 y compartir deliciosas tazas de café con mis seres queridos ❤️.`,
      description_en: `☕ Passionate about coffee, I dream of participating in championships 🏆 to showcase the <span class="font-semibold text-orange-600">specialty beans</span> 🌱 from Honduras 🇭🇳. I love experimenting with different brewing methods 🧪 and sharing delicious cups of coffee with loved ones ❤️.`
    }
]

export const skills: Skills = {
    Frontend: {
      skills: [
        { name: "TypeScript", level: 50 },
        { name: "JavaScript", level: 45 },
        { name: "React", level: 40 },
        { name: "Vuejs", level: 40 },
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
        { name: "SpringBoot", level: 50 },
        { name: "Express", level: 45 },
        { name: "Laravel", level: 45 },
        { name: "C++", level: 40 },
      ],
      color: "bg-blue-500",
    },
    Databases:{ 
      skills:[
      { name: "Oracle Database", level: 50 },
      { name: "PostgreSQL", level: 50 },
      { name: "Microsoft SQL Server", level: 45 },
      { name: "MySQL", level: 45 },
      { name: "Data Warehouse", level: 35 }
    ],
    color: "bg-green-500",
  }
}

export const navItems: ItemProps[] = [
    { titleEs: 'Sobre Mí', titleEn: 'About Me', href: '/' },
    {
      titleEs: 'Proyectos', 
      titleEn: 'Projects',
      href: '/projects',
      subitems: [
        { titleEs: 'ML', titleEn: 'ML', href: '/projects/machine-learning' },
        { titleEs: 'Integración de Apps RAG', titleEn: 'RAG Apps Integration', href: '/projects/rag' },
        { titleEs: 'Infraestructura Azure', titleEn: 'Azure Infrastructure', href: '/projects/azure' },
        { titleEs: 'Ingeniería de Datos', titleEn: 'Data Engineering', href: '/projects/data-engineering' },
        { titleEs: 'Productos Digitales', titleEn: 'Digital Products', href: '/projects/digital-products' },
        { titleEs: 'LMS y SIS', titleEn: 'LMS and SIS', href: '/projects/lms-sis' },
      ]
    },
    { titleEs: 'Experiencia Laboral', titleEn: 'Work Experience', href: '/workexperience' },
];

export const TAGS: Tags[] = [{

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
}];


export const PROJECTS: Proyects[] = [{

    title: "SVGL - A beautiful library with SVG logos",
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    link: "https://svgl.vercel.app/",
    github: "https://github.com/pheralb/svgl",
    image: "/projects/svgl.webp",
    tags: [TAGS.]
  },
  {
    title: "AdventJS - Retos de programación con JavaScript y TypeScript",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.],
  }];