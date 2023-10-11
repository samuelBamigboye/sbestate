import { FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md '>
      <div className='flex flex-wrap p-2 items-center justify-between max-w-6xl mx-auto'>
        <Link to='/'>
          <img src="./src/assets/sbstatelogoblack.png" alt="SbEstate" className='h-12 w-12' />
        </Link>
      <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
          <input type="text" placeholder='Search house...' className='bg-transparent focus:outline-none w-26 sm:w-64' />
          <FaSearch className='h-4 w-4 text-slate-600' />
        </form>
        <ul className='flex gap-3'>
          <Link to='/'>
          <li className='hidden sm:inline text-slate-600'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline text-slate-600'>About</li>
          </Link>
          <Link to='/sign-in'>
          <li className='text-slate-600'>Sign In</li>
          </Link>
        </ul>

      </div>
    </header>
  )
}
