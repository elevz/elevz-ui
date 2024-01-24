import React from "react";
import { Flex, Text } from "elevz-ui";

export default function TextPage() {
  return (
    <Flex className="page">
      <Text as="h1">
        Hello from Text Component as h1
      </Text>
      <Text as="h2">
        Hello from Text Component as h2
      </Text>
      <Text as="h3">
        Hello from Text Component as h3
      </Text>
      <Text as="h4">
        Hello from Text Component as h4
      </Text>
      <Text bold as="p">
        Hello from Text Component as p
      </Text>
      <Text as="span" marginTop={20}>
        Hello from Text Component as span
      </Text>
    </Flex>
  )
}