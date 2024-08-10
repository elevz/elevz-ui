import {
  Button,
  Card,
  Container,
  Dropdown,
  Layout,
  NavGroup,
  NavLink,
  Sidebar
} from "@lib/components";
import { setTheme } from "@lib/utils";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <Layout>
      <Sidebar>
        <NavLink
          active
          label="Home"
          leftIcon="home"
        />
        <NavLink
          label="Settings"
          leftIcon="settings"
        />

        <NavGroup leftIcon="calendar" label="Scheduler">
          <NavLink
            label="Create"
          />
          <NavLink
            label="Update"
          />
        </NavGroup>
      </Sidebar>
      <Container>
        <Card>
          <Card.Body>
            <Button
              label="Button"
            />

            <Dropdown
              placeholder="Pick an item"
            />
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}


export default App;