import { Container, Dropdown } from "@lib/components";

export default function DropdownPage() {
  return (
    <Container>
      <Dropdown
        label="Dropdown"
        options={Array.from({ length: 8 }).map((_, i) => "Value " + (i + 1))}
        searchable
      />
    </Container>
  )
}