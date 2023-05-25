import { useState} from "react";
import Treasure from "./Treasure";
import Boat from "./Boat";

const GameContainer = ({containerWidth, containerHeight, addFishToCaughtFishList, treasurePositionX, treasurePositionY}) => {
    
    const [boatPositionX, setBoatPositionX] = useState(200);
    const [boatPositionY, setBoatPositionY] = useState(200);
    const [boatImage, setboatImage] = useState("heading left");
    
    const boatSpeed = 5;

    const checkIfNearFish = () => {
        const proximityLimit = 40;
        const distance = Math.sqrt(Math.pow(boatPositionX - treasurePositionX, 2) + Math.pow(boatPositionY - treasurePositionY, 2));
        if (distance <= proximityLimit) {
            addFishToCaughtFishList();
          }
    }

    const moveRight = () => {
        if(boatPositionX <= containerWidth - 70){
            setBoatPositionX(boatPositionX + boatSpeed);
            setboatImage("heading right");
        }
    }
    const moveLeft = () => {
        if(boatPositionX >= 10){
            setBoatPositionX(boatPositionX - boatSpeed);
            setboatImage("heading left");
        }
    }
    const moveDown = () => {
        if(boatPositionY <= containerHeight - 80){
            setBoatPositionY(boatPositionY + boatSpeed);
        }
    }
    const moveUp = () => {
        if(boatPositionY >= 0){
            setBoatPositionY(boatPositionY - boatSpeed);
        }
    }

    window.onkeydown = function(e){
        if(e.code === 'ArrowRight'){
            e.preventDefault();
            moveRight();
        }
        if(e.code === 'ArrowLeft'){
            e.preventDefault();
            moveLeft();
        }
        if(e.code === 'ArrowDown'){
            e.preventDefault();
            moveDown();
        }
        if(e.code === 'ArrowUp'){
            e.preventDefault();
            moveUp();
        }
        checkIfNearFish();
    }

    return ( 
        <div className="game-water-container" style={{height: `${containerHeight}px`, width: `${containerWidth}px`}}>
            <Treasure containerHeight={containerHeight} containerWidth={containerWidth} positionX={treasurePositionX} positionY={treasurePositionY} addFishToCaughtFishList={addFishToCaughtFishList}/>
            <Boat containerHeight={containerHeight} containerWidth={containerWidth} positionX={boatPositionX} positionY={boatPositionY} boatImage={boatImage}/>
        </div>
     );

}
 
export default GameContainer;
