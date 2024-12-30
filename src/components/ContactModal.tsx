import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: {
    phone: string;
    facebook: string;
    zalo?: string;
  };
}

export function ContactModal({ isOpen, onClose, personalInfo }: ContactModalProps) {
  // Prevent body scroll when modal is open
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

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl relative"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    Liên Hệ Với Tôi
                  </h3>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Facebook */}
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <div className="h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-blue-500 rounded-full">
                    <svg className="h-5 sm:h-6 w-5 sm:w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Facebook</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Phạm Hoàng Hương</div>
                  </div>
                </a>

                {/* Zalo */}
                <a
                  href={`https://zalo.me/${personalInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <div className="h-10 sm:h-12 w-10 sm:w-12 flex items-center justify-center bg-blue-500 rounded-full">
                    <span className="text-lg sm:text-xl text-white font-bold">Z</span>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Zalo</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{personalInfo.phone}</div>
                  </div>
                </a>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={onClose}
                  className="w-full px-4 py-2 text-sm sm:text-base bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
} 