import Button from './components/Button/Button'

  function App() {
    return (
      <div style={{ padding: '40px' }}>
        <h1 style={{ marginBottom: '24px' }}>Preproute Test Management</h1>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => alert('Primary clicked')}>
            Primary
          </Button>                             
          <Button variant="secondary">
            Secondary
          </Button>
          <Button variant="danger">
            Danger                              
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>
    )
  }

  export default App