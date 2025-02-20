import type  { InfoProps, CardIndexProps, ItemProps, Skills, WorkExperienceItem } from '../../interfaces/Interface';
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
    color: "orange-500",
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
      color: "blue-500",
    },
    Databases:{ 
      skills:[
      { name: "Oracle Database", level: 50 },
      { name: "PostgreSQL", level: 50 },
      { name: "Microsoft SQL Server", level: 45 },
      { name: "MySQL", level: 45 },
      { name: "Data Warehouse", level: 35 }
    ],
    color: "orange-500",
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

/** WORK EXPERIENCE */

export const experiences: WorkExperienceItem[] = [
  {
    title: "Lider Técnico de BI",
    titleEN: "BI Team Lead",
    company: "Edusoft",
    period: "2023 - Presente",
    description: [
      "Gestionar las cargas de trabajo y los recursos del equipo de BI.",
      "Cooperar en la implementación de la lakehouse.",
      "Analizar e implementar la gobernanza de datos.",
      "Desarrollar y mantener los pipelines de datos.",
      "Analizar diferentes soluciones basadas en datos para entender los estilos de aprendizaje de los estudiantes.",
    ],
    descriptionEN: [
      "Manage workloads and resources for the BI team.",
      "Cooparete implementing the lakehouse.",
      "Analyse and implement the data governance.",
      "Develop and maintain the data pipelines.",
      "Analyze different data-driven solutions to understand student learning styles.",
    ],
    technologies: ["Python", "Azure", "Databricks", "DataLake", "PySpark", "LlamaIndex"],
  },{
    title: "Arquitecto de datos",
    titleEN: "Data Architect",
    company: "Analytikus",
    period: "2021 - 2023",
    description: [
      "Diseñar y mantener la arquitectura de datos en Azure.",
      "Implementar Modelos estadisticos para predecir deserción estudiantil.",
      "Implementar Modelos estadisticos para priorizar potenciales estudiantes a matricular.",
      "Emplementar Bot para atender a los estudiantes mediante el uso de ChatGPT dentro Microsoft Teams.",
    ],
    descriptionEN: [
      "Design and maintain the data architecture in Azure.",
      "Implement statistical models to predict student dropout.",
      "Implement statistical models to prioritize potential students to enroll.",
      "Implement Bot to assist students using ChatGPT within Microsoft Teams.",
    ],
    technologies: ["Python", "Azure", "Databricks", "DataLake", "PySpark", "Synapse", "BotFramework", "MongoBD"],
  }
];