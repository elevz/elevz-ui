import React, { useState } from "react"
import { Button, Flex } from "elevz-ui";

export default function ButtonPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="page">
      <Flex direction="column" gap={10}>
        Sizes
        <Flex align="center" gap={10}>
          <Button size="xs">
            Button
          </Button>
          <Button size="sm">
            Button
          </Button>
          <Button size="md">
            Button
          </Button>
        </Flex>
      </Flex>

      <div className="col">
        Solid
        <div className="row">
          <Button
            scheme="danger"
            loading={loading}
            loadingText
            onClick={() => setLoading(!loading)}
          >
            danger
          </Button>
          <Button scheme="info">
            info
          </Button>
          <Button scheme="primary">
            primary
          </Button>
          <Button scheme="secondary">
            secondary
          </Button>
          <Button scheme="success">
            success
          </Button>
          <Button scheme="warning">
            warning
          </Button>
        </div>
      </div>

      <div className="col">
        Outline
        <div className="row">
          <Button scheme="danger" variant="outline">
            danger
          </Button>
          <Button scheme="info" variant="outline">
            info
          </Button>
          <Button scheme="primary" variant="outline">
            primary
          </Button>
          <Button scheme="secondary" variant="outline">
            secondary
          </Button>
          <Button scheme="success" variant="outline">
            success
          </Button>
          <Button scheme="warning" variant="outline">
            warning
          </Button>
        </div>
      </div>

      <div className="col">
        Ghost
        <div className="row">
          <Button scheme="danger" variant="ghost">
            danger
          </Button>
          <Button scheme="info" variant="ghost">
            info
          </Button>
          <Button scheme="primary" variant="ghost">
            primary
          </Button>
          <Button scheme="secondary" variant="ghost">
            secondary
          </Button>
          <Button scheme="success" variant="ghost">
            success
          </Button>
          <Button scheme="warning" variant="ghost">
            warning
          </Button>
        </div>
      </div>

      <div className="col">
        Highlight
        <div className="row">
          <Button scheme="danger" variant="highlight">
            danger
          </Button>
          <Button scheme="info" variant="highlight">
            info
          </Button>
          <Button scheme="primary" variant="highlight">
            primary
          </Button>
          <Button scheme="secondary" variant="highlight">
            secondary
          </Button>
          <Button scheme="success" variant="highlight">
            success
          </Button>
          <Button scheme="warning" variant="highlight">
            warning
          </Button>
        </div>
      </div>
    </div>
  )
}