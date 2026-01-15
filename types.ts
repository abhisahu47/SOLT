export interface CareerPath {
  id: string;
  title: string;
  category: string;
  dayInLife: string;
  iconName: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  tags: string[];
}

export interface SpecimenModule {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'Slide' | 'Resource';
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  WISDOM = 'wisdom',
  SPECIMEN = 'specimen',
  FUNZONE = 'funzone',
}