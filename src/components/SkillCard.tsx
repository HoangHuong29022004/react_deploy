import { motion } from 'framer-motion'

interface SkillCardProps {
  category: string;
  skills: Array<{ name: string; level: number }>;
  index: number;
}

export function SkillCard({ category, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-xl transform transition-all duration-300 hover:shadow-2xl"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize">
        {category}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
            className="flex items-center gap-2"
          >
            <span className="text-primary text-lg">•</span>
            <span className="text-gray-700 dark:text-gray-300 flex-1">{skill.name}</span>
            <div className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="h-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 