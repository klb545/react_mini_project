import CaughtFish from "./CaughtFish"

const CaughtFishList = ({caughtFishList, wallet, increaseWallet, removeFromCaughtFishList}) => {
    
    const list = caughtFishList.map(fishObject => <CaughtFish key={fishObject.id} fishObject={fishObject} wallet={wallet} increaseWallet={increaseWallet} removeFromCaughtFishList={removeFromCaughtFishList}/>);
    
    const listOfPrices = caughtFishList.map(fishObject => fishObject.price / 50);
    const totalValue = Math.round(listOfPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0));

    return ( 
        <div className="caught-fish">
            <h2>My Collection</h2>
            <h4>Total value of collection: £{totalValue}</h4>
            <h4>Wallet: £{wallet}</h4>
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

