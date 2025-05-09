'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
        const [isScrolled, setIsScrolled] = useState(false)

        useEffect(() => {
                const handleScroll = () => {
                        setIsScrolled(window.scrollY > 50)
                }

                window.addEventListener('scroll', handleScroll)
                return () => window.removeEventListener('scroll', handleScroll)
        }, [])

        return (
                <motion.header
                        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                                }`}
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                >
                        <nav className="container mx-auto px-4 py-4">
                                <ul className="flex justify-center space-x-8">
                                        <li>
                                                <a
                                                        href="#about"
                                                        className={`text-lg font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                                                                }`}
                                                >
                                                        About
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        href="#experience"
                                                        className={`text-lg font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                                                                }`}
                                                >
                                                        Experience
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        href="#skills"
                                                        className={`text-lg font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                                                                }`}
                                                >
                                                        Skills
                                                </a>
                                        </li>
                                        <li>
                                                <a
                                                        href="#contact"
                                                        className={`text-lg font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                                                                }`}
                                                >
                                                        Contact
                                                </a>
                                        </li>
                                </ul>
                        </nav>
                </motion.header>
        )
}

export default Navigation 