import React, { useState } from "react";
import { Button, Flex, useToast } from "elevz-ui";

export default function () {
  const toast = useToast();
  const [id, setId] = useState<string>();

  function showToast() {
    const { id } = toast({
      position: 'top-center',
      message: 'Success toast',
      type: 'success',
      loading: true,
      duration: -1,
    });
    setId(id);
  }

  function removeToast() {
    toast.remove(id!)
  }

  function updateToast() {
    toast.update(id!, { message: 'Update message', type: 'info' });
  }

  return (
    <Flex className="page">
      <Flex direction="column" gap={10}>
        Toast Top Center
        <Flex gap="inherit" direction="row" borderBottom="1px solid gray" paddingBottom={10}>
          <Button onClick={showToast}>Show</Button>
          <Button onClick={removeToast}>Close</Button>
          <Button onClick={updateToast}>Update</Button>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Button
          onClick={() => toast({
            position: 'bottom-center',
            message: 'Success toast',
            type: 'info',
            icon: 'github'
          })}
        >
          Bottom Center
        </Button>

      </Flex>

    </Flex>
  );
}