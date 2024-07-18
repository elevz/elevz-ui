import { Button, Dropdown, Input } from "@lib/components";
import Row from "./components/Row";

function App() {
  return (
    <div className="ez-bg-background ez-flex ez-flex-col ez-items-center ez-justify-center ez-h-screen">
      <div className="ez-flex ez-flex-col ez-justify-between ez-h-3/4 ez-border ez-p-4 ez-gap-3">
        <Input label="Input" />
        <Dropdown
          label="Dropdown"

        />
        <Dropdown
          label="Dropdown"
        />

        <Button
          label="Button"
        />
        <Button
          label="Button"
          variant="outline"
        />
        <Button
          label="Button"
          variant="ghost"
        />

        <Row>
          <div className='ez-rounded-sm ez-h-10 ez-w-10 ez-bg-primary-hover' />
          <div className='ez-rounded-sm ez-h-10 ez-w-10 ez-bg-primary-light' />
          <div className='ez-rounded-sm ez-h-10 ez-w-10 ez-bg-primary' />
          <div className='ez-rounded-sm ez-h-10 ez-w-10 ez-bg-primary-dark' />
          <div className='ez-rounded-sm ez-h-10 ez-w-10 ez-bg-primary-darker' />
        </Row>
      </div>
    </div>
  )
}


export default App;