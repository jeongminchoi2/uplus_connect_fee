export function Checkbox({ checked, onCheckedChange }: { checked: boolean, onCheckedChange: () => void }) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onCheckedChange}
      className="w-4 h-4 accent-blue-600"
    />
  )
}
