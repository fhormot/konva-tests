import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Line } from 'react-konva';

function App() {
  const [rectangles, setRect] = useState([]);
  const stageRef = useRef(null);

  const grid = 10

  const linesA = []
  const linesB = []

  for (let i = 0; i < window.innerWidth / grid; i++) {
    linesA.push(
      <Line
        strokeWidth={i%5 ? 0.25 : 0.5}
        stroke={'gray'}
        points={[i * grid, 0, i * grid, window.innerWidth]}
      />
    )

    linesB.push(
      <Line
        strokeWidth={i%5 ? 0.25 : 0.5}
        stroke={'gray'}
        points={[0, i * grid, window.innerWidth, i * grid]}
      />
    )
  }

  function snapToGrid (e) {
    e.target.to({
      x: Math.round(e.target.x() / grid) * grid,
      y: Math.round(e.target.y() / grid) * grid,
    })
  }

  return (
    <Stage 
      width={window.innerWidth} 
      height={window.innerHeight} 
      ref={stageRef}
    >
      <Layer>
          {linesA}
          {linesB}
        </Layer>
      <Layer>
      <Rect
          name="testRect"
          x={20}
          y={20}
          width={100}
          height={100}
          fill="red"
          onDragEnd={snapToGrid}
          draggable
        />
      </Layer>
    </Stage>
  );
}

export default App;
