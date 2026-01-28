'use client'

import { useState } from 'react'

interface DisclosureItem {
  id: string
  label: string
  required?: boolean
}

interface DisclosureChecklistProps {
  items: DisclosureItem[]
  onComplete?: (checkedItems: string[]) => void
}

export default function DisclosureChecklist({
  items,
  onComplete,
}: DisclosureChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const handleCheck = (id: string) => {
    const newChecked = checkedItems.includes(id)
      ? checkedItems.filter((item) => item !== id)
      : [...checkedItems, id]
    setCheckedItems(newChecked)
  }

  const isComplete = items
    .filter((item) => item.required)
    .every((item) => checkedItems.includes(item.id))

  return (
    <div style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
      <h3>Disclosures</h3>
      <div style={{ marginTop: '16px' }}>
        {items.map((item) => (
          <label
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              borderBottom: '1px solid #eee',
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={() => handleCheck(item.id)}
              style={{ marginRight: '12px' }}
            />
            <span>
              {item.label}
              {item.required && <span style={{ color: 'red' }}> *</span>}
            </span>
          </label>
        ))}
      </div>
      {onComplete && (
        <button
          onClick={() => onComplete(checkedItems)}
          disabled={!isComplete}
          style={{
            marginTop: '16px',
            padding: '12px 24px',
            background: isComplete ? 'var(--navy)' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isComplete ? 'pointer' : 'not-allowed',
          }}
        >
          Confirm
        </button>
      )}
    </div>
  )
}
