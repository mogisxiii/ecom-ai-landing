import siteConfig from "../config/siteConfig"
import { motion } from "framer-motion"
import {
  FaShieldAlt,
  FaHeart,
  FaUserGraduate,
  FaAppleAlt,
} from "react-icons/fa"

export default function SolutionSection() {
  const { whyUs } = siteConfig.sections
  if (!whyUs?.enabled) return null

  const icons = [
    <FaShieldAlt />,
    <FaHeart />,
    <FaUserGraduate />,
    <FaAppleAlt />,
  ]

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
         <h2
  className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
  style={{
    backgroundImage: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
  }}
>
            {whyUs.title}
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            {whyUs.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {whyUs.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="
                group
                bg-white
                p-10
                rounded-2xl
                border border-gray-200
                shadow-sm
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                transition-all duration-500
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  flex items-center justify-center
                  rounded-xl
                  bg-gray-900
                  text-white text-lg
                  mb-8
                  transition-all duration-300
                  group-hover:bg-gray-800
                "
              >
                {icons[index % icons.length]}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-gray-900 mb-4 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}