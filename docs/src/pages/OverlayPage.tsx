import React, { useState } from "react";
import { Button, Dialog, Overlay } from "elevz-ui";

export default function OverlayPage() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="page">
      <div className="col">
        <Overlay />
        <Button onClick={() => setVisible(true)}>
          Dialog
        </Button>

        <Dialog
          title="Dialog Title"
          message="Dialog Message"
          onBackdropClick={() => setVisible(false)}
          onConfirm={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          visible={visible}
        />
      </div>
    </div>
  );
}