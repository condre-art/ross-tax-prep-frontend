interface StepperProps {
  steps: string[]
  currentStep: number
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
      {steps.map((step, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '12px',
            background: index <= currentStep ? 'var(--navy)' : '#ddd',
            color: index <= currentStep ? 'white' : '#666',
            borderRadius: '4px',
            margin: '0 4px',
          }}
        >
          {step}
        </div>
      ))}
    </div>
  )
}
