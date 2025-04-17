
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '养正小学 ',
      major: 'elementry school',
      logo: 'college',
      start: '2006',
      end: '2012'
    },
    {
      school: '端芬中学',
      major: 'middle school',
      logo: 'college',
      start: '2012',
      end: '2015'
    },
    {
      school: '鹏权中学',
      major: 'high school',
      logo: 'college',
      start: '2015',
      end: '2018'
    },
    {
      school: 'KBCC',
      major: 'computer information system',
      logo: 'college',
      start: '2023',
      end: '2025'
    }
  ]