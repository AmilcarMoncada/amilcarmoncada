
export interface InfoProps {
    title: string;
    text: string;
    image?: string;
    icon: string;
}

export interface ModulosProps {
    title: string;
    label: string;
    url: string;
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

export interface Projects {
    title: string
    description: string
    link?: string
    github?: string
    image: string
    tags?: tag[]
}

export interface FooterProps {
    name: string;
    url: string;
    icon: any;
}
