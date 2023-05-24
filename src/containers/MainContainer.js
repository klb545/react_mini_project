import { useState, useEffect } from "react";
import CaughtFishList from "../fishlist/CaughtFishList";
import GameContainer from "../game/GameContainer";

const MainContainer = () => {

    const [allFishData, setAllFishData] = useState([]);
    const [allCommonFish, setAllCommonFish] = useState(null);
    const [allUncommonFish, setAllUncommonFish] = useState(null);
    const [allRareFish, setAllRareFish] = useState(null);
    const [allUltrarareFish, setAllUltrarareFish] = useState(null);

    const [randomFishList, setRandomFishList] = useState([]);

    const [caughtFishList, setCaughtFishList] = useState([]);

    const [gameContainerWidth, setGameContainerWidth] = useState(600);
    const [gameContainerHeight, setGameContainerHeight] = useState(600);

    const [treasurePositionX, setTreasurePositionX] = useState(Math.floor(Math.random()*(gameContainerWidth-60)));
    const [treasurePositionY, setTreasurePositionY] = useState(Math.floor(Math.random()*(gameContainerHeight-60)));

    const [wallet, setWallet] = useState(0);

    const fetchAllFishData = async () => {
        const response = await fetch(`https://acnhapi.com/v1/fish/`);
        const fishJsonData = await response.json();
        const fishJsonDataArray = Object.values(fishJsonData);
        setAllFishData(fishJsonDataArray);
    }

    useEffect( () => {
        fetchAllFishData();
    }, [])    

    const addFishToCaughtFishList = () => {
        const randomFish = randomFishList[Math.floor(Math.random()*randomFishList.length)];
        if(!caughtFishList.some(fish => fish.id === randomFish.id)){
            setCaughtFishList([...caughtFishList, randomFish]);
        } else {
            // increase quantity in td
            const fishQuantity = document.querySelector(`#quantity_of_${randomFish.id}`);
            fishQuantity.innerText = parseInt(fishQuantity.innerText) + 1;
        }
        // setTreasurePositionX(Math.floor(Math.random()*(gameContainerWidth-60)));
        // setTreasurePositionY(Math.floor(Math.random()*(gameContainerHeight-60)));
        moveTreasure();
    }

    useEffect( () => {
        if(allFishData !== null) {
            setAllCommonFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Common" ));
            setAllUncommonFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Uncommon" ));
            setAllRareFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Rare" ));
            setAllUltrarareFish(allFishData.filter( fishObject => fishObject.availability.rarity === "Ultra-rare" ));
            setRandomFishList(allFishData.concat(allCommonFish).concat(allCommonFish).concat(allCommonFish).concat(allUncommonFish).concat(allUncommonFish).concat(allRareFish));
        }
    }, [allFishData])

    const increaseWallet = (priceOfFish) => {
        setWallet(Math.round(wallet + priceOfFish));
    }

    const removeFromCaughtFishList = (fishObject) => {
        setCaughtFishList(caughtFishList.filter(fishInList => fishInList != fishObject));
    }

    const moveTreasure = () => {
        setTreasurePositionX(Math.floor(Math.random()*(gameContainerWidth-60)));
        setTreasurePositionY(Math.floor(Math.random()*(gameContainerHeight-60)));
    }
    useEffect(()=>{
        const intervalId = setInterval(moveTreasure,7000);
        return () => {
            clearInterval(intervalId);
        }
    }, [])
    


    return ( 
        <div className="main-container">
            <GameContainer containerWidth={gameContainerWidth} containerHeight={gameContainerHeight} addFishToCaughtFishList={addFishToCaughtFishList} treasurePositionX={treasurePositionX} treasurePositionY={treasurePositionY} />
            <CaughtFishList caughtFishList={caughtFishList} wallet={wallet} increaseWallet={increaseWallet} removeFromCaughtFishList={removeFromCaughtFishList}/>
        </div>
     );
}
 
export default MainContainer;











