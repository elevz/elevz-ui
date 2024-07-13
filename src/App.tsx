import { useState } from 'react';
import { Button, Input, Toast } from '../lib';
import useToast from '@lib/hooks/useToast';
import { getRandomNumber } from '@lib/utils/helpers';
import { ToastPosition } from '@lib/components/toast/types';

function App() {
  const [v, sv] = useState(false);
  const showToast = useToast();

  function addToast(pos: ToastPosition){
    showToast({
      position: pos,
      message: 'Toast',
      scheme: getRandomNumber() === 1 ? 'success' : 'danger',
      indicator: true
    })
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-4">
      <Input
        leftIcon="alert-circle"

      />
      <Button label={v ? 'Close' : 'Show'} onClick={() => sv(!v)} />

      <Button
        label="Bottom Center"
        onClick={() => addToast('bottom-center')}
      />
      
      <Button
        label="Top Center"
        onClick={() => addToast('top-center')}
      />

      <Toast
        autoClose
        scheme="success"
        message="Toast message"
        onClose={() => sv(false)}
        visible={v}
        position='top-center'
        indicator
      />
    </div>
  )
}


export default App;