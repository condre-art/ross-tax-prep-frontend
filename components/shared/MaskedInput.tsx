'use client'

import { ChangeEvent } from 'react'

interface MaskedInputProps {
  value: string
  onChange: (value: string) => void
  mask: 'ssn' | 'ein' | 'phone' | 'zip'
  placeholder?: string
}

export default function MaskedInput({
  value,
  onChange,
  mask,
  placeholder,
}: MaskedInputProps) {
  const applyMask = (input: string): string => {
    const digits = input.replace(/\D/g, '')

    switch (mask) {
      case 'ssn':
        return digits
          .slice(0, 9)
          .replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3')
          .replace(/(\d{3})-(\d{2})-?$/, '$1-$2')
      case 'ein':
        return digits
          .slice(0, 9)
          .replace(/(\d{2})(\d{7})/, '$1-$2')
          .replace(/(\d{2})-?$/, '$1')
      case 'phone':
        return digits
          .slice(0, 10)
          .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
          .replace(/\((\d{3})\) (\d{3})-?$/, '($1) $2')
      case 'zip':
        return digits.slice(0, 5)
      default:
        return digits
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const masked = applyMask(e.target.value)
    onChange(masked)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
      }}
    />
  )
}
