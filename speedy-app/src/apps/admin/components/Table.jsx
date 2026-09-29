export default function Table({ columns, rows, onRowClick, empty = 'Nothing here yet' }) {
  return (
    <div className="overflow-x-auto rounded-[18px] border border-line bg-card">
      <table className="w-full min-w-[720px] text-left text-[13px]">
        <thead>
          <tr className="border-b border-line text-[10.5px] uppercase tracking-[0.06em] text-dim">
            {columns.map(c => <th key={c.key} className={`px-4 py-3 font-semibold ${c.className || ''}`}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id || r.code} onClick={onRowClick && (() => onRowClick(r))}
              className={`border-b border-line last:border-b-0 ${onRowClick ? 'cursor-pointer hover:bg-raised/50' : ''}`}>
              {columns.map(c => (
                <td key={c.key} className={`px-4 py-3 ${c.className || ''}`}>{c.render ? c.render(r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
          {!rows.length && (
            <tr><td colSpan={columns.length} className="px-4 py-10 text-center text-dim">{empty}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
