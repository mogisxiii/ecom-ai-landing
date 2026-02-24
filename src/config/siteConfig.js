const siteConfig = {
  /* ========================================
     META
  ======================================== */
  meta: {
    siteName: "Nova AI Agency",
    tagline: "Triển khai & vận hành hệ thống AI cho doanh nghiệp hiện đại",
    phone: "0909 000 000",
    email: "contact@novaai.vn",
    address: "TP.HCM, Việt Nam",
  },

  /* ========================================
     SEO
  ======================================== */
  seo: {
    title: "Nova AI Agency | Triển khai & Vận hành AI Automation cho doanh nghiệp",
    description:
      "Triển khai hệ thống AI Chatbot, AI Sales Automation và AI CRM giúp doanh nghiệp giảm chi phí, tăng doanh thu và vận hành tự động 24/7.",
    keywords: [
      "AI Automation Việt Nam",
      "AI Chatbot doanh nghiệp",
      "AI Sales System",
      "Triển khai AI",
      "AI CRM",
    ],
    ogImage: "/images/og-ai-agency.jpg",
  },

  /* ========================================
     BUSINESS MODEL
  ======================================== */
  businessModel: {
    type: "hybrid", // one-time | subscription | hybrid
    implementationNote:
      "Phí triển khai một lần + phí duy trì & tối ưu hệ thống hàng tháng.",
  },

  
  /* ========================================
     THEME (Multi Theme Ready)
  ======================================== */
  theme: {
    preset: "dark-tech", // dark-tech | premium | minimal

    colors: {
      background: "#0B1220",   // navy deep sạch hơn
    surface: "#111827",
    primary: "#4F46E5",      // indigo nổi bật
    accent: "#06B6D4",       // cyan AI
    secondary: "#22D3EE",
    text: "#F8FAFC",         // gần trắng
    muted: "#CBD5E1"         // xám sáng hơn
    },

    ui: {
      borderRadius: "16px",
      buttonStyle: "gradient", // solid | outline | gradient
      borderRadius: "14px"
    },
  },

  /* ========================================
     LAYOUT ORDER (Conversion Focused)
  ======================================== */
  layout: [
    "hero",
    "clientLogos",
    "stats",
    "problem",
    "solution",
    "process",
    "caseStudy",
    "demo",
    "roi",
    "pricing",
    "faq",
    "cta",
  ],

  /* ========================================
     SECTIONS
  ======================================== */
  sections: {

    /* ================= HERO ================= */
    hero: {
      enabled: true,
      badge: "AI Automation Agency",
      title: "Xây dựng & vận hành hệ thống AI cho doanh nghiệp",
      subtitle:
        "Giảm 40–70% chi phí vận hành và tăng trưởng doanh thu nhờ AI Chatbot, AI Sales Automation & AI CRM.",
      primaryButton: {
        text: "Nhận tư vấn miễn phí",
        link: "/contact",
      },
      secondaryButton: {
        text: "Xem cách hoạt động",
        link: "#solution",
      },
    },

    /* ================= CLIENT LOGOS ================= */
    clientLogos: {
      enabled: true,
      title: "Được tin tưởng bởi",
      items: ["TechCorp", "SmartRetail", "Nova Group", "EcomPro", "FutureAI"],
    },

    /* ================= STATS ================= */
    stats: {
       enabled: true,
    title: "Kết quả chúng tôi đã đạt được",
    items: [
      { label: "Doanh nghiệp triển khai", value: 120, suffix: "+" },
      { label: "Tăng trưởng doanh thu TB", value: 32, suffix: "%" },
      { label: "Khách hàng hài lòng", value: 98, suffix: "%" },
      { label: "Thời gian triển khai", value: 14, suffix: " ngày" },
      ],
    },

    /* ================= PROBLEM ================= */
    problem: {
      enabled: true,
      title: "Doanh nghiệp đang mất tiền ở đâu?",
      items: [
        "Chi phí nhân sự CSKH cao",
        "Phản hồi khách hàng chậm",
        "Không có hệ thống follow-up tự động",
        "Quản lý dữ liệu khách hàng rời rạc",
      ],
    },

    /* ================= SOLUTION ================= */
    solution: {
      enabled: true,
      title: "Giải pháp AI toàn diện",
      items: [
        {
          title: "AI Chatbot 24/7",
          description:
            "Tư vấn, thu lead và chăm sóc khách hàng tự động trên Website, Facebook & Zalo.",
        },
        {
          title: "AI Sales Automation",
          description:
            "Tự động follow-up và tối ưu quy trình bán hàng.",
        },
        {
          title: "AI CRM System",
          description:
            "Quản lý và phân tích dữ liệu khách hàng thông minh.",
        },
      ],
    },

    /* ================= PROCESS ================= */
    process: {
      enabled: true,
      title: "Quy trình triển khai 4 bước",
      steps: [
        "Phân tích hệ thống hiện tại",
        "Thiết kế AI phù hợp doanh nghiệp",
        "Triển khai & tích hợp",
        "Vận hành & tối ưu hàng tháng",
      ],
    },

    /* ================= CASE STUDY ================= */
    caseStudy: {
      enabled: true,
      title: "Case Study thực tế",
      items: [
        {
          company: "EcomPro",
          result: "Giảm 55% chi phí CSKH sau 2 tháng",
        },
        {
          company: "SmartRetail",
          result: "Tăng 38% tỷ lệ chốt đơn nhờ AI Automation",
        },
      ],
    },

    /* ================= DEMO ================= */
    demo: {
      enabled: true,
      title: "Trải nghiệm AI Chatbot ngay",
      description:
        "Đặt câu hỏi để xem AI tự động tư vấn và thu lead hoạt động như thế nào.",
    },

    /* ================= ROI ================= */
    roi: {
      enabled: true,
      title: "Bạn có thể tiết kiệm bao nhiêu?",
      defaultStaffCost: 8000000,
      aiMonthlyCost: 5000000,
      note: "Tính toán dựa trên chi phí nhân sự trung bình.",
    },

    /* ================= PRICING ================= */
     pricing: {
    enabled: true,
    title: "Giải pháp phù hợp cho từng giai đoạn",
    subtitle: "Triển khai AI nhanh chóng – tối ưu chi phí – tăng trưởng bền vững",
    plans: [
      {
        name: "Starter",
        price: "8.000.000",
        period: " / dự án",
        description: "Phù hợp SME bắt đầu ứng dụng AI",
        features: [
          "Chatbot AI cơ bản",
          "Tích hợp Facebook / Website",
          "Tư vấn & setup 7 ngày",
          "Hỗ trợ 30 ngày"
        ],
        highlight: false,
        buttonText: "Bắt đầu ngay",
        buttonLink: "#contact"
      },
      {
        name: "Growth",
        price: "20.000.000",
        period: " / dự án",
        description: "Tối ưu vận hành & chăm sóc khách hàng",
        features: [
          "AI chatbot nâng cao",
          "Automation Marketing",
          "CRM tích hợp",
          "Phân tích dữ liệu",
          "Hỗ trợ 90 ngày"
        ],
        highlight: true,
        buttonText: "Tư vấn chiến lược",
        buttonLink: "#contact"
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Giải pháp AI toàn diện cho doanh nghiệp lớn",
        features: [
          "AI đa kênh",
          "Automation full quy trình",
          "Dashboard quản trị",
          "Tư vấn chiến lược dài hạn",
          "Support ưu tiên"
        ],
        highlight: false,
        buttonText: "Liên hệ báo giá",
        buttonLink: "#contact"
      }
    ]
  },

    /* ================= FAQ ================= */
    faq: {
      enabled: true,
      title: "Câu hỏi thường gặp",
    subtitle: "Giải đáp những thắc mắc trước khi triển khai AI",
    items: [
      {
        question: "Doanh nghiệp nhỏ có phù hợp triển khai AI không?",
        answer:
          "Hoàn toàn phù hợp. Chúng tôi thiết kế giải pháp theo từng giai đoạn, tối ưu chi phí và đảm bảo hiệu quả thực tế."
      },
      {
        question: "Bao lâu thì thấy hiệu quả?",
        answer:
          "Thông thường 2–4 tuần sau triển khai, doanh nghiệp đã thấy cải thiện về tốc độ phản hồi và chuyển đổi."
      },
      {
        question: "Có cần đội kỹ thuật nội bộ không?",
        answer:
          "Không bắt buộc. Chúng tôi hỗ trợ setup, vận hành và đào tạo đội ngũ của bạn."
      },
      {
        question: "Chi phí có phát sinh thêm không?",
        answer:
          "Chúng tôi báo giá minh bạch ngay từ đầu. Không có chi phí ẩn."
      }
    ]
    },

    /* ================= CTA ================= */
    cta: {
      enabled: true,
      highlight: "Ready to scale?",
  title: "Triển khai AI cho doanh nghiệp của bạn ngay hôm nay",
  subtitle:
    "Đặt lịch tư vấn miễn phí. Chúng tôi phân tích hệ thống và đề xuất giải pháp phù hợp nhất cho bạn.",
  primaryButton: {
    text: "Đặt lịch demo",
    link: "#demo",
    },
     secondaryButton: {
    text: "Xem bảng giá",
    link: "#pricing",
     },

  }, // đóng sections

} // đóng siteConfig

}

export default siteConfig