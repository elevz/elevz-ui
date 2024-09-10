import { Container, Dropdown, Select } from "@lib/components";

export default function DropdownPage() {
  return (
    <Container>
      <Dropdown
        label="Dropdown"
        options={options}
        searchable
        className="mb-4"
        optionLabelKey="ticker"
      />

      <Select
        label="Select"
        options={options}
        placeholder="Select an item"
        onChange={({ target }) => console.log(target.value)}
        labelKey="ticker"
      />
    </Container>
  )
}

const options = [
  {
    "id": 1,
    "ticker": "AZUL4",
    "name": "AZUL PN ATZ",
    "price": "4.86",
    "type": "STOCK",
    "created_at": "2024-09-03T21:44:51.000000Z",
    "updated_at": "2024-09-03T21:44:51.000000Z"
  },
  {
    "id": 2,
    "ticker": "HAPV3",
    "name": "HAPVIDA",
    "price": "4.37",
    "type": "STOCK",
    "created_at": "2024-09-03T21:44:51.000000Z",
    "updated_at": "2024-09-03T21:44:51.000000Z"
  },
  {
    "id": 3,
    "ticker": "B3SA3",
    "name": "B3",
    "price": "12.15",
    "type": "STOCK",
    "created_at": "2024-09-03T21:44:51.000000Z",
    "updated_at": "2024-09-03T21:44:51.000000Z"
  },
  {
    "id": 4,
    "ticker": "PETR4",
    "name": "PETROBRAS PN",
    "price": "38.53",
    "type": "STOCK",
    "created_at": "2024-09-03T21:44:51.000000Z",
    "updated_at": "2024-09-03T21:44:51.000000Z"
  },
  {
    "id": 5,
    "ticker": "COGN3",
    "name": "COGNA",
    "price": "1.35",
    "type": "STOCK",
    "created_at": "2024-09-03T21:44:51.000000Z",
    "updated_at": "2024-09-03T21:44:51.000000Z"
  },
]