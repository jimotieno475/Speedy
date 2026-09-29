import Icon from '@/shared/components/Icon'

export default function Drawer({ open, title, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50" onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        className="h-full w-full max-w-[420px] animate-fade overflow-y-auto border-l border-line bg-panel p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="font-display text-lg font-bold">{title}</div>
          <div onClick={onClose} className="flex size-8 cursor-pointer items-center justify-center rounded-lg border border-line bg-card text-dim">
            <Icon name="x" className="size-4" />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
