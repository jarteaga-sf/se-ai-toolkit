import { useState } from 'react'

export default function TabbedToolSection({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="mt-8">
      <div className="flex bg-[var(--color-border-light)] rounded-lg p-1 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`flex-1 text-[15px] px-3 py-2 rounded-md font-medium transition-all cursor-pointer ${
              activeTab === i
                ? 'bg-[var(--color-bg-white)] text-[var(--color-text)] shadow-[var(--shadow-card)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div key={activeTab}>{tabs[activeTab]?.render}</div>
    </div>
  )
}
