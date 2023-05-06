import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GiHamburgerMenu, GrClose, CgProfile, BsSearch, IoCloseOutline, HiOutlineLogout, FaUserEdit, IoHelpCircleSharp, BiStreetView } from 'react-icons/all'
const Navbar = () => {
    const [shoMore, setShowMore] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    // For creating the varinets
    const navVartients = {
        hidden: {
            y: '-10vh',
            opacity: 0,

        },
        visible: {
            y: 0,
            opacity: 1,
            transiton: {
                delay: 0.3,
                duration: 4,
                type: "tween",

                mass: 2,
                // damping:8 ,
                when: "beforeChildren",
                // staggerChildren :0.4


            }
        }
    }

    return (
        <AnimatePresence >
            <motion.div className=' z-0'
                variants={navVartients}
                animate="visible"
                initial="hidden"

            // transition={{}}
            // animate={{

            // }}

            >
                <nav className='flex flex-col items-center  '


                >
                    {/* for nav contain */}
                    <div className="pt-2 px-2 xs:px-2 md:px-4 lg:px-10 nav-bg flex flex-row w-full relative justify-between z-[2] h-16 items-center"


                    >
                        <motion.button onClick={() => setShowMore((prev) => !prev)}
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}

                        >
                            {shoMore ? <IoCloseOutline className='text-3xl text-white ' /> : <GiHamburgerMenu className='text-3xl text-white' />}

                        </motion.button>

                        <h2 className='font-semibold font-mono text-3xl text-white'>ET Class</h2>
                        <motion.span initial={{ scale: 1 }} whileHover={{ scale: [1.1, 1.2, 1.3, 1.1, 1.2], transition: { delay: 0.2, yoyo: Infinity } }}
                        // transition={{ }} 
                        > <CgProfile className='text-3xl text-white cursor-pointer ' onClick={() => setShowProfile((prev) => !prev)} /> </motion.span>
                        {/* for Profile detail */}
                        <AnimatePresence  >
                            {showProfile && (
                                <motion.ul className=" absolute right-2 top-14 list-none grid grid-cols divide-y bg-white px-3 py-2 rounded-md shadow-lg z-[50]  "
                                    initial={{ x: '10vw' }}
                                    animate={{ x: 0, transition: { duration: 1 } }}
                                    transiton={{ duration: 1 }}
                                    exit={{ x: '50vw', transition: { duration: 0.7 } }}
                                >

                                    <li className='z-[50]'>IMG</li>
                                    <li><Link to="/view" className='hover:text-cyan-500'  ><BiStreetView className='inline' /> View Profile</Link></li>
                                    <li><Link to="/edituser" className='hover:text-cyan-500'  ><FaUserEdit className='inline' /> Edit Profile</Link></li>
                                    <li><Link to="/logout" className='hover:text-cyan-500' ><span><HiOutlineLogout className='inline' /> </span>LogOut </Link></li>
                                    <li><Link to="/help" className='hover:text-cyan-500' ><IoHelpCircleSharp className='inline text-lg' />Help</Link></li>
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                    {/* for search box */}
                    <AnimatePresence >
                        {shoMore && (
                            <motion.div className=" bg-slate-200 shadow-lg w-full flex justify-center items-center border-none  rounded-b-lg"
                                animate={{ y: 0,scale:1 ,
                                     transition: { delay: 0.1, duration: 1,
                                         type: "tween" ,when:"beforeChildren" } }}
                                         initial={{ y: "-10vh" ,scale:0 }}
                                         exit={{ y: "-10vh",scale:0  ,transition:{delay:0.2 , duration:1.3} }}

                            >
                                <motion.div className="relative"
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ delay: 0.3, duration: 1 }}
                                >
                                    <div className="flex flex-row items-center my-4  p-1 rounded-md z-20 ">
                                        <input type="text" className='bg-transparent outline-none z-50 p-2  focus-visible:text-gray-400   focus-visible:backdrop-blur-sm ' placeholder='Search...' /><BsSearch className='z-10 text-white hover:shadow-lg hover:scale-125' /></div>

                                    {/* <div className="bg-green-100  blur-xl absolute left-0 top-0 w-full  z-[0] h-[90%]" /> */}
                                </motion.div>
                            </motion.div>)
                        }
                    </AnimatePresence>


                </nav>
            </motion.div>
        </AnimatePresence>
    )
}

export default Navbar
