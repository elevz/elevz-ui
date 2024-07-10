import { PropsWithChildren } from 'react';
import { Button, Input } from '../lib';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-dvh gap-4">
      <Input
        label="Input"
        helperText="Helper text"
      />
      <Row>
        <Button
          label="Primary"
          scheme="primary"
          variant="solid"
        />
        <Button
          label="Primary"
          scheme="primary"
          variant="outline"
        />
        <Button
          label="Primary"
          scheme="primary"
          variant="ghost"
        />
      </Row>

      <Row>
        <Button
          label="Secondary"
          scheme="secondary"
          variant="solid"
        />
        <Button
          label="Secondary"
          scheme="secondary"
          variant="outline"
        />
        <Button
          label="Secondary"
          scheme="secondary"
          variant="ghost"
        />
      </Row>

      <Row>
        <Button
          label="Success"
          scheme="success"
          variant="solid"
        />
        <Button
          label="Success"
          scheme="success"
          variant="outline"
        />
        <Button
          label="Success"
          scheme="success"
          variant="ghost"
        />
      </Row>

      <Row>
        <Button
          label="Info"
          scheme="info"
          variant="solid"
        />
        <Button
          label="Info"
          scheme="info"
          variant="outline"
        />
        <Button
          label="Info"
          scheme="info"
          variant="ghost"
        />
      </Row>

      <Row>
        <Button
          label="Danger"
          scheme="danger"
          variant="solid"
        />
        <Button
          label="Danger"
          scheme="danger"
          variant="outline"
        />
        <Button
          label="Danger"
          scheme="danger"
          variant="ghost"
        />
      </Row>

      <Row>
        <Button
          label="Warning"
          scheme="warning"
          variant="solid"
        />
        <Button
          label="Warning"
          scheme="warning"
          variant="outline"
        />
        <Button
          label="Warning"
          scheme="warning"
          variant="ghost"
        />
      </Row>

      <Row>
        <div className='rounded-sm h-10 w-10 bg-[#f0fdfa]' />
        <div className='rounded-sm h-10 w-10 bg-[#ccfbf1]' />
        <div className='rounded-sm h-10 w-10 bg-primary' />
        <div className='rounded-sm h-10 w-10 bg-primary-dark' />
        <div className='rounded-sm h-10 w-10 bg-primary-darkest' />
      </Row>
      <Row>
        <div className='rounded-sm h-10 w-10 bg-primary-lightest' />
        <div className='rounded-sm h-10 w-10 bg-primary-light' />
        <div className='rounded-sm h-10 w-10 bg-primary' />
        <div className='rounded-sm h-10 w-10 bg-primary-dark' />
        <div className='rounded-sm h-10 w-10 bg-primary-darkest' />
      </Row>

      <Row>
        <div className='rounded-sm h-10 w-10 bg-secondary-lightest' />
        <div className='rounded-sm h-10 w-10 bg-secondary-light' />
        <div className='rounded-sm h-10 w-10 bg-secondary' />
        <div className='rounded-sm h-10 w-10 bg-secondary-dark' />
        <div className='rounded-sm h-10 w-10 bg-secondary-darkest' />
      </Row>

      <Row>
        <div className='rounded-sm h-10 w-10 bg-success-lightest' />
        <div className='rounded-sm h-10 w-10 bg-success-light' />
        <div className='rounded-sm h-10 w-10 bg-success' />
        <div className='rounded-sm h-10 w-10 bg-success-dark' />
        <div className='rounded-sm h-10 w-10 bg-success-darkest' />
      </Row>

      <Row>
        <div className='rounded-sm h-10 w-10 bg-info-lightest' />
        <div className='rounded-sm h-10 w-10 bg-info-light' />
        <div className='rounded-sm h-10 w-10 bg-info' />
        <div className='rounded-sm h-10 w-10 bg-info-dark' />
        <div className='rounded-sm h-10 w-10 bg-info-darkest' />
      </Row>

      <Row>
        <div className='rounded-sm h-10 w-10 bg-danger-lightest' />
        <div className='rounded-sm h-10 w-10 bg-danger-light' />
        <div className='rounded-sm h-10 w-10 bg-danger' />
        <div className='rounded-sm h-10 w-10 bg-danger-dark' />
        <div className='rounded-sm h-10 w-10 bg-danger-darkest' />
      </Row>

      <Row>
        <div className='rounded-sm h-10 w-10 bg-warning-lightest' />
        <div className='rounded-sm h-10 w-10 bg-warning-light' />
        <div className='rounded-sm h-10 w-10 bg-warning' />
        <div className='rounded-sm h-10 w-10 bg-warning-dark' />
        <div className='rounded-sm h-10 w-10 bg-warning-darkest' />
      </Row>

    </div>
  )
}

const Row = (props: PropsWithChildren) => <div className='flex items-center gap-2' {...props} />

export default App;
