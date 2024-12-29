import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from './Section'
import { ContactModal } from './ContactModal'
import { VideoModal } from './VideoModal'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  video?: string;
  tech: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'desktop';
}

interface PersonalInfo {
  phone: string;
  facebook: string;
  zalo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Website Bán Quần Áo",
    description: "Website thương mại điện tử chuyên về thời trang nữ cao cấp. Tích hợp đầy đủ tính năng quản lý và thanh toán trực tuyến.",
    image: "/projects/fashion.jpg",
    video: "/videos/fashion-demo.mp4",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    features: [
      "Quản lý sản phẩm và danh mục",
      "Giỏ hàng và thanh toán",
      "Quản lý đơn hàng",
      "Tìm kiếm và lọc sản phẩm",
      "Đăng nhập/Đăng ký thành viên"
    ],
    category: 'web'
  },
  {
    id: 2,
    title: "Website Bán Tennis",
    description: "Nền tảng thương mại điện tử chuyên về tennis với tính năng đặt sân và quản lý lịch đặt thông minh.",
    image: "/projects/tennis.jpg",
    tech: ["PHP", "MySQL", "Ajax", "JavaScript"],
    features: [
      "Quản lý sản phẩm tennis",
      "Đặt lịch sân tennis",
      "Quản lý lịch đặt sân",
      "Thanh toán online",
      "Thống kê doanh thu"
    ],
    category: 'web'
  },
  {
    id: 3,
    title: "Website Thời Trang Java Spring",
    description: "Hệ thống bán hàng thời trang hiện đại được xây dựng trên nền tảng Java Spring Boot với giao diện responsive.",
    image: "/projects/fashion-spring.jpg",
    tech: ["Java Spring", "MySQL", "Thymeleaf", "Bootstrap"],
    features: [
      "Quản lý sản phẩm thời trang",
      "Giỏ hàng và thanh toán",
      "Quản lý đơn hàng",
      "Thống kê báo cáo",
      "Responsive design"
    ],
    category: 'web'
  }
]

const personalInfo: PersonalInfo = {
  phone: "0932507102",
  facebook: "https://www.facebook.com/PhamHoangHuong.k4",
  zalo: "0932507102"
}

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showContactModal, setShowContactModal] = useState(false)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <Section id="projects" className="bg-white dark:bg-gray-900 pt-20">
      <div className="space-y-12">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Tất Cả Dự Án
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Các dự án tôi đã thực hiện trong quá trình học tập và làm việc
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-4">
          {['all', 'web', 'mobile', 'desktop'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'Tất cả' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onContact={() => setShowContactModal(true)} 
            />
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        personalInfo={personalInfo}
      />
    </Section>
  )
}

function ProjectCard({ project, onContact }: { project: Project; onContact: () => void }) {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {/* Project Preview */}
        <div className="relative h-48 overflow-hidden">
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Project Info */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Tính năng chính:
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideoModal(true)}
              className="flex-1 px-4 py-2 bg-primary text-white text-center rounded-lg hover:bg-secondary transition-colors z-10"
            >
              Xem Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onContact}
              className="flex-1 px-4 py-2 border border-primary text-primary text-center rounded-lg hover:bg-primary hover:text-white transition-colors z-10"
            >
              Liên Hệ
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {project.video && (
        <VideoModal
          isOpen={showVideoModal}
          onClose={() => setShowVideoModal(false)}
          videoUrl={project.video}
        />
      )}
    </>
  )
} 