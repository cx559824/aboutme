import Image from 'next/image';

export default function Block() {
  return (
    <div>
      <section className='grid grid-cols-2 gap-5 px-40 py-5 text-gray-800'>
        <Image
          src='/DemoPic.jpg'
          alt='Trendy Pants and Shoes'
          className='w-full rounded-t-lg lg:rounded-bl-lg lg:rounded-tr-none'
          width={400}
          height={400}
        />
        <div>
          <div className='my-[2rem]'>
            <h1 className='text-3xl'>Hi, I&apos;m Rodolfo</h1>
          </div>
          <p>I&apos;m your new business partner!</p>
          <p>
            My mission is to help small and medium-sized business grow by
            leveraging technology to drive growth and revenue.
          </p>
        </div>
      </section>
      <hr />
    </div>
  );
};

