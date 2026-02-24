import { useState } from "react"
import { Send, Bot, User } from "lucide-react"

export default function DemoSection() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Xin chào 👋 Tôi là Nova AI. Tôi có thể giúp bạn tăng tỷ lệ chốt đơn như thế nào?",
    },
  ])

  const [input, setInput] = useState("")
  const [step, setStep] = useState("normal") 
  // normal | askName | askPhone | done

  const [lead, setLead] = useState({
    name: "",
    phone: "",
  })

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", text: input }
    setMessages((prev) => [...prev, userMessage])

    // ===== FLOW =====
    if (step === "normal") {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text:
              "Nova AI có thể tự động tư vấn, xử lý phản đối và theo dõi khách hàng giúp tăng chuyển đổi. Anh/chị có muốn đặt lịch demo riêng không?",
          },
        ])
      }, 600)

      setStep("askName")
    }

    else if (step === "askName") {
      setLead((prev) => ({ ...prev, name: input }))

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text: "Cảm ơn anh/chị. Vui lòng cho tôi xin số điện thoại để đội ngũ Nova AI liên hệ xác nhận lịch demo.",
          },
        ])
      }, 600)

      setStep("askPhone")
    }

    else if (step === "askPhone") {
      setLead((prev) => ({ ...prev, phone: input }))

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            text:
              `Cảm ơn ${lead.name || ""}! 🎉 Đội ngũ Nova AI sẽ liên hệ qua số ${input} để xác nhận lịch demo trong thời gian sớm nhất.`,
          },
        ])
      }, 600)

      setStep("done")
    }

    setInput("")
  }

  return (
    <section className="bg-white py-28">
      <div className="container max-w-4xl">

        <div className="text-center mb-16">
          <h2 className="text-section font-display text-slate-900">
            Trải nghiệm Nova AI & Đặt lịch Demo
          </h2>
          <p className="text-slate-600 mt-6 text-lg">
            Hãy thử trò chuyện – AI sẽ hướng dẫn bạn đặt lịch trong 30 giây.
          </p>
        </div>

        <div className="
          bg-surface-soft
          border border-slate-200
          rounded-3xl
          shadow-strong
          overflow-hidden
        ">
          {/* CHAT BODY */}
          <div className="p-6 h-[420px] overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[75%]
                    px-4 py-3
                    rounded-2xl
                    text-sm
                    ${
                      msg.role === "user"
                        ? "bg-brand-600 text-white"
                        : "bg-white text-slate-800 border border-slate-200"
                    }
                  `}
                >
                  <div className="flex items-start gap-2">
                    {msg.role === "bot" && (
                      <Bot size={16} className="text-brand-600 mt-1" />
                    )}
                    {msg.role === "user" && (
                      <User size={16} className="text-white mt-1" />
                    )}
                    <span>{msg.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          {step !== "done" && (
            <div className="border-t border-slate-200 p-4 flex gap-3 bg-white">
              <input
                type="text"
                placeholder={
                  step === "askName"
                    ? "Nhập tên của bạn..."
                    : step === "askPhone"
                    ? "Nhập số điện thoại..."
                    : "Nhập câu hỏi của bạn..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="
                  flex-1
                  border border-slate-200
                  rounded-xl
                  px-4 py-2
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-brand-500
                "
              />
              <button
                onClick={handleSend}
                className="
                  bg-brand-600
                  hover:bg-brand-700
                  text-white
                  px-4
                  rounded-xl
                  flex items-center justify-center
                  transition-all
                "
              >
                <Send size={18} />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}