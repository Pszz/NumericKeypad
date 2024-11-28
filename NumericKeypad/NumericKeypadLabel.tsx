export function NumericKeypadLabel({ value }: { value: string }) {
  // Calculate font size based on value length
  const getFontSize = (length: number) => {
    if (length < 8) return 70
    if (length < 12) return 56
    if (length < 16) return 48
    return 32
  }

  return (
    <div className="font-bold transition-[font-size] duration-100" style={{ fontSize: getFontSize(value.length) }}>
      ${value || ''}
      <span className="text-default-200">{value ? '' : '0.00'}</span>
    </div>
  )
}
