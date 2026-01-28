interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  message: string
}

export default function Alert({ type = 'info', message }: AlertProps) {
  const colors = {
    info: { bg: '#e3f2fd', border: '#1976d2', text: '#0d47a1' },
    success: { bg: '#e8f5e9', border: '#388e3c', text: '#1b5e20' },
    warning: { bg: '#fff3e0', border: '#f57c00', text: '#e65100' },
    error: { bg: '#ffebee', border: '#d32f2f', text: '#b71c1c' },
  }

  const style = colors[type]

  return (
    <div
      style={{
        padding: '12px 16px',
        background: style.bg,
        border: `1px solid ${style.border}`,
        borderRadius: '4px',
        color: style.text,
        marginBottom: '16px',
      }}
    >
      {message}
    </div>
  )
}
