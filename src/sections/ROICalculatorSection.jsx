import { useState } from "react"

export default function ROICalculatorSection() {
  const [staff, setStaff] = useState(2)
  const [messages, setMessages] = useState(100)
  const costPerStaff = 8000000

  const monthlyCost = staff * costPerStaff
  const aiCost = 5000000
  const saving = monthlyCost - aiCost

  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, #3b82f6, #0ea5e9)`,
            }}>
          Tính toán chi phí bạn có thể tiết kiệm
        </h2>

        <div className="bg-[#1e293b] p-8 rounded-2xl grid md:grid-cols-2 gap-8 mt-10">

          <div className="space-y-6 text-left">
            <div>
              <label className="block mb-2 text-gray-400">
                Số nhân sự CSKH
              </label>
              <input
                type="number"
                value={staff}
                onChange={(e) => setStaff(Number(e.target.value))}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-400">
                Số tin nhắn mỗi ngày
              </label>
              <input
                type="number"
                value={messages}
                onChange={(e) => setMessages(Number(e.target.value))}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
              />
            </div>
          </div>

          <div className="bg-[#0b1120] p-6 rounded-xl flex flex-col justify-center">
            <p className="text-gray-400 mb-2">Chi phí nhân sự / tháng</p>
            <p className="text-2xl font-bold mb-4">
              {monthlyCost.toLocaleString()} VNĐ
            </p>

            <p className="text-gray-400 mb-2">Chi phí AI triển khai</p>
            <p className="text-2xl font-bold mb-4">
              {aiCost.toLocaleString()} VNĐ
            </p>

            <p className="text-green-400 text-xl font-bold">
              Bạn có thể tiết kiệm: {saving.toLocaleString()} VNĐ / tháng
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}