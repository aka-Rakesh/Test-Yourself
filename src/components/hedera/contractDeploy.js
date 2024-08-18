import abi from "../../contracts/abi.js";
import bytecode from "../../contracts/bytecode.js";
import { ContractFactory } from "ethers";
import { useEthersSigner } from "../../components/hedera/signer";

async function contractDeployFcn(walletData) {
	console.log(`\n=======================================`);
	console.log(`- Deploying smart contract on Hedera...🟠`);

	// DEPLOY SMART CONTRACT
	const signer = useEthersSigner()
	let contractAddress;
	try {
		const gasLimit = 4000000;

		const myContract = new ContractFactory(abi, bytecode, signer);
		const contractDeployTx = await myContract.deploy({ gasLimit: gasLimit });
		const contractDeployRx = await contractDeployTx.deployTransaction.wait();
		contractAddress = contractDeployRx.contractAddress;
		console.log(`- Contract deployed to address: \n${contractAddress} ✅`);
	} catch (deployError) {
		console.log(`- ${deployError.message.toString()}`);
	}
	return contractAddress;
}
export default contractDeployFcn;