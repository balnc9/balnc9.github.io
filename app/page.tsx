'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {
        EnvelopeIcon,
        GithubIcon,
        LinkedinIcon,
        PhoneIcon
} from '@heroicons/react/24/outline'
import Navigation from './components/Navigation'
import ExperienceItem from './components/ExperienceItem'
import SkillCard from './components/SkillCard'
import { experience, skills, about, projects, education, certifications } from './data/portfolio'

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
                                                        <p className="text-xl opacity-90">Computer Science Student & Software Developer</p>
                                                        <div className="mt-6 flex justify-center space-x-4">
                                                                <a
                                                                        href="mailto:matthewlchin1@gmail.com"
                                                                        className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                                                                >
                                                                        <EnvelopeIcon className="w-5 h-5" />
                                                                        <span>matthewlchin1@gmail.com</span>
                                                                </a>
                                                                <a
                                                                        href="tel:7816974238"
                                                                        className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                                                                >
                                                                        <PhoneIcon className="w-5 h-5" />
                                                                        <span>781-697-4238</span>
                                                                </a>
                                                        </div>
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

                                {/* Education Section */}
                                <section id="education" className="py-20 bg-gray-50">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
                                                <div className="max-w-4xl mx-auto">
                                                        <div className="bg-white rounded-lg shadow-md p-6">
                                                                <h3 className="text-xl font-bold text-gray-900">{education.school}</h3>
                                                                <p className="text-blue-600 font-medium">{education.degree}</p>
                                                                <p className="text-gray-600 mb-4">{education.graduation}</p>
                                                                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                                                                <ul className="list-disc list-inside space-y-1">
                                                                        {education.coursework.map((course, index) => (
                                                                                <li key={index} className="text-gray-700">{course}</li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                {/* Experience Section */}
                                <section id="experience" className="py-20 bg-white">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
                                                <div className="max-w-4xl mx-auto">
                                                        {experience.map((exp, index) => (
                                                                <ExperienceItem key={index} {...exp} />
                                                        ))}
                                                </div>
                                        </div>
                                </section>

                                {/* Projects Section */}
                                <section id="projects" className="py-20 bg-gray-50">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
                                                <div className="max-w-4xl mx-auto grid gap-8">
                                                        {projects.map((project, index) => (
                                                                <motion.div
                                                                        key={index}
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        whileInView={{ opacity: 1, y: 0 }}
                                                                        transition={{ duration: 0.5 }}
                                                                        viewport={{ once: true }}
                                                                        className="bg-white rounded-lg shadow-md p-6"
                                                                >
                                                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                                                        <p className="text-gray-700 mb-4">{project.description}</p>
                                                                        <div className="mb-4">
                                                                                <h4 className="font-semibold mb-2">Technologies:</h4>
                                                                                <div className="flex flex-wrap gap-2">
                                                                                        {project.technologies.map((tech, i) => (
                                                                                                <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                                                                        {tech}
                                                                                                </span>
                                                                                        ))}
                                                                                </div>
                                                                        </div>
                                                                        <div>
                                                                                <h4 className="font-semibold mb-2">Key Features:</h4>
                                                                                <ul className="list-disc list-inside space-y-1">
                                                                                        {project.features.map((feature, i) => (
                                                                                                <li key={i} className="text-gray-700">{feature}</li>
                                                                                        ))}
                                                                                </ul>
                                                                        </div>
                                                                </motion.div>
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

                                {/* Certifications Section */}
                                <section id="certifications" className="py-20 bg-gray-50">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
                                                <div className="max-w-4xl mx-auto">
                                                        <div className="bg-white rounded-lg shadow-md p-6">
                                                                <ul className="space-y-3">
                                                                        {certifications.map((cert, index) => (
                                                                                <li key={index} className="flex items-center space-x-2">
                                                                                        <span className="text-blue-600">•</span>
                                                                                        <span className="text-gray-700">{cert}</span>
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                {/* Contact Section */}
                                <section id="contact" className="py-20 bg-white">
                                        <div className="container mx-auto px-4">
                                                <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
                                                <div className="max-w-2xl mx-auto flex justify-center space-x-8">
                                                        <a
                                                                href="https://github.com/balnc9"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                                                        >
                                                                <GithubIcon className="w-6 h-6" />
                                                                <span>GitHub</span>
                                                        </a>
                                                        <a
                                                                href="https://linkedin.com/in/matthewleechin"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                                                        >
                                                                <LinkedinIcon className="w-6 h-6" />
                                                                <span>LinkedIn</span>
                                                        </a>
                                                        <a
                                                                href="mailto:matthewlchin1@gmail.com"
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