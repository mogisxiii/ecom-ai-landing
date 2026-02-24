import { useEffect, useRef, useState } from "react"
import {
  Database,
  Brain,
  RefreshCw,
  TrendingUp,
} from "lucide-react"

const steps = [
  {
    id: "01",
    title: "Phân tích dữ liệu thực tế doanh nghiệp",
    description:
      "Làm việc trực tiếp trên cơ sở dữ liệu khách hàng và lịch sử chốt đơn để hiểu chính xác cách doanh nghiệp bạn tạo ra lợi nhuận.",
    icon: Database,
  },
  {
    id: "02",
    title: "Xây dựng AI dựa trên 'DNA bán hàng' của bạn",
    description:
      "Huấn luyện bot từ kịch bản thành công và logic xử lý phản đối thực tế của đội sales.",
    icon: Brain,
  },
  {
    id: "03",
    title: "Tối ưu liên tục theo dữ liệu phát sinh",
    description:
      "Hệ thống học từ đơn mới, đơn thất bại và hành vi khách hàng để nâng cao tỷ lệ chuyển đổi.",
    icon: RefreshCw,
  },
  {
    id: "04",
    title: "Tăng chuyển đổi – Giảm nhân lực – Tăng lợi nhuận",
    description:
      "Khi vận hành ổn định, hiệu suất tăng lên, chi phí giảm xuống và lợi nhuận tăng bền vững.",
    icon: TrendingUp,
  },
]

export default function ProcessSection() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-soft py-28"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="w-[600px] h-[600px] bg-brand-100 rounded-full blur-3xl absolute -top-40 left-1/2 -translate-x-1/2" />
      </div>

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-section font-display bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-premium-600">
            Quy trình tạo lợi nhuận bền vững cho doanh nghiệp của bạn
          </h2>

          <p className="text-slate-600 text-lg mt-6">
            Nova AI Team xây dựng hệ thống tăng trưởng dựa 100% trên dữ liệu thực tế của chính doanh nghiệp bạn.
          </p>
        </div>

        {/* WRAPPER để chứa line */}
        <div className="relative">

          {/* Animated Line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-200">
            <div
              className={`h-full bg-gradient-to-r from-brand-500 to-profit-500 transition-all duration-1000 ${
                visible ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* STEPS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isLast = index === 3

              return (
                <div
                  key={step.id}
                  className={`
                    relative
                    bg-white/80
                    backdrop-blur-sm
                    border border-white
                    rounded-3xl
                    p-8
                    shadow-soft
                    transition-all duration-500
                    hover:-translate-y-3
                    hover:shadow-strong
                    ${visible ? "animate-fadeUp" : "opacity-0"}
                  `}
                  style={{
                    animationDelay: visible ? `${index * 150}ms` : "0ms",
                  }}
                >
                  {/* Watermark Number (background only) */}
                  <span className="
                    absolute
                    bottom-4
                    right-6
                    text-[80px]
                    font-bold
                    text-brand-100
                    opacity-40
                    pointer-events-none
                    select-none
                  ">
                    {step.id}
                  </span>

                  {/* ICON */}
                  <div className="mb-6 relative z-10">
                    <div
                      className={`
                        w-12 h-12
                        rounded-xl
                        flex items-center justify-center
                        transition-all duration-300
                        ${
                          isLast
                            ? "bg-profit-50"
                            : "bg-brand-50"
                        }
                      `}
                    >
                      <Icon
                        size={22}
                        className={`transition-transform duration-300 ${
                          isLast
                            ? "text-profit-600"
                            : "text-brand-600"
                        }`}
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-4 relative z-10">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}