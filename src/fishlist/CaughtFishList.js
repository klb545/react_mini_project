import CaughtFish from "./CaughtFish"

const CaughtFishList = ({caughtFishList, wallet, increaseWallet, removeFromCaughtFishList}) => {
    
    // const list = caughtFishList.map(fishObject => <CaughtFish key={fishObject.id} fishObject={fishObject} wallet={wallet} increaseWallet={increaseWallet} removeFromCaughtFishList={removeFromCaughtFishList}/>);
    

    const list = caughtFishList.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)).map(fishObject => <CaughtFish key={fishObject.id} fishObject={fishObject} wallet={wallet} increaseWallet={increaseWallet} removeFromCaughtFishList={removeFromCaughtFishList}/>);

    const listOfPrices = caughtFishList.map(fishObject => fishObject.price / 50);
    const totalValue = Math.round(listOfPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

    return ( 
        <div className="caught-fish">
            <h2>Fish Collection</h2>
            <h3>Total value of collection:&emsp;£{totalValue} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Wallet:&emsp;£{wallet}</h3>
            {/* <h4>Wallet: £{wallet}</h4> */}
            <table className="table">
                <tbody>
                    <tr>
                        <td><strong>Click to Sell</strong></td>
                        <td><strong>Name</strong></td>
                        <td><strong>Rarity</strong></td>
                        <td><strong>Value</strong></td>
                        <td><strong>Quantity</strong></td>
                    </tr>
                    {list}
                </tbody>
            </table>
        </div>
     );
}
 
export default CaughtFishList;

