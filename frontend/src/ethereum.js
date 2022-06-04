import detectEthereumProvider from "@metamask/detect-provider";
import { ethers, Contract } from "ethers";
import ToDoList from "./artifacts/contracts/ToDoList.sol/ToDoList.json";

const getBlockchain = () =>
  new Promise(async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if (provider) {
      await provider.request({ method: "eth_requestAccounts" });
      const networkId = await provider.request({ method: "net_version" });
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const todo = new Contract(
        "0x5fbdb2315678afecb367f032d93f642f64180aa3", // Smart contract address. Can change to .env.
        ToDoList.abi,
        signer
      );
      resolve({ todo });
      return;
    }
    reject("Install MetaMask.");
  });

export default getBlockchain;
