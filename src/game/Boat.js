const Boat = ({containerHeight, containerWidth, positionX, positionY, boatImage}) => {
    const blue = <div className="pixel boat-blue-pixel"></div>;
    const yellow = <div className="pixel boat-yellow-pixel"></div>;
    const black = <div className="pixel black-pixel"></div>;
    const transparent = <div className="pixel"></div>;
    const brown = <div className="pixel boat-brown-pixel"></div>;
    const gray = <div className="pixel boat-gray-pixel"></div>;
    const cream = <div className="pixel boat-cream-pixel"></div>
    const pink = <div className="pixel boat-pink-pixel"></div>
    const red = <div className="pixel boat-red-pixel"></div>
  
    const row1 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{blue}{transparent}{transparent}{transparent}{transparent}{transparent}</div>
    const row2 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{transparent}{brown}{transparent}{transparent}{transparent}</div>
    const row3 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{blue}{blue}{blue}{blue}{transparent}{brown}{brown}{transparent}{transparent}</div>
    const row4 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{yellow}{yellow}{yellow}{yellow}{yellow}{yellow}{transparent}{brown}{brown}{brown}{transparent}</div>
    const row5 = <div>{transparent}{transparent}{transparent}{transparent}{blue}{blue}{blue}{blue}{blue}{blue}{blue}{blue}{transparent}{brown}{brown}{brown}</div>
    const row6 = <div>{transparent}{transparent}{transparent}{black}{black}{black}{black}{black}{black}{black}{black}{black}{cream}{brown}{brown}{brown}</div>
    const row7 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{pink}{red}{pink}{red}{pink}{red}{transparent}{cream}{brown}{brown}{brown}</div>
    const row8 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{pink}{red}{pink}{red}{transparent}{transparent}{brown}{brown}{brown}</div>
    const row9 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{pink}{red}{transparent}{transparent}{brown}{brown}{brown}{transparent}{transparent}</div>
    const row10 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{red}{transparent}{transparent}{brown}{brown}{transparent}{transparent}</div>
    const row11 = <div>{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{transparent}{brown}{transparent}{transparent}{transparent}</div>
  
    return (
      <div
        className="sprite boat-sprite"
        style={{
          height: "60px",
          width: "60px",
          display: "flex",
          position: "absolute",
          left: `${positionX}px`,
          top: `${positionY}px`,
        }}
      >
        {boatImage === "heading right" ? <>{row1}{row2}{row3}{row4}{row5}{row6}{row7}{row8}{row9}{row10}{row11}</> : <>{row11}{row10}{row9}{row8}{row7}{row6}{row5}{row4}{row3}{row2}{row1}</>}
      </div>
    );
  
  };
 
export default Boat;