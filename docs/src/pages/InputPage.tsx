import React from "react";
import { Input } from "elevz-ui";

export default function InputPage() {
  return (
    <div className="page">
      <div className="col">
      <Input
        leftIcon={{
          name: "arrow-left"
        }}

        rightIcon={{
          name: "arrow-left"
        }}
      />
      <Input
        label="Label"
        helper="input helper text"
      />
      <Input
        invalid
      />
      </div>
    </div>
  );
}