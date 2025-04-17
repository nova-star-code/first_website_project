export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Nova lee'
export const headline = 'Passionate about coding and exercising.'
export const introduction =
  "Hi, I’m Nova Lee, originally from China. I’m passionate about personal growth and living a healthy lifestyle. You’ll often find me at the gym, challenging my limits, or deep into a self-improvement book, exploring new ideas to level up mentally and physically. I believe in constantly evolving and striving to become the best version of myself."
export const email = 'novaprogrammer8@gmail.com'
export const githubUsername = 'NOVA-STAR-CODE'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hi, I’m Nova Lee, currently diving into HTML, CSS, and JavaScript as I work toward building my very first website and continuously refining my skills. I’m also a huge fan of self-development, especially when it comes to understanding and reshaping habits. I truly believe that by changing our habits, we can transform our lives. Some of the books that have had a big impact on me include Atomic Habits, The Power of Your Subconscious Mind, and Tiny Habits. I’ll be sharing insights and lessons from my learning journey on my blog soon—so stay tuned!"
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/dabin596/',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
