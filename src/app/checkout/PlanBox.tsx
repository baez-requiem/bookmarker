import { FC } from 'react'

export interface PlanBoxProps {
  totalMonths: number
  valueText: string
  selected: boolean
  idPlan: number | string
  onChange: (arg0: number | string) => void 
}

const PlanBox: FC<PlanBoxProps> = ({
  totalMonths,
  valueText,
  onChange,
  idPlan,
  selected = false,
}) => {

  return (
    <div className={`p-4 border-red-600 border-2 rounded-md flex items-center gap-5 ${selected && 'bg-red-700/10'}`}>
      <input
        type="radio"
        name="inline-radio-group"
        checked={selected}
        className="w-6 h-6 cursor-pointer accent-red-600"
        onChange={() => onChange(idPlan)}
      />
  
      <div className="flex-1">
        <h1 className="text-lg font-bold text-red-600">{totalMonths} {totalMonths === 1 ? 'Mês' : 'Meses' }</h1>
        <span className="text-sm text-gray-900/80">{valueText}</span>
      </div>
    </div>
  )
}

export default PlanBox