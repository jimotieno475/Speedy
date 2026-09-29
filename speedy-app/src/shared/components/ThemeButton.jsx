import Icon from './Icon'

export default function ThemeButton({ theme, onToggle, className = '' }) {
  return (
    <button onClick={onToggle} title="Toggle light / dark mode"
      className={`flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-card text-dim ${className}`}>
      <Icon name={theme === 'dark' ? 'moon' : 'sun'} className="size-[19px]" />
    </button>
  )
}
