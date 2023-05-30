import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='mx-auto flex w-full flex-row items-center justify-between pb-5 pt-5 sm:px-2 md:px-10 xl:px-20'>
      <ul className='flex flex-row gap-4 text-black'>
        <Link href='/about' className='cursor-pointer'>
          About Me
        </Link>
        <Link href='/hobbies' className='cursor-pointer'>
          Hobbies
        </Link>
      </ul>
      <button className='primary btn rounded-full'>Contact Me</button>
    </nav>
  );
};

export default Navbar;
