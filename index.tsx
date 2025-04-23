import { useState } from "react"
import { Checkbox } from "../components/ui/checkbox"

const plans = [
  { name: "기본형", price: 11880 },
  { name: "고급형", price: 16830 },
  { name: "DTG", price: 16500 },
]

const addOns = [
  { name: "디지털키", price: 2200 },
  { name: "화물칸 온도 감지", price: 1100 },
  { name: "화물칸 문 열림 감지", price: 1100 },
  { name: "탑승차 승/하차 확인", price: 1100 },
  { name: "초정밀측위", price: 5500 },
  { name: "관제 문자메시지 알림", price: 1100 },
]

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("기본형")
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const planPrice = plans.find(p => p.name === selectedPlan)?.price || 0
  const addOnTotal = addOns.filter(a => selectedAddOns.includes(a.name)).reduce((sum, a) => sum + a.price, 0)
  const total = planPrice + addOnTotal

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">U+커넥트 요금 계산기 (간단형)</h1>

      <div className="space-y-2">
        <label className="font-medium block">요금제 선택</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          {plans.map(plan => (
            <option key={plan.name} value={plan.name}>
              {plan.name} - {plan.price.toLocaleString()}원
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-medium block">부가서비스 선택</label>
        <div className="grid grid-cols-1 gap-1">
          {addOns.map(add => (
            <label key={add.name} className="flex items-center space-x-2">
              <Checkbox
                checked={selectedAddOns.includes(add.name)}
                onChange={() =>
                  setSelectedAddOns(prev =>
                    prev.includes(add.name) ? prev.filter(i => i !== add.name) : [...prev, add.name]
                  )
                }
              />
              <span>{add.name} ({add.price.toLocaleString()}원)</span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-right font-bold text-blue-600 text-xl">
        총 요금: {total.toLocaleString()}원
      </div>
    </div>
  )
}
