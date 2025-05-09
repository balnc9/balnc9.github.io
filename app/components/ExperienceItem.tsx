'use client'

import { motion } from 'framer-motion'

interface ExperienceItemProps {
        title: string
        company: string
        period: string
        description: string[]
}

const ExperienceItem = ({ title, company, period, description }: ExperienceItemProps) => {
        return (
                <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-8"
                >
                        <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                                <p className="text-blue-600 font-medium">{company}</p>
                                <p className="text-gray-600 mb-4">{period}</p>
                                <ul className="list-disc list-inside space-y-2">
                                        {description.map((item, index) => (
                                                <li key={index} className="text-gray-700">
                                                        {item}
                                                </li>
                                        ))}
                                </ul>
                        </div>
                </motion.div>
        )
}

export default ExperienceItem 