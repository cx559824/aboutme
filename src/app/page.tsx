import Image from 'next/image';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import HobbiesCard from './components/hobbies/HobbiesCard';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <HobbiesCard />
    </>
  );
}
