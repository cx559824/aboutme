import Image from 'next/image';

export default function Hero() {
  return (
    // <section className='relative w-full h-96 justify-center grid grid-cols-2 p-10 items-center bg-slate-600 text-white'>
    //   {/* <Image src='/hero.jpg' alt='Rodolfo' /> */}
    //   <div className='grid grid-cols-1 lg:text-center lg:justify-center lg:items-center'>
    //     {/* <h1 className='text-5xl z-10'>Rodolfo Raquion's</h1> */}
    //     <h1 className='text-5xl text-center'>Portfolio Website</h1>
    //     {/* <Image
    //       src='/DemoPic2-removebg-preview.png'
    //       className='lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-xl'
    //       alt='Rodolfo'
    //       width={500}
    //       height={500}
    //     /> */}
    //   </div>
    // </section>
    <section className=''>
      <div className='relative'>
        <div className='text-center'>
          <div className='mb-4'>
            <img
              src='/code.jpg' // Replace with the URL or path of your image
              alt='Banner Image'
              className='w-full bg-blend-overlay'
            />
          </div>

          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white drop-shadow-xl'>
            <h1 className='text-5xl'>Rodolfo R. Raquion III</h1>
            <h2 className='text-xl'>Aspiring Fullstack NextJS Developer</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
