// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'liquid store',
      title: 'salemen',
      logo: 'liquid',
      start: '2019',
      end: '2021'
    },
    {
      company: 'goody fresh dim sum',
      title: 'waiter',
      logo: 'food',
      start: '2021',
      end: '2023'
    },
    {
      company: 'Crepe and tea',
      title: 'waiter',
      logo: 'food',
      start:'2025',
      end: 'present'
    },
  ]