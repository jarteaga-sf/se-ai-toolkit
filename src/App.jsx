import Layout from '@/components/Layout'
import Section from '@/components/Section'
import TerminalPanel from '@/components/TerminalPanel'
import KeyTakeaway from '@/components/KeyTakeaway'
import QuickReference from '@/components/QuickReference'
import FeatureCards from '@/components/FeatureCards'
import StepFlow from '@/components/StepFlow'
import TabbedToolSection from '@/components/TabbedToolSection'
import HabitCards from '@/components/HabitCards'
import QuoteCallout from '@/components/QuoteCallout'
import TierDivider from '@/components/TierDivider'
import PresentationDeck from '@/components/PresentationDeck'

import { vibeCoding, whySesCare } from '@/content/big-picture'
import { claudeCode, cursor, saleo, meshmesh, useCases } from '@/content/tools'
import { levelUp, quickReference } from '@/content/action'

function RichText({ text }) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text)]">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="font-[var(--font-mono)] text-[0.9em] bg-[var(--color-border-light)] px-1.5 py-0.5 rounded">{part.slice(1, -1)}</code>
    }
    return part
  })
}

function Prose({ paragraphs }) {
  if (!paragraphs) return null
  return (
    <div className="space-y-5 text-[var(--color-text-prose)] leading-[1.7]">
      {paragraphs.map((p, i) => (
        <p key={i} className={i === 0 ? 'text-[19px]' : 'text-[18px]'}><RichText text={p} /></p>
      ))}
    </div>
  )
}

function TabContent({ content }) {
  return (
    <>
      <Prose paragraphs={content.prose} />
      {content.quote && <QuoteCallout quote={content.quote} />}
      {content.terminal && (
        <TerminalPanel
          title={content.terminal.title}
          steps={content.terminal.steps}
          expandable={content.terminal.expandable}
        />
      )}
      {content.features && <FeatureCards features={content.features} />}
      {content.stepFlow && <StepFlow stepFlow={content.stepFlow} />}
      {content.stepFlowSecondary && <StepFlow stepFlow={content.stepFlowSecondary} />}
      {content.habitCards && <HabitCards cards={content.habitCards} />}
      {content.takeaway && (
        <KeyTakeaway><RichText text={content.takeaway} /></KeyTakeaway>
      )}
    </>
  )
}

function ToolSection({ data }) {
  const tabs = data.tabs.map((tab) => ({
    label: tab.label,
    render: <TabContent content={tab.content} />,
  }))

  return (
    <Section id={data.id} label={data.label} title={data.title} subtitle={data.subtitle} hideDivider={data.hideDivider}>
      <TabbedToolSection tabs={tabs} />
    </Section>
  )
}


const presentationSections = [vibeCoding, whySesCare]

export default function App() {
  return (
    <Layout>
      {({ onSlideChange }) => (
        <>
          {/* Fullscreen Presentation Deck -- Big Picture tier */}
          <PresentationDeck
            sections={presentationSections}
            onSlideChange={onSlideChange}
            scrollTargetId="tools-tier"
          />

          {/* Big Picture: The Use Cases (scrollable section) */}
          <ToolSection data={useCases} />

          <TierDivider label="The Tools" id="tools-tier" />

          {/* Tier 2: The Tools */}
          <ToolSection data={saleo} />
          <ToolSection data={meshmesh} />
          <ToolSection data={cursor} />
          <ToolSection data={claudeCode} />

          <TierDivider label="Keep Going" />

          <ToolSection data={levelUp} />

          <Section id={quickReference.id} label={quickReference.label} title={quickReference.title} subtitle={quickReference.subtitle}>
            <QuickReference data={quickReference} />
          </Section>
        </>
      )}
    </Layout>
  )
}
