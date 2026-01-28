interface Provider {
  id: string
  name: string
  logo?: string
}

interface ProviderPickerProps {
  providers: Provider[]
  selectedProvider: string | null
  onSelect: (providerId: string) => void
}

export default function ProviderPicker({
  providers,
  selectedProvider,
  onSelect,
}: ProviderPickerProps) {
  return (
    <div>
      <h3>Select Bank Provider</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
        {providers.map((provider) => (
          <div
            key={provider.id}
            onClick={() => onSelect(provider.id)}
            style={{
              padding: '20px',
              border: `2px solid ${selectedProvider === provider.id ? 'var(--navy)' : '#ddd'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'center',
              background: selectedProvider === provider.id ? '#f0f8ff' : 'white',
            }}
          >
            {provider.logo && (
              <img src={provider.logo} alt={provider.name} style={{ maxWidth: '100px', marginBottom: '12px' }} />
            )}
            <p style={{ fontWeight: 'bold' }}>{provider.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
