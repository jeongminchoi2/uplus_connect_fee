export function Checkbox({ checked, onChange }: { checked: boolean, onChange: () => void }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="w-4 h-4 accent-blue-600"
    />
  )
}
