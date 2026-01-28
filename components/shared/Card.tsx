interface CardProps {
  title?: string
  children: React.ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div
      style={{
        background: 'white',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {title && <h3 style={{ marginBottom: '16px' }}>{title}</h3>}
      {children}
    </div>
  )
}
