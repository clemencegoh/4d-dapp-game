import { useDisclosure } from "@chakra-ui/react";
import "./App.css";
import AccountModal from "./components/AccountModal";
import ConnectButton from "./components/ConnectButton";
import Layout from "./components/Layout";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </div>
  );
}

export default App;
