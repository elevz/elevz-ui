import {
  Container,
  Layout,
  NavButton,
  Sidebar,
} from "@lib/components";
import { combineClassName } from "@lib/utils";
import { useState } from "react";
import Icon from "elevz-icon";
import DropdownPage from "./pages/DropdownPage";
import * as pages from "./pages";

function App() {
  const [page, setPage] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Layout>
      <Sidebar
        className={combineClassName("w-80 p-5", [!visible, "hidden"])}
        onBackdropClick={() => setVisible(false)}
        visible={visible}
      >
        {Object.keys(pages).map((name, i) =>
          <NavButton
            key={i}
            active={i === page}
            label={name}
            onClick={() => setPage(i)}
          />
        )}
      </Sidebar>

      <Container className="gap-4">
        <span onClick={() => {
          setVisible(!visible); console.log("clicked");
        }} className="cursor-pointer">
          <Icon
            className="text"
            name="bars"
          />
        </span>
        <DropdownPage />
      </Container>
    </Layout>
  )
}


export default App;