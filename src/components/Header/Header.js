
import { Link } from 'react-router-dom';


const Header = () => {
    // const [open, setOpen] = useState(false)
    return (
        <nav className='md:flex justify-between items-center py-4 px-12 bg-slate-400'>
            <div>
                <Link className='text-xl text-white' to='/'><h1>The Meal DB</h1></Link>
            </div>
            <div className='text-xl md:flex justify-center'>
                {/* <div onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div> */}
                <Link className='mr-5 text-white' to='/'>Home</Link>
                <Link className='mr-5 text-white' to='/about'>About</Link>
                <Link className='mr-5 text-white' to='/resturent'>Resturent</Link>
                <Link className='mr-5 text-white' to='/contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default Header;