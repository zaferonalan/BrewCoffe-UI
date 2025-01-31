import { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Menu, X } from 'lucide';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='bg-amber-950 px-4 md:px-0 fixed z-50 top-0 w-full'>
        <div className='max-w-screen-2xl mx-auto flex justify-between items-center py-2'>
            {/*! Logo Section */}
            <div className='flex items-center'>
                <img src={Logo} alt="" className='w-14 h-12' />
                <h1 className='text-2xl text-white font-cursive'>Brew Haven</h1>
            </div>
            {/*! Menu Section */}
            <nav className='md:flex hidden items-center gap-8'>
                <ul className='flex gap-8 items-center text-xl font-semibold text-white'>
                    <li className='cursor-pointer'><a href='/' className='text-white hover:text-amber-700'>Home</a></li>
                    <li className='cursor-pointer'><a href='#menu' className='text-white hover:text-amber-700'>Menu</a></li>
                    <li className='cursor-pointer'><a href='#about' className='text-white hover:text-amber-700'>About</a></li>
                    <li className='cursor-pointer'><a href='#testimonial' className='text-white hover:text-amber-700'>Testimonial</a></li>
                    <button className='bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md'>Contact</button>
                </ul>
            </nav>
            {
               open ? <X onClick={()=> setOpen(false)} className="text-white w-7 h-7 md:hidden"/>:<Menu onClick={() => setOpen(true)} className="text-white w-7 h-7 md:hidden"/> 
            }
        </div>
    </div>
  )
}

export default Navbar