import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'

interface MobileMenuProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function MobileMenu({ isDarkMode, onToggleDarkMode }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isOpen])

  const menuItems = [
    { href: '#home', label: 'Trang chủ' },
    { href: '#about', label: 'Giới thiệu' },
    { href: '#skills', label: 'Kỹ năng' },
    { href: '#projects', label: 'Dự án' },
    { href: '#contact', label: 'Liên hệ' }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 -mr-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-full bg-white dark:bg-gray-900 shadow-xl z-50"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <nav className="flex-1 px-2 py-4 overflow-y-auto">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block px-4 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="p-4 border-t dark:border-gray-800">
                  <button
                    onClick={onToggleDarkMode}
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
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
    </>
  )
} 