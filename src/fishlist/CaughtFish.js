const CaughtFish = ({fishObject, increaseWallet, removeFromCaughtFishList}) => {

    const handleClick = (e) => {
        const element = document.querySelector(`#quantity_of_${fishObject.id}`);
        if(element.innerText == "1"){
            removeFromCaughtFishList(fishObject);
        } else {
            element.innerText = parseInt(element.innerText) - 1;
        }
        increaseWallet(fishObject.price / 50);
    }

    return ( 
        <tr className="fish-table-row">
            <td><button onClick={(e) => handleClick(e)}><img src={fishObject.icon_uri} style={{width: "40px"}}/></button></td>
            <td>{fishObject.name["name-EUen"][0].toUpperCase() + fishObject.name["name-EUen"].substring(1)}</td>
            <td><p>{fishObject.availability.rarity}</p></td>
            <td><p>£{fishObject.price / 50}</p></td>
            <td id={`quantity_of_${fishObject.id}`}>1</td>
        </tr>
    )
}
 
export default CaughtFish;