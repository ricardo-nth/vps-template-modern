import heroBg from '@assets/images/hero-bg.jpg';
import unsplashHero from '@assets/images/unsplash-hero.jpg';
import unsplashCare1 from '@assets/images/unsplash-care-1.jpg';
import unsplashCare2 from '@assets/images/unsplash-care-2.jpg';
import unsplashCare3 from '@assets/images/unsplash-care-3.jpg';
import unsplashHealthcare1 from '@assets/images/unsplash-healthcare-1.jpg';
import unsplashHealthcare4 from '@assets/images/unsplash-healthcare-4.jpg';
import unsplashHealthcare6 from '@assets/images/unsplash-healthcare-6.jpg';
import featuredSection from '@assets/images/featured-section.jpg';
import residentialCare from '@assets/images/residential-care.jpg';
import teamPortrait from '@assets/images/team-portrait.jpg';
import serviceGeneral from '@assets/images/service-general.jpg';
import unsplashApproach2 from '@assets/images/unsplash-approach-2.jpg';

const imageRegistry = {
  'hero-bg': heroBg,
  'unsplash-hero': unsplashHero,
  'unsplash-care-1': unsplashCare1,
  'unsplash-care-2': unsplashCare2,
  'unsplash-care-3': unsplashCare3,
  'unsplash-healthcare-1': unsplashHealthcare1,
  'unsplash-healthcare-4': unsplashHealthcare4,
  'unsplash-healthcare-6': unsplashHealthcare6,
  'featured-section': featuredSection,
  'residential-care': residentialCare,
  'team-portrait': teamPortrait,
  'service-general': serviceGeneral,
  'unsplash-approach-2': unsplashApproach2,
} as const;

export type ModernImageKey = keyof typeof imageRegistry;

export function getModernImage(imageKey: string) {
  return imageRegistry[imageKey as ModernImageKey] ?? heroBg;
}
