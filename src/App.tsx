import { Button, Dropdown, Input } from "@lib/components";

function App() {
  function toggleClass() {
    const htmlElement = document.documentElement; // Seleciona o elemento <html>

    if (htmlElement.classList.contains('ez-dark')) {
      htmlElement.classList.remove('ez-dark'); // Remove a classe se ela já existir
    } else {
      htmlElement.classList.add('ez-dark'); // Adiciona a classe se ela não existir
    }
  }

  return (
    <div className="ez-bg-background ez-flex ez-h-dvh ez-items-center ez-justify-center">
      <div className="ez-absolute ez-top-1 ez-right-1">
        <Button label="Theme" size="sm" onClick={toggleClass} />
      </div>
      <div className="ez-flex ez-flex-col ez-justify-between ez-h-3/4 ez-w-80 ez-border ez-p-4 ez-gap-3 ez-m-auto ez-bg-surface ez-rounded-md">
        <Input label="Input" helperText="Helper text" />
        <Dropdown
          label="Dropdown"
          // options={Array.from({ length: 32 }).map((_, i) => ({ label: 'Item ' + (i + 1), value: 'value-' + (i + 1) }))}
          placeholder="Dropdown"
        />

        <Button
          leftIcon="alert-circle"
          label="Left"
          // loading
        />

        <Dropdown
          label="Dropdown"
          options={Array.from({ length: 8 }).map((_, i) => ({ label: 'Item ' + (i + 1), value: 'value-' + (i + 1) }))}
        />
      </div>
    </div>
  )
}


export default App;