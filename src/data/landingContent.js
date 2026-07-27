import { BookLibraryIcon, ParentToddlerIcon, MathProgramIcon, ReadingProgramIcon } from "../assets/illustrations";
import exploreImg1 from "../assets/images/imgi_17_c.jpg";
import exploreImg2 from "../assets/images/imgi_18_a.jpg";
import exploreImg3 from "../assets/images/imgi_19_b.jpg";
import exploreImg4 from "../assets/images/imgi_20_d.jpg";

export const NAV_LINKS = [
  {
    label: "About KIS",
    to: "/#about",
    children: [
      { label: "Overview", to: "/#about" },
      { label: "School Features", to: "/#mission" },
      { label: "Chairman's Message", to: "/#about" },
      { label: "Principal's Message", to: "/#about" },
      { label: "Quintessential Campus", to: "/#mission" },
      { label: "Why Krishna International?", to: "/#about" },
      { label: "Recognition and Award", to: "/#about" },
    ],
  },
  {
    label: "Admission",
    to: "/admission",
    children: [
      { label: "Overview", to: "/admission" },
      { label: "Fee Payment", to: "https://krishnaintf.accevate.com/online/main", isExternal: true },
      { label: "Enroll", to: "https://krishnaintf.accevate.com/registration/", isExternal: true },
      { label: "Fee Structure", to: "/admission" },
      { label: "Transfer Certificate", to: "/admission" },
    ]
  },
  {
    label: "Academics",
    to: "/academics",
    children: [
      { label: "Overview", to: "/academics" },
      { label: "Academic Structure", to: "/academics" },
      { label: "Subjects Taught", to: "/academics" },
      { label: "Teaching Methodology", to: "/academics" },
      { label: "Roll of Honour", to: "/academics" },
      { label: "Career Guidance", to: "/academics" },
    ]
  },
  {
    label: "Co-Curricular",
    to: "/co-curricular",
    children: [
      { label: "Overview", to: "/co-curricular" },
      { label: "Sports and Life Skills", to: "/co-curricular" },
      { label: "Performing Arts", to: "/co-curricular" },
      { label: "Fine Arts", to: "/co-curricular" },
      { label: "Excursions And Trips", to: "/co-curricular" },
      { label: "Community Engagement", to: "/co-curricular" },
    ]
  },
  { label: "Gallery", to: "/gallery" },
  { label: "Join us", to: "https://krishnaintf.accevate.com/registration/", icon: true, isExternal: true },
];

export const FACULTY_PROGRAMS = [
  {
    id: 1,
    title: "Academics",
    subtitle: null,
    ageRange: "Explore now",
    description: "We are committed to providing high-quality teaching, developing intellectually curious, self-motivated, enthusiastic young women with an endearing love of learning.",
    icon: BookLibraryIcon,
    image: exploreImg1,
    route: "/academics",
  },
  {
    id: 2,
    title: "Admission",
    subtitle: null,
    ageRange: "Explore now",
    description: "Krishna International School seeks students from diverse social and cultural backgrounds, who demonstrate a desire to continuously learn and grow.",
    icon: ParentToddlerIcon,
    image: exploreImg2,
    route: "/admission",
  },
  {
    id: 3,
    title: "Co-Curricular",
    subtitle: null,
    ageRange: "Explore now",
    description: "Sports, arts and life skills programmes ensure each child's environment is responsive and exciting.",
    icon: MathProgramIcon,
    image: exploreImg3,
    route: "/co-curricular",
  },
  {
    id: 4,
    title: "Gallery",
    subtitle: null,
    ageRange: "Explore now",
    description: "Students develop their expressive skills, think creatively and learn to work collaboratively.",
    icon: ReadingProgramIcon,
    image: exploreImg4,
    route: "/gallery",
  },
];

export const MISSION_FEATURES = [
  {
    id: "growth",
    title: "Overall Personality Development",
    icon: "GrowthIcon",
  },
  {
    id: "curriculum",
    title: "CBSE Affiliated Curriculum",
    icon: "CurriculumIcon",
  },
  {
    id: "education",
    title: "Healthy Spirit of Competition",
    icon: "RocketIcon",
  },
  {
    id: "practical",
    title: "Modern Science Laboratories",
    icon: "PaletteIcon",
  },
  {
    id: "personalized",
    title: "Rich Cultural Heritage",
    icon: "LightbulbIcon",
  },
];

export const SERVICES = [
  {
    id: "students",
    title: "6,000+",
    titlePrefix: "",
    titleWord: "6,000+",
    titleSuffix: "",
    desc: "Students & Faculties thriving in our educational ecosystem.",
    icon: "MathSymbols",
  },
  {
    id: "awards",
    title: "60+",
    titlePrefix: "",
    titleWord: "60+",
    titleSuffix: "",
    desc: "National & International Awards achieved by our students.",
    icon: "SpeechBubbleCharacter",
  },
  {
    id: "satisfaction",
    title: "100%",
    titlePrefix: "",
    titleWord: "100%",
    titleSuffix: "",
    desc: "Parents Satisfaction with our holistic approach to education.",
    icon: "BookStack",
  },
  {
    id: "cbse",
    title: "CBSE",
    titlePrefix: "",
    titleWord: "CBSE",
    titleSuffix: "",
    desc: "Affiliated School providing nationally recognized curriculum.",
    icon: "BookStack",
  },
];

export const FAQS = [
  {
    id: "faq1",
    q: "Is Krishna International School affiliated with CBSE?",
    a: "Yes, we are amongst the best CBSE affiliated schools in Aligarh, providing an ideal environment for academic and co-curricular excellence.",
  },
  {
    id: "faq2",
    q: "What facilities are available on campus?",
    a: "Our 5-acre campus includes an equipped library, theatre, modern science laboratories, and extensive sports facilities for overall development.",
  },
  {
    id: "faq3",
    q: "How can I pay the school fee or apply for admission?",
    a: "You can easily click the 'Pay School Fee' or 'Click to Enroll' buttons on our website to access the Accevate student portal for online payments and registration.",
  },
  {
    id: "faq4",
    q: "What co-curricular activities does KIS offer?",
    a: "KIS offers a wide range of co-curricular activities including sports and life skills, performing arts, fine arts, excursions and trips, events, and community engagement programmes.",
  },
  {
    id: "faq5",
    q: "What is the school motto?",
    a: "Our school motto is 'Dedicated to Excellence.' Under this canopy, we endeavour to have students not only excel in academics but also imbue them with social awareness and pride in our rich cultural heritage.",
  },
];
