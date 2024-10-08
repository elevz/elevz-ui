import { Button, Input, Select } from "@lib/components";
import { useToast } from "@lib/hooks";
import Row from "../components/Row";

export default function () {
  const toast = useToast();

  return (
    <div className="flex flex-col gap-4">
      <Input 
        label="Input"
        disabled
        value={"Input Text"}
      />
      <Select 
        label="Select"
        placeholder="Select an Option"
        options={[
          'Options 1',
          'Options 2',
          'Options 3',
        ]}
      />
      <Row>
        <Button
          label="Primary"
          scheme="primary"
          variant="solid"
          onClick={() => toast({ message: 'hello', scheme: 'danger' })}
          loading
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

        <Button 
          label="Link"
          link
        />
      </Row>

      <Row>
        <Button
          label="Large"
          size="lg"
          
        />
        <Button
          label="Medium"
          size="md"
        />
        <Button
          label="Small"
          size="sm"
        />
      </Row>

      <Row>
        <Button
          label="Secondary"
          scheme="secondary"
          variant="solid"
          loading
        />
        <Button
          label="Secondary"
          scheme="secondary"
          variant="outline"
          loading
        />
        <Button
          label="Secondary"
          scheme="secondary"
          variant="ghost"
          loading
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
    </div>
  )
}