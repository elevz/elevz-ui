import { Button } from "@lib/components";
import Row from "../components/Row";

export default function () {
  return (
    <div className="ez-flex ez-flex-col ez-gap-4">
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
    </div>
  )
}