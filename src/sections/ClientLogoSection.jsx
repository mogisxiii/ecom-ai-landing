export default function ClientLogoSection() {
  const clients = [
    "TechCorp",
    "SmartRetail",
    "Nova Group",
    "EcomPro",
    "FutureAI",
  ]

  return (
    <section className="py-14 md:py-16 bg-[#0b1120]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-8">
          Doanh nghiệp đã triển khai
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 items-center">

          {clients.map((client, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition duration-300 text-gray-400 font-semibold text-base md:text-lg"
            >
              {client}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}