export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[56px] bg-[var(--color-header-bg)] text-white flex items-center px-6 shadow-md">
      <div className="flex items-center gap-3">
        <SalesforceCloud />
        <span className="text-[17px] font-semibold tracking-tight">The SE AI Toolkit</span>
      </div>
    </header>
  )
}

function SalesforceCloud() {
  return (
    <svg width="36" height="24" viewBox="0 0 75 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.6 5.6c2.8-2.9 6.7-4.7 11-4.7 5.4 0 10.2 2.9 12.9 7.2 2.3-1 4.8-1.6 7.5-1.6C67.2 6.5 74 13.7 74 22.5S67.2 38.5 58 38.5c-1 0-2-.1-3-.3-2.3 3.6-6.3 6-10.8 6-2 0-3.9-.5-5.6-1.3-2.4 4-6.8 6.7-11.8 6.7-5.1 0-9.5-2.8-11.9-6.9-1 .2-2 .3-3.1.3C5.3 43 0 37.4 0 30.6c0-4.4 2.3-8.3 5.8-10.5-.5-1.4-.7-3-.7-4.6C5.1 8 11.1 2 18.5 2c3.2 0 6.1 1.1 8.1 3.6z"
        fill="white"
      />
    </svg>
  )
}
