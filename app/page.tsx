'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
        EnvelopeIcon,
        GithubIcon,
        LinkedinIcon
} from '@heroicons/react/24/outline'
import Navigation from './components/Navigation'
import ExperienceItem from './components/ExperienceItem'
import SkillCard from './components/SkillCard'
import { experience, skills, about } from './data/portfolio'

export default function Home() {
        const [ref, inView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
        })

        return (
                <>
                        <Navigation />
                        <main className="min-h-screen">
                                {/* Hero Section */}
                                <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 text-white">
                                        <div className="text-center">
                                                <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.8 }}
                                                >
                                                        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
                                                                <Image
                                                                        src="/_DSF0143.JPEG"
                                                                        alt="Matthew Chin"
                                                                        fill
                                                                        className="object-cover"
                                                                        priority
                                                                />
                                                        </div>
                                                        <h1 className="text-5xl font-bold mb-4">Matthew Chin</h1>
                                                        <p className="text-xl opacity-90">Software Developer</p>
                                                </motion.div>
                                        </div>
                                </section>

                                {/* About Section */}
                                <section id="about" className="py-20 bg-white">
                                        <div className="container mx-auto px-4">
                                                <motion.div
                                                        ref={ref}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                                        transition={{ duration: 0.8 }}
                                                >
                                                        <h2 className="text-3xl font-bold text-center mb-8">{about.title}</h2>
                                                        <div className="max-w-3xl mx-auto text-lg">
                                                                <p className="mb-4">{about.description}</p>
                                                        </div>
                                                </motion.div>
                                        </div>
                                </section>

                                {/* Experience Section */}
                                <section id="experience" className="py-20 bg-gray-50">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                                                <div className="max-w-4xl mx-auto">
                                                        {experience.map((exp, index) => (
                                                                <ExperienceItem key={index} {...exp} />
                                                        ))}
                                                </div>
                                        </div>
                                </section>

                                {/* Skills Section */}
                                <section id="skills" className="py-20 bg-white">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
                                                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                                                        {skills.map((skill, index) => (
                                                                <SkillCard key={index} {...skill} />
                                                        ))}
                                                </div>
                                        </div>
                                </section>

                                {/* Contact Section */}
                                <section id="contact" className="py-20 bg-gray-50">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
                                                <div className="max-w-2xl mx-auto flex justify-center space-x-8">
                                                        <a
                                                                href="https://github.com/yourusername"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                                                        >
                                                                <GithubIcon className="w-6 h-6" />
                                                                <span>GitHub</span>
                                                        </a>
                                                        <a
                                                                href="https://linkedin.com/in/yourusername"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                                                        >
                                                                <LinkedinIcon className="w-6 h-6" />
                                                                <span>LinkedIn</span>
                                                        </a>
                                                        <a
                                                                href="mailto:your.email@example.com"
                                                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                                                        >
                                                                <EnvelopeIcon className="w-6 h-6" />
                                                                <span>Email</span>
                                                        </a>
                                                </div>
                                        </div>
                                </section>
                        </main>
                </>
        )
} 