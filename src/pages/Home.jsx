import SEO from "../components/SEO"
import siteConfig from "../config/siteConfig"

import HeroSection from "../sections/HeroSection"
import ClientLogoSection from "../sections/ClientLogoSection"
import ProblemSection from "../sections/ProblemSection"
import SolutionSection from "../sections/SolutionSection"
import ProcessSection from "../sections/ProcessSection"
import CaseStudySection from "../sections/CaseStudySection"
import StatsSection from "../sections/StatsSection"
import DemoSection from "../sections/DemoSection"
import ROICalculatorSection from "../sections/ROICalculatorSection"
import PricingSection from "../sections/PricingSection"
import FAQSection from "../sections/FAQSection"
import CTASection from "../sections/CTASection"

export default function Home() {

  const sectionMap = {
    hero: <HeroSection />,
    clientLogos: <ClientLogoSection />,
    problem: <ProblemSection />,
    solution: <SolutionSection />,
    process: <ProcessSection />,
    caseStudy: <CaseStudySection />,
    stats: <StatsSection />,
    demo: <DemoSection />,
    roi: <ROICalculatorSection />,
    pricing: <PricingSection />,
    faq: <FAQSection />,
    cta: <CTASection />,
  }

  return (
    <>
      <SEO
        title={siteConfig.seo.title}
        description={siteConfig.seo.description}
      />

      {siteConfig.layout.map((sectionKey) => (
        <div key={sectionKey}>
          {sectionMap[sectionKey]}
        </div>
      ))}
    </>
  )
}