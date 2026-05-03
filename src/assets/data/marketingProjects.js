import secondStagePost3 from '../../components/images/marketing post/Second stage post 3.png';
import secondStagePost7 from '../../components/images/marketing post/Second stage post 7.png';
import wpPost8 from '../../components/images/marketing post/wp post 8.png';
import wpPost9 from '../../components/images/marketing post/wp post 9.png';
import wpPost10 from '../../components/images/marketing post/wp post 10.png';
import wpPost11 from '../../components/images/marketing post/wp post 11.png';
import wpPost18 from '../../components/images/marketing post/wp post 18.png';
import wpPost22 from '../../components/images/marketing post/wp post 22.png';
import emailDesign1 from '../../components/images/email design/e1.png';
import emailDesign2 from '../../components/images/email design/e2.png';
import emailDesign3 from '../../components/images/email design/e3.png';
import emailDesign4 from '../../components/images/email design/e4.png';
import emailDesign5 from '../../components/images/email design/e5..png';

export const marketingProjectsData = [
  {
    id: 'whatsjet-marketing-post',
    category: 'Marketing Campaign Posts',
    title: 'WhatsJet',
    subtitle: 'Marketing Post',
    description: 'Campaign post designs created for WhatsJet.',
    client: 'WhatsJet',
    duration: 'Campaign Project',
    role: 'Marketing Designer',
    year: '2026',
    projectLayout: 'campaign-gallery',
    galleryVariant: 'phone-mockup',
    galleryTitle: 'Post Images',
    postImages: [
      secondStagePost3,
      secondStagePost7,
      wpPost8,
      wpPost9,
      wpPost10,
      wpPost11,
      wpPost18,
      wpPost22
    ]
  },
  {
    id: 'email-designs',
    category: 'Email Campaign Design',
    title: 'Email Designs',
    subtitle: 'Email Design',
    description: 'Email campaign and newsletter designs created for brand communication and promotions.',
    client: 'WhatsJet',
    duration: 'Campaign Project',
    role: 'Marketing Designer',
    year: '2026',
    projectLayout: 'campaign-gallery',
    galleryVariant: 'email-gallery',
    postImages: [
      emailDesign1,
      emailDesign2,
      emailDesign3,
      emailDesign4,
      emailDesign5
    ]
  }
];
