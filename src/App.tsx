import {
  Container,
  Layout,
} from "@lib/components";
import { useState } from "react";
import { Buttons } from "./pages";
import Icon from "elevz-icon";

function App() {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Layout>
      <Container className="gap-4">
        <span onClick={() => {
          setVisible(!visible); console.log("clicked");
        }} className="cursor-pointer">
          <Icon
            className="text"
            name="bars"
          />
        </span>
        {/* <DropdownPage /> */}
        <Buttons />
      </Container>
    </Layout>
  )
}


export default App;