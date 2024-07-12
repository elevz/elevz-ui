import { useState } from 'react';
import { Button, Input, Toast } from '../lib';

function App() {
  const [v, sv] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-4">
      <Input
        leftIcon="alert-circle"

      />
      <Button label={v ? 'Close' : 'Show'} onClick={() => sv(!v)} />

      <Toast
        autoClose
        indicator
        scheme="success"
        message="Toast message"
        onClose={() => sv(false)}
        visible={v}
        position='top-center'
      />

      <Toast
        scheme="success"
        message="Toast message"
        visible
      />

      <Toast
        scheme="info"
        message="Toast message"
        visible
      />

      <Toast
        scheme="danger"
        message="Toast message"
        visible
      />

      <Toast
        scheme="warning"
        message="Toast message"
        visible
      />

    </div>
  )
}


export default App;
