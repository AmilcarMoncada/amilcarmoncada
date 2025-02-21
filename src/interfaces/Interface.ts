
export interface InfoProps {
    title: string;
    text: string;
    image?: string;
    icon: string;
}

export interface CardIndexProps {
    title: string;
    title_en: string;
    description: string;
    description_en: string;
}

export interface ItemProps {
    titleEs: string;
    titleEn: string;
    href: string;
    subitems?: ItemProps[];
}

interface Skill {
    name: string;
    level: number;
}

interface CategorySkills {
    skills: Skill[];
    color: string;
}

export interface Skills {
    [categoria: string]: CategorySkills;
}

export interface Experience {
    title: string
    company: string
    description: string
    link?: string
    date: string
  }

interface tag {
    name: string
    class: string
    icon: any

}

export interface Tags  {
    [name: string]: tag;
}

export interface Proyects {
    title: string
    description: string
    link: string
    github?: string
    image: string
    tags: Tags[]
}

export interface WorkExperienceItem {
    title: string;
    titleEN: string;
    company: string;
    period: string;
    description: string[];
    descriptionEN: string[];
    technologies: string[];
  }