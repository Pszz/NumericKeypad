'use client'
import React, { useCallback, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { Delete } from 'lucide-react'

type NumericKeypadProps = {
  value: string
  onChange: (value: string) => void
  maxLength?: number
  precision?: number // Number of decimal places
  disabled?: boolean
}

export function NumericKeypad({
  value,
  onChange,
  maxLength = 10,
  precision = 2,
  disabled = false,
}: NumericKeypadProps) {
  const handlePress = useCallback(
    (key: string) => {
      if (disabled) return

      switch (key) {
        case 'backspace':
          onChange(value.slice(0, -1))
          break
        case '.':
          // Skip if decimal point exists or no digits entered
          if (value.includes('.') || value.length === 0) break
          onChange(value + '.')
          break
        default:
          // Check length limit
          if (value.length >= maxLength) break

          // Check decimal places limit
          if (value.includes('.')) {
            const [, decimal] = value.split('.')
            if (decimal && decimal.length >= precision) break
          }

          // Prevent leading zeros
          if (value === '0' && key !== '.') {
            onChange(key)
          } else {
            onChange(value + key)
          }
      }
    },
    [value, onChange, maxLength, precision, disabled],
  )

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return
      // Prevent default behavior for numeric keys
      if ((e.key >= '0' && e.key <= '9') || e.key === '.' || e.key === 'Backspace' || e.key === 'Delete') {
        e.preventDefault()

        // Map Delete/Backspace keys to 'backspace'
        if (e.key === 'Backspace' || e.key === 'Delete') {
          handlePress('backspace')
        } else {
          handlePress(e.key)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePress, disabled])

  const keys = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', 'backspace'],
  ]

  return (
    <div className="grid w-full">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-3 gap-6">
          {row.map((key) => (
            <Button
              variant="light"
              key={key}
              className="h-16 py-3 text-[44px] font-bold"
              onPress={() => handlePress(key)}
              isDisabled={disabled}
            >
              {key === 'backspace' ? <Delete className="h-6 w-6" /> : key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
}
