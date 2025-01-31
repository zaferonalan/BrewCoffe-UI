
const ResponsiveMenu = ({open, setOpen}) => {
  return (
    <div className={`${open ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 flex h-secren w-[75%] flex-col justify-between bg-amber-950 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}>
        <div>
            <nav className="mt-12">
                <ul className='flex flex-col gap-8 items-center text-xl font-semibold text-white'>
                    <li className='cursor-pointer'><a href='/' className='text-white hover:text-amber-700'>Home</a></li>
                    <li className='cursor-pointer'><a href='#menu' className='text-white hover:text-amber-700'>Menu</a></li>
                    <li className='cursor-pointer'><a href='#about' className='text-white hover:text-amber-700'>About</a></li>
                    <li className='cursor-pointer'><a href='#testimonial' className='text-white hover:text-amber-700'>Testimonial</a></li>
                    <button className='bg-amber-800 text-white hover:bg-amber-900 px-3 py-1 rounded-md'> <a href="#contact">Contact</a></button>
                </ul>
            </nav>
        </div>
        <div>
            <h1 className="text-white">Made with ❤️ by Zafer</h1>
        </div>
    </div>
  )
}

export default ResponsiveMenu