/**
 * Content data for all sub-pages (Academics, Admission, Co-Curricular, Gallery).
 * Each page has: title, heroImage, tabs[{ id, label, content }].
 */

// Hero images
import heroAcademics from "../assets/images/imgi_17_c.jpg";
import heroAdmission from "../assets/images/imgi_18_a.jpg";
import heroCoCurricular from "../assets/images/imgi_19_b.jpg";
import heroGallery from "../assets/images/imgi_20_d.jpg";

// Gallery images
import gallery1 from "../assets/images/imgi_8_website 1.jpg";
import gallery2 from "../assets/images/imgi_9_website 2.jpg";
import gallery3 from "../assets/images/imgi_10_website 3.jpg";
import gallery4 from "../assets/images/imgi_11_website 4.jpg";
import gallery5 from "../assets/images/imgi_12_website 5.jpg";
import gallery6 from "../assets/images/imgi_13_A 2.jpg";
import gallery7 from "../assets/images/imgi_14_A3.jpg";
import gallery8 from "../assets/images/imgi_15_A 4.jpg";
import gallery9 from "../assets/images/imgi_16_A 5.jpg";
import gallery10 from "../assets/images/imgi_25_galleryone.png";

// ─────────────────────────────────────────
// ACADEMICS
// ─────────────────────────────────────────
export const ACADEMICS_PAGE = {
  title: "Academics",
  heroImage: heroAcademics,
  tabs: [
    {
      id: "overview",
      label: "Overview",
      content: {
        heading: "Overview",
        paragraphs: [
          "The key to learning in the twenty-first century is a skill. Children are taught social, cognitive, and emotional skills to prepare them for the future. In the past, the Indian education system did not prioritize information overload, exams, or grades. However, this has changed in recent years. The Gurukul system, which served as the foundation for our education, needs to be updated to reflect contemporary values.",
          "The learning system is a unique pedagogy that is appropriate for the future because it empowers children with age-appropriate activities, skills-based learning, an assessment system that makes learning joyful and bridges learning gaps, experiential learning, exposure to practical project work, and most importantly, an interactive teaching-learning process.",
        ],
        keyStrengths: [
          "Collaborating to advance the school's shared objective of achieving greater excellence.",
          "Continuous faculty growth through ongoing training and workshops.",
          "Embracing innovative teaching and learning approaches.",
          "Implementing creative strategies to yield outstanding results.",
          "Integrating a mix of scholastic and co-scholastic activities to foster holistic student development.",
        ],
      },
    },
    {
      id: "academic-structure",
      label: "Academic Structure",
      content: {
        heading: "Academic Structure",
        paragraphs: [
          "Krishna International School follows the CBSE curriculum with a structured academic framework designed to ensure holistic development. The school is organized into the following levels:",
        ],
        list: [
          "Pre-Primary: Playgroup, Nursery, KG",
          "Primary: Classes I to V",
          "Middle School: Classes VI to VIII",
          "Secondary: Classes IX to X",
          "Senior Secondary: Classes XI to XII (Science, Commerce, Humanities)",
        ],
      },
    },
    {
      id: "subjects",
      label: "Subjects Taught",
      content: {
        heading: "Subjects Taught",
        paragraphs: [
          "Our curriculum encompasses a wide range of subjects to provide comprehensive education:",
        ],
        list: [
          "English, Hindi, Sanskrit, Mathematics, Science",
          "Social Science (History, Geography, Civics, Economics)",
          "Computer Science & Information Technology",
          "Physical Education & Health",
          "Art & Craft, Music, Dance",
          "Senior Secondary Streams: Physics, Chemistry, Biology, Accountancy, Business Studies, Political Science, Psychology",
        ],
      },
    },
    {
      id: "examination",
      label: "Examination & Promotion",
      content: {
        heading: "Examination & Promotion",
        paragraphs: [
          "The school follows CBSE guidelines for examination and promotion. Assessment is continuous and comprehensive, designed to evaluate students holistically.",
          "Cumulative assessment of the whole year is considered for the child's promotion into the next class. A student who fails twice in the same class will have to be withdrawn from the School.",
        ],
      },
    },
    {
      id: "teaching-methodology",
      label: "Teaching Methodology",
      content: {
        heading: "Teaching Methodology",
        paragraphs: [
          "At KIS, we employ a blend of traditional and modern teaching methodologies including experiential learning, project-based learning, smart classroom technology, and interactive sessions.",
          "Our approach empowers children with age-appropriate activities, skills-based learning, and most importantly, an interactive teaching-learning process.",
        ],
      },
    },
    {
      id: "roll-of-honour",
      label: "Roll of Honour",
      content: {
        heading: "Roll of Honour",
        paragraphs: [
          "We celebrate our students who have excelled academically and brought laurels to the school through national and international competitions, Olympiads, and board examinations.",
        ],
      },
    },
    {
      id: "career-guidance",
      label: "Career Guidance",
      content: {
        heading: "Career Guidance",
        paragraphs: [
          "Regular counselling of students gives them an insight into the competitive world ahead and encourages students to build a healthy spirit of competition. Our career guidance cell helps students make informed decisions about their future academic and professional paths.",
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────
// ADMISSION
// ─────────────────────────────────────────
export const ADMISSION_PAGE = {
  title: "Admissions",
  heroImage: heroAdmission,
  tabs: [
    {
      id: "overview",
      label: "Overview",
      content: {
        heading: "Admissions Overview",
        paragraphs: [
          "Join us at Krishna International School, where we pave the path for our students' future. Fostering academic curiosity and holistic development is our primary goal. The School's academic session commences in April each year. The School accepts registrations for Grades Playgroup to IX (CBSE), XI (CBSE). Each academic year is divided into two terms as follows:",
        ],
        terms: [
          { label: "First Term", value: "1st April to 30th September" },
          { label: "Second Term", value: "1st October to 31st March" },
        ],
        sections: [
          {
            title: "Procedure for Registration",
            text: "We warmly welcome children to apply for CBSE school admission in Aligarh at KRISHNA INTERNATIONAL SCHOOL. Our institution offers a seamless enrollment process for your child's admission.",
            bullets: [
              "CONNECT WITH SCHOOL COUNSELOR: The school counselor connects with the parents to share information related to curriculum, fees, campus etc.",
              "REGISTRATION FORM: Prospectus and Registration form can be obtained from the school office by paying the registration fee and completed Registration form need to be deposited in the School office within a specific time.",
              "The admission process is designed in such a way that it tests both aptitude and attitude of the child.",
              "The school reserves the right to select or reject any application. The decision of the school authorities is final.",
            ],
          },
          {
            title: "Documents Required",
            bullets: [
              "Photocopy of the date of birth certificate issued by a competent authority",
              "Original Transfer Certificate – Previous School (for Class II and above)",
              "Two recent passport size coloured photographs of the candidate",
              "Copy of Permanent Address proof",
              "Previous class mark-sheet (for class II to XII)",
              "Aadhaar Card of the parents and candidate",
              "Medical Fitness Certificate",
              "Blood Group – Authorized lab. Certified by MBBS doctor",
            ],
          },
          {
            title: "Eligibility",
            text: "Minimum age for admission to class Playgroup is 2 years 6 months. The School would inform parents about interview and selection process in due course of time.",
            bullets: [
              "Admission to Nursery & Kindergarten is allotted on the basis of interaction with the child and the parents.",
              "For classes I onwards there is an eligibility test followed by an interaction with parents.",
              "For Grade XI Science: Proficiency in English, Integrated Science and Mathematics.",
              "For Grade XI Commerce: Proficiency in English, Mathematics and Logical Reasoning.",
              "For Grade XI Humanities: Proficiency in English, Social Science and Logical Reasoning.",
            ],
          },
        ],
      },
    },
    {
      id: "fee-payment",
      label: "Fee Payment",
      content: {
        heading: "Fee Payment",
        paragraphs: [
          "Pay your school fees online through the Accevate student portal.",
        ],
        externalLink: {
          label: "Pay School Fee Online",
          url: "https://krishnaintf.accevate.com/online/main",
        },
      },
    },
    {
      id: "enroll",
      label: "Enroll",
      content: {
        heading: "Enroll Now",
        paragraphs: [
          "Register your child for admission at Krishna International School through the Accevate portal.",
        ],
        externalLink: {
          label: "Click to Enroll",
          url: "https://krishnaintf.accevate.com/registration/",
        },
      },
    },
    {
      id: "fee-structure",
      label: "Fee Structure",
      content: {
        heading: "Fee Structure",
        paragraphs: [
          "For detailed fee structure information, please contact the school office or visit us at Delhi G.T. Road, Aligarh-202001.",
          "Phone: + (91) 983-70-50000 / + (91) 735-10-50000",
          "Email: info@kisaligarh.com",
        ],
      },
    },
    {
      id: "transfer-certificate",
      label: "Transfer Certificate",
      content: {
        heading: "Withdrawal Rules",
        paragraphs: [],
        bullets: [
          "A one-month notice period or one-month notice fee is required for withdrawal.",
          "Clearance must be obtained from the laboratory and library incharge before applying for withdrawal.",
          "Transfer Certificate will be issued after 15 days of the receipt of the application and clearance of all dues.",
          "Application for withdrawal is to be made on a prescribed proforma available in the school office. No child is withdrawn till a written request from parents is put up.",
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────
// CO-CURRICULAR
// ─────────────────────────────────────────
export const COCURRICULAR_PAGE = {
  title: "Co-Curricular",
  heroImage: heroCoCurricular,
  tabs: [
    {
      id: "overview",
      label: "Overview",
      content: {
        heading: "Co-Curricular Overview",
        paragraphs: [
          "At Krishna International School, co-curricular activities are an integral part of the learning process. We believe that education extends beyond textbooks and classrooms. Our programmes are designed to develop the overall personality of students and help them discover their hidden talents.",
          "Through sports, arts, cultural activities, and community engagement, students develop leadership skills, teamwork, creativity, and social responsibility.",
        ],
      },
    },
    {
      id: "sports",
      label: "Sports and Life Skills",
      content: {
        heading: "Sports and Life Skills",
        paragraphs: [
          "Our comprehensive sports programme includes a wide range of indoor and outdoor activities designed to promote physical fitness, sportsmanship, and team spirit.",
        ],
        list: [
          "Cricket, Football, Basketball, Volleyball",
          "Badminton, Table Tennis, Chess",
          "Athletics and Track Events",
          "Yoga and Meditation",
          "Swimming",
          "Martial Arts and Self-Defence",
        ],
      },
    },
    {
      id: "performing-arts",
      label: "Performing Arts",
      content: {
        heading: "Performing Arts",
        paragraphs: [
          "Students are encouraged to explore and express themselves through various performing arts disciplines. Regular workshops, inter-house and inter-school competitions provide platforms for showcasing talent.",
        ],
        list: [
          "Classical and Western Dance",
          "Vocal and Instrumental Music",
          "Theatre and Drama",
          "Public Speaking and Debate",
          "Storytelling and Elocution",
        ],
      },
    },
    {
      id: "fine-arts",
      label: "Fine Arts",
      content: {
        heading: "Fine Arts",
        paragraphs: [
          "The Fine Arts programme at KIS nurtures creativity and artistic expression. Students work with various media and techniques to develop their artistic abilities.",
        ],
        list: [
          "Drawing and Painting",
          "Sculpture and Clay Modelling",
          "Craft and Design",
          "Photography",
          "Digital Art",
        ],
      },
    },
    {
      id: "excursions",
      label: "Excursions & Trips",
      content: {
        heading: "Excursions and Trips",
        paragraphs: [
          "Educational excursions and field trips are an important part of our curriculum. These experiences help students connect classroom learning with the real world and foster curiosity and a spirit of exploration.",
        ],
      },
    },
    {
      id: "community",
      label: "Community Engagement",
      content: {
        heading: "Community Engagement",
        paragraphs: [
          "KIS believes in nurturing socially responsible citizens. Our community engagement programmes encourage students to contribute positively to society through various initiatives including environmental awareness drives, visits to old age homes, and charity events.",
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────
export const GALLERY_PAGE = {
  title: "Gallery",
  heroImage: heroGallery,
  images: [
    { src: gallery1, alt: "School Activities" },
    { src: gallery2, alt: "Students in Action" },
    { src: gallery3, alt: "Campus Life" },
    { src: gallery4, alt: "Cultural Events" },
    { src: gallery5, alt: "Sports Day" },
    { src: gallery6, alt: "Academic Excellence" },
    { src: gallery7, alt: "School Campus" },
    { src: gallery8, alt: "Student Life" },
    { src: gallery9, alt: "School Programs" },
    { src: gallery10, alt: "Gallery Highlights" },
  ],
  socialLinks: [
    { label: "Facebook", url: "https://www.facebook.com/krishnainternationalaligarh" },
    { label: "Instagram", url: "https://www.instagram.com/krishnainternationalaligarh/" },
    { label: "YouTube", url: "https://www.youtube.com/@krishnainternationalschoo4378" },
  ],
};
