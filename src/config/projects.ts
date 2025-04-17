// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'The most handsome student',
    description: '',
    date: '2025',
    location: 'kbcc, college',
  },
  {
    name: 'Muscle Man',
    description: '',
    date: '2025',
    location: 'Dolphin, gym',
  },
]

// Research & Projects
export const projectHeadLine = "Current learning"
export const projectIntro = "I'm currently learning HTML, CSS, and JavaScript."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Full Stack Development',
    description: 'Angela udemy course',
    link: { href: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=ST14MT150425G3', label: 'udemy' },
    tags: ['Website', 'html', 'CSS', 'javascript', 'beginner friendly']
  },
  {
    name: 'Notion',
    description: 'From zero to hero',
    link: { href: 'https://www.udemy.com/course/notion-masterclass/?couponCode=ST14MT150425G3', label: 'udemy' },
    tags: ['Notion', 'productivity', 'beginner friendly']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies"
export const activitiesIntro = "Personal interests ."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Erercise',
    description:
      "Gym can improve a man mentel capacility, stay stronger",
    date: '2025-04-16',
    location: 'Brooklyn',
  },
  {
    name: 'coding',
    description:
      'My dream is create an app that can solve people probem and become financial freedom',
    date: '2025-04-16',
    location: 'Brooklyn',
  },
]
