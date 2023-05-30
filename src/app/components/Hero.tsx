import Image from 'next/image';

export default function Hero() {
  return (
    <section className=''>
      <div className='relative'>
        <div className='text-center '>
          <Image
            src='/code2.jpg' // Replace with the URL or path of your image
            alt='Banner Image'
            className='w-full bg-blend-overlay shadow-lg'
            width={500}
            height={500}
          />

          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-xl'>
            <h1 className='text-5xl'>Rodolfo R. Raquion III</h1>
            <h2 className='text-xl'>Aspiring Fullstack NextJS Developer</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
