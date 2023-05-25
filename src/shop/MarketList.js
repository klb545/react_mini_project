const MarketList = ({allArtData, randomArtWork1, randomArtWork2, randomArtWork3}) => {

    return ( 
        <div>
            <h2>Market - unavailable, coming soon</h2>
            <div className="market-list">
                <div>
                    <img src={randomArtWork1.image_uri}/>
                    <br/>
                    <strong>{`${randomArtWork1.name["name-EUen"][0].toUpperCase() + randomArtWork1.name["name-EUen"].substring(1)}`}</strong>
                    <br/><br/>
                    {randomArtWork1["museum-desc"]}
                    <br/><br/>
                    <strong>Price: £{randomArtWork1["buy-price"]}</strong>
                </div>
                <div>
                    <img src={randomArtWork2.image_uri}/>
                    <br/>
                    <strong>{`${randomArtWork2.name["name-EUen"][0].toUpperCase() + randomArtWork2.name["name-EUen"].substring(1)}`}</strong>
                    <br/><br/>
                    {randomArtWork2["museum-desc"]}
                    <br/><br/>
                    <strong>Price: £{randomArtWork2["buy-price"]}</strong>
                </div>
                <div>
                    <img src={randomArtWork3.image_uri}/>
                    <br/>
                    <strong>{`${randomArtWork3.name["name-EUen"][0].toUpperCase() + randomArtWork3.name["name-EUen"].substring(1)}`}</strong>
                    <br/><br/>
                    {randomArtWork3["museum-desc"]}
                    <br/><br/>
                    <strong>Price: £{randomArtWork3["buy-price"]}</strong>
                </div>
            </div>
        </div>
     );
}
 
export default MarketList;























