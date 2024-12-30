import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { ContactModal } from './ContactModal'

interface MobileMenuProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  personalInfo: any;
}

export function MobileMenu({ isDarkMode, onToggleDarkMode, personalInfo }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const menuItems = [
    { to: '/', label: 'Trang chủ' },
    { to: '#about', label: 'Giới thiệu' },
    { to: '#skills', label: 'Kỹ năng' },
    { to: '/projects', label: 'Dự Án' },
    { to: '#contact', label: 'Liên hệ' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Menu"
      >
        <Bars3Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-full bg-white dark:bg-gray-900 shadow-xl z-[1000]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 px-2 py-4 overflow-y-auto">
                  {menuItems.map((item) => (
                    item.to.startsWith('#') ? (
                      <a
                        key={item.to}
                        href={item.to}
                        onClick={handleLinkClick}
                        className="block px-4 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={handleLinkClick}
                        className="block px-4 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                      >
                        {item.label}
                      </Link>
                    )
                  ))}

                  <button
                    onClick={() => {
                      setShowContactModal(true)
                      setIsOpen(false)
                    }}
                    className="w-full mt-2 px-4 py-3 text-base font-medium bg-primary text-white rounded-md hover:bg-secondary transition-colors"
                  >
                    Liên hệ ngay
                  </button>
                </nav>

                <div className="p-4 border-t dark:border-gray-800">
                  <button
                    onClick={() => {
                      onToggleDarkMode()
                      setIsOpen(false)
                    }}
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {isDarkMode ? (
                      <>
                        <SunIcon className="h-5 w-5 mr-2" />
                        Chế độ sáng
                      </>
                    ) : (
                      <>
                        <MoonIcon className="h-5 w-5 mr-2" />
                        Chế độ tối
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        personalInfo={personalInfo}
      />
    </>
  )
} 