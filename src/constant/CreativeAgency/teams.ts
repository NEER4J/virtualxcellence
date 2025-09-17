export interface TeamData {
  name: string;
  role: string;
  shortRole: string;
  image: string;
  socials: {
    facebook: string;
    dribbble: string;
    behance: string;
  };
}

const teamData: TeamData[] = [
  {
    name: 'Liam Thompson',
    role: 'Creative Director, Virtual Xcellence',
    shortRole: 'Creative Director',
    image: '/assets/imgs/team/team-7.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Emily Martinez',
    role: 'Project Manager, Virtual Xcellence',
    shortRole: 'Project Manager',
    image: '/assets/imgs/team/team-8.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Jamie Anderson',
    role: 'UX/UI Designer, Virtual Xcellence',
    shortRole: 'UX/UI Designer',
    image: '/assets/imgs/team/team-9.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Sophia Carter',
    role: 'Marketing Strategist, Virtual Xcellence',
    shortRole: 'Marketing Strategist',
    image: '/assets/imgs/team/team-1.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Daniel Lewis',
    role: 'Senior Developer, Virtual Xcellence',
    shortRole: 'Senior Developer',
    image: '/assets/imgs/team/team-2.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Olivia Bennett',
    role: 'Content Designer, Virtual Xcellence',
    shortRole: 'Content Designer',
    image: '/assets/imgs/team/team-3.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Ethan Roberts',
    role: 'Product Manager, Virtual Xcellence',
    shortRole: 'Product Manager',
    image: '/assets/imgs/team/team-18.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Isabella Green',
    role: 'Lead Researcher, Virtual Xcellence',
    shortRole: 'Lead Researcher',
    image: '/assets/imgs/team/team-19.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
  {
    name: 'Mason Hill',
    role: 'Frontend Engineer, Virtual Xcellence',
    shortRole: 'Frontend Engineer',
    image: '/assets/imgs/team/team-20.webp',
    socials: {
      facebook: '#',
      dribbble: '#',
      behance: '#',
    },
  },
];

export default teamData;
