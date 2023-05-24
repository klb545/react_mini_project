const CaughtFish = ({fishObject, increaseWallet, removeFromCaughtFishList}) => {

    const handleClick = (e) => {
        increaseWallet(fishObject.price / 50);
        removeFromCaughtFishList(fishObject);
    }

    return ( 
        <tr className="fish-table-row">
            <td><button onClick={(e) => handleClick(e)}><img src={fishObject.icon_uri} style={{width: "50px"}}/></button></td>
            <td>{fishObject.name["name-EUen"][0].toUpperCase() + fishObject.name["name-EUen"].substring(1)}</td>
            <td><p>{fishObject.availability.rarity}</p></td>
            <td><p>£{fishObject.price / 50}</p></td>
            <td id={`quantity_of_${fishObject.id}`}>1</td>
        </tr>
    )
}
 
export default CaughtFish;