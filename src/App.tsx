import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { SunIcon, MoonIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Section } from './components/Section'
import { ParticlesBackground } from './components/ParticlesBackground'
import { MobileMenu } from './components/MobileMenu'
import { ProjectsPage } from './components/ProjectsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { SkillCard } from './components/SkillCard'
import { ContactModal } from './components/ContactModal'
import { VideoModal } from './components/VideoModal'

interface Interest {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface PersonalInfo {
  name: string;
  title: string;
  dob: string;
  education: string;
  workplace: string;
  hometown: string;
  phone: string;
  email: string;
  facebook: string;
  bankAccount: string;
  bio: string;
  interests: Interest[];
  timeline: TimelineItem[];
}

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const personalInfo: PersonalInfo = {
    name: "Phạm Hoàng Hương",
    title: "PHP Developer",
    dob: "29/02/2004",
    education: "FPT Polytechnic",
    workplace: "FPT",
    hometown: "Quảng Ngãi",
    phone: "0932507102",
    email: "phamhoanghuong.dev@gmail.com",
    facebook: "https://www.facebook.com/PhamHoangHuong.k4",
    bankAccount: "2902090904",
    bio: "Backend Developer với đam mê tạo ra những giải pháp phần mềm tối ưu và hiệu quả. Hiện đang học tập tại FPT Polytechnic và làm việc tại FPT.",
    interests: [
      {
        icon: "💻",
        title: "Lập Trình",
        description: "Đam mê tạo ra các ứng dụng và giải pháp phần mềm"
      },
      {
        icon: "⚽",
        title: "Bóng Đá",
        description: "Thường xuyên chơi bóng đá để rèn luyện sức khỏe"
      },
      {
        icon: "📚",
        title: "Học Hỏi",
        description: "Luôn tìm tòi và học hỏi công nghệ mới"
      }
    ],
    timeline: [
      {
        year: "2022 - Hiện tại",
        title: "PHP Developer",
        company: "FPT Software",
        description: "Phát triển và bảo trì các ứng dụng web sử dụng PHP, Laravel và các công nghệ liên quan"
      },
      {
        year: "2021 - 2024",
        title: "Sinh viên",
        company: "FPT Polytechnic",
        description: "Chuyên ngành Phát triển phần mềm, tập trung vào Web Development"
      }
    ]
  }

  const skills = {
    backend: [
      { name: 'PHP', level: 90 },
      { name: 'Laravel', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'WordPress', level: 80 }
    ],
    frontend: [
      { name: 'React', level: 80 },
      { name: 'Vue.js', level: 75 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 85 }
    ],
    database: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 85 }
    ]
  }

  const featuredProjects = [
    {
      title: "Website Bán Quần Áo",
      description: "Website thương mại điện tử chuyên về thời trang nữ cao cấp. Tích hợp đầy đủ tính năng quản lý và thanh toán trực tuyến.",
      image: "/projects/fashion.jpg",
      video: "/videos/fashion-demo.mp4",
      tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      link: "#",
      github: "#"
    },
    {
      title: "Website Thời Trang Java Spring",
      description: "Hệ thống bán hàng thời trang hiện đại được xây dựng trên nền tảng Java Spring Boot với giao diện responsive.",
      image: "/projects/fashion-spring.jpg",
      tech: ["Java Spring", "MySQL", "Thymeleaf", "Bootstrap"],
      link: "#",
      github: "#"
    },
    {
      title: "Website Bán Tennis",
      description: "Nền tảng thương mại điện tử chuyên về tennis với tính năng đặt sân và quản lý lịch đặt thông minh.",
      image: "/projects/tennis.jpg",
      tech: ["PHP", "MySQL", "Ajax", "JavaScript"],
      link: "#",
      github: "#"
    }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300 relative">
        <ParticlesBackground />
        
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50">
          <nav className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50">
            <div className="container">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link 
                    to="/" 
                    className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  >
                    PHH
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    Trang chủ
                  </Link>
                  <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    Giới thiệu
                  </a>
                  <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    Kỹ năng
                  </a>
                  <Link 
                    to="/projects" 
                    className="nav-link interactive"
                  >
                    Dự Án
                  </Link>
                  <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                    Liên hệ
                  </a>
                  <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {isDarkMode ? (
                      <SunIcon className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <MoonIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                  <MobileMenu 
                    isDarkMode={isDarkMode}
                    onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
                  />
                </div>
              </div>
            </div>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <Section id="home" className="pt-24 md:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center md:text-left space-y-6"
                    >
                      <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                          Phạm Hoàng Hương
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                          <TypeAnimation
                            sequence={[
                              'PHP Developer',
                              1000,
                              'Backend Developer',
                              1000,
                              'Full Stack Developer',
                              1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-primary"
                            repeat={Infinity}
                          />
                        </h2>
                      </div>
                      <p className="text-lg text-gray-600 dark:text-gray-300">
                        Backend Developer with passion for creating elegant solutions
                      </p>
                      <div className="flex gap-4">
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Contact Me
                        </motion.a>
                        <motion.a
                          href="#projects"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
                        >
                          View Projects
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Avatar */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="relative w-full max-w-sm mx-auto md:max-w-md"
                    >
                      {/* Animated background circles */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl"
                      />
                      
                      {/* Floating avatar container */}
                      <motion.div
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [-5, 5, -5]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="relative"
                      >
                        {/* Glowing border */}
                        <motion.div
                          animate={{
                            boxShadow: [
                              '0 0 20px rgba(100, 108, 255, 0.4)',
                              '0 0 60px rgba(100, 108, 255, 0.6)',
                              '0 0 20px rgba(100, 108, 255, 0.4)'
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="aspect-square rounded-full bg-gradient-to-r from-primary to-secondary p-1"
                        >
                          {/* Avatar image with hover effect */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative rounded-full overflow-hidden bg-white dark:bg-gray-800"
                          >
                            <img
                              src="/avatar.jpg"
                              alt="Profile"
                              className="w-full h-full object-cover rounded-full"
                            />
                            
                            {/* Shine effect on hover */}
                            <motion.div
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '200%' }}
                              transition={{ duration: 1.5 }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                            />
                          </motion.div>
                        </motion.div>

                        {/* Floating icons around avatar */}
                        {['💻', '🚀', '⚡', '🎯'].map((emoji, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1,
                              y: [-20, 20, -20],
                              x: Math.sin(index) * 20
                            }}
                            transition={{
                              duration: 3,
                              delay: index * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute text-2xl"
                            style={{
                              top: `${Math.sin(index * (Math.PI / 2)) * 100 + 50}%`,
                              left: `${Math.cos(index * (Math.PI / 2)) * 100 + 50}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          >
                            {emoji}
                          </motion.div>
                        ))}

                        {/* Particle effects */}
                        <motion.div className="absolute inset-0">
                          {[...Array(8)].map((_, index) => (
                            <motion.div
                              key={index}
                              initial={{ 
                                opacity: 0,
                                scale: 0,
                                x: 0,
                                y: 0
                              }}
                              animate={{ 
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                                x: Math.cos(index * Math.PI / 4) * 100,
                                y: Math.sin(index * Math.PI / 4) * 100,
                              }}
                              transition={{
                                duration: 2,
                                delay: index * 0.2,
                                repeat: Infinity,
                                ease: "easeOut"
                              }}
                              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary"
                            />
                          ))}
                        </motion.div>
                      </motion.div>

                      {/* Tech stack orbit */}
                      <div className="absolute inset-0">
                        {['PHP', 'React', 'Laravel', 'Vue.js'].map((tech, index) => (
                          <motion.div
                            key={tech}
                            animate={{
                              rotate: 360
                            }}
                            transition={{
                              duration: 20,
                              delay: index * 2,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute inset-0"
                            style={{
                              transformOrigin: 'center'
                            }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-lg text-primary text-sm font-medium"
                            >
                              {tech}
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Section>

              {/* About Section */}
              <AboutSection personalInfo={personalInfo} />

              {/* Skills Section */}
              <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                    Kỹ Năng Chuyên Môn
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], categoryIndex) => (
                      <SkillCard
                        key={category}
                        category={category}
                        skills={items}
                        index={categoryIndex}
                      />
                    ))}
                  </div>
                </motion.div>
              </Section>

              {/* Featured Projects Section */}
              <Section id="projects" className="bg-white dark:bg-gray-900">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                      Dự Án Nổi Bật
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                      Một số dự án tiêu biểu của tôi
                    </p>
                    <div className="flex justify-center">
                      <Link
                        to="/projects"
                        className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                      >
                        Xem tất cả dự án
                        <svg
                          className="w-5 h-5 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                      <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index}
                        personalInfo={personalInfo}
                      />
                    ))}
                  </div>
                </motion.div>
              </Section>

              {/* Footer */}
              <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">PHH</h3>
                      <p className="text-gray-400">
                        Backend Developer với đam mê tạo ra những giải pháp phần mềm tối ưu và hiệu quả.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Liên Kết</h4>
                      <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-primary transition-colors">Trang chủ</a></li>
                        <li><a href="#about" className="hover:text-primary transition-colors">Giới thiệu</a></li>
                        <li><a href="#skills" className="hover:text-primary transition-colors">Kỹ năng</a></li>
                        <li><a href="#projects" className="hover:text-primary transition-colors">Dự án</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Liên Hệ</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <EnvelopeIcon className="w-5 h-5" />
                          <span>{personalInfo.email}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <PhoneIcon className="w-5 h-5" />
                          <span>{personalInfo.phone}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <MapPinIcon className="w-5 h-5" />
                          <span>{personalInfo.hometown}</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <a 
                            href="https://www.facebook.com/PhamHoangHuong.k4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            Facebook
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p>&copy; 2024 PHH. All rights reserved.</p>
                  </div>
                </div>
              </footer>
            </>
          } />
          
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </div>
  )
}

function AboutSection({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <Section id="about" className="relative z-10 py-12 sm:py-16 md:py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6 sm:space-y-8 md:space-y-12"
      >
        {/* Tiêu đề */}
        <div className="text-center space-y-3 sm:space-y-4 px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Về Tôi
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 max-w-4xl mx-auto px-3 sm:px-4">
          {/* Thông tin cá nhân */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
              Thông Tin Cá Nhân
            </h3>
            <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-sm sm:text-base">
              <InfoRow icon="🎂" label="Ngày sinh" value={personalInfo.dob} />
              <InfoRow icon="🏫" label="Trường" value={personalInfo.education} />
              <InfoRow icon="💼" label="Nơi làm việc" value={personalInfo.workplace} />
              <InfoRow icon="🏠" label="Quê quán" value={personalInfo.hometown} />
              <InfoRow icon="📧" label="Email" value={personalInfo.email} />
              <InfoRow icon="📱" label="Điện thoại" value={personalInfo.phone} />
            </div>
          </motion.div>

          {/* Sở thích và đam mê */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 md:mb-6">
              Sở Thích & Đam Mê
            </h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {personalInfo.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">
                    {interest.icon}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                      {interest.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <span className="text-base sm:text-lg md:text-xl flex-shrink-0">{icon}</span>
      <div className="min-w-0 flex-1">
        <span className="text-gray-500 dark:text-gray-400">{label}:</span>
        <span className="ml-1 sm:ml-2 text-gray-900 dark:text-white font-medium truncate">
          {value}
        </span>
      </div>
    </div>
  )
}

// ProjectCard component for featured projects
function ProjectCard({ project, index, personalInfo }: { 
  project: { 
    title: string; 
    description: string; 
    image: string; 
    video?: string;
    tech: string[];
    link: string;
    github: string;
  };
  index: number;
  personalInfo: PersonalInfo;
}) {
  const [showContactModal, setShowContactModal] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
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
              onClick={() => setShowContactModal(true)}
              className="flex-1 px-4 py-2 border border-primary text-primary text-center rounded-lg hover:bg-primary hover:text-white transition-colors z-10"
            >
              Liên Hệ
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Modals */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        personalInfo={personalInfo}
      />
      
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

export default App
