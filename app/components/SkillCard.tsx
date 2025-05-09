'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
        name: string
        level: string
        icon?: React.ReactNode
}

const SkillCard = ({ name, level, icon }: SkillCardProps) => {
        return (
                <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                        {icon && <div className="mb-4 text-4xl text-blue-600">{icon}</div>}
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                        <p className="text-gray-600">{level}</p>
                </motion.div>
        )
}

export default SkillCard 