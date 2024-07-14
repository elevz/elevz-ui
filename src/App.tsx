import { useState } from 'react';
import { Button, Input, Modal } from '../lib';
import useToast from '@lib/hooks/useToast';

function App() {
  const [v, sv] = useState(false);
  const showToast = useToast();

  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-4">
      <Input
        leftIcon="alert-circle"
      />

      <Button label={v ? 'Close' : 'Show'} onClick={() => sv(!v)} />

      <Modal
        visible={v}
        className='flex items-center justify-center'
        onBackdropClick={() => sv(false)}
      >
        <div className='bg-white p-2 rounded-md size-32'>
          <span>Modal</span>
          <Button label='Toast' onClick={() => showToast({
            position: 'bottom-center',
            message: 'Hello from toast',
            scheme: 'primary'
          })} />
        </div>
      </Modal>
    </div>
  )
}


export default App;