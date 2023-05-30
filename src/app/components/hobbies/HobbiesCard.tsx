import Image from 'next/image';

const HobbiesCard = () => {
  return (
    <div className='grid px-5 sm:grid-cols-1 sm:items-center sm:justify-center sm:py-5 md:mx-auto md:grid-cols-2 md:py-3 lg:flex lg:grid-cols-3 lg:py-5 xl:grid-cols-4 xl:py-5'>
      <div className='mx-auto grid max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 sm:mx-auto sm:my-3'>
        <a href='https://www.dota2.com/home'>
          <Image
            className='aspect-w-3 aspect-h-4 w-full rounded-t-lg'
            src='/dota2.jpg'
            width={300}
            height={300}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </a>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Play Dota (Legacy)
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            As of May 10, 2023, my daughter was born. Gaming resumes when
            everything eases.
          </p>
        </div>
      </div>

      {/* Extra */}
      <div className='grid max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 sm:mx-auto sm:my-3'>
        <a href='https://www.dota2.com/home'>
          <Image
            className='aspect-w-3 aspect-h-4 h-full w-full rounded-t-lg'
            src='/read.jpg'
            width={300}
            height={300}
            alt=''
            style={{ objectFit: 'contain' }}
          />
        </a>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Read
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Read description
          </p>
        </div>
      </div>
      <div className='grid max-w-xs rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 sm:mx-auto sm:my-3'>
        <a href='#'>
          <Image
            className='aspect-w-3 aspect-h-4 h-full w-full rounded-t-lg'
            src='/code.jpg'
            width={300}
            height={300}
            alt=''
            style={{ objectFit: 'fill' }}
          />
        </a>
        <div className='p-5'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            Code
          </h5>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Code Lang
          </p>
        </div>
      </div>
    </div>
  );
};

export default HobbiesCard;
