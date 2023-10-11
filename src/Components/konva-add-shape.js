import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Circle } from 'react-konva';

const App = () => {
  const [circles, setCircles] = useState([]);
  const stageRef = useRef(null);

  return (
    <Stage 
      width={window.innerWidth} 
      height={window.innerHeight} 
      ref={stageRef}
    >
      <Layer>
        <Rect
          name="testRect"
          x={20}
          y={20}
          width={100}
          height={100}
          fill="red"
          draggable
          onDragEnd={(e) => {
            // Values have to be collected before useEffect is executed
            // Otherwise new values can be assigned in the state 
            var xVal = e.target.x();
            var yVal = e.target.y();

            setCircles((prevCircles) => [
              ...prevCircles,
              { x: xVal, y: yVal, fill: "red" }
            ]);

            var stage = stageRef.current;
            var shapeTarget = stage.findOne("." + e.target.attrs.name);
            shapeTarget.position({ x: 20, y: 20 });
          }}
        />

        {circles.map((eachCircle, idx) => (
          <Circle
            key={idx}
            x={eachCircle.x}
            y={eachCircle.y}
            radius={25}
            fill={eachCircle.fill}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default App;
