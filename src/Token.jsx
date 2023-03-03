import React, { useEffect, useState } from "react";
import Connect from "./components/connect";
import { useAccount, useContractRead } from "wagmi";
import TokenABI from "./token_abi.json";
import { ethers } from "ethers";

function Token() {
  const { address } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    address: "0x759B7B7De07289224a50113378ab5b8913E349e9",
    abi: TokenABI,
    functionName: "balanceOf",
    args: [address],
  });

  useEffect(() => {
    setTimeout(() => {
    //   console.log("Balance: ",  ethers.utils.formatUnits( data )  );
      console.log("Balance: ",  String( data )  );
    }, 5000);
  }, []);

  //   const [account, setAccount] = useState("");
  // async function handleClick(event){
  //     const {ethereum} = window
  //     const accountReturned = await ethereum.request({method : "eth_requestAccounts"});
  //     setAccount(accountReturned[0]);
  //     console.log(accountReturned[0], window);
  //     event.preventDefault();

  // }

  return (
    <div>
      <Connect />

      <br />
      {address}


    </div>
  );
}

export default Token;
