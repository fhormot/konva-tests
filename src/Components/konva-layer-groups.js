import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Circle } from 'react-konva';

function App() {
  const [rectangles, setRect] = useState([
    {x: 20, y: 20, width: 100, height: 100, fill:'red', layer: 1},
    {x: 70, y: 70, width: 100, height: 100, fill:'green', layer: 2},
    {x: 120, y: 120, width: 100, height: 100, fill:'black', layer: 2}
  ]);
  const stageRef = useRef(null);

  function sortObjectsByLayer(objects) {
    return objects.reduce((acc, obj) => {
      const layer = obj.layer;
      if (!acc[layer]) {
        acc[layer] = [];
      }
      acc[layer].push(obj);
      return acc;
    }, []);
  }

  return (
    <Stage 
      width={window.innerWidth} 
      height={window.innerHeight} 
      ref={stageRef}
    >
      {sortObjectsByLayer(rectangles).map((eachLayer, layerIdx) => (
        <Layer id={layerIdx} draggable>
          {eachLayer.map((eachRect, rectIdx) => (
            <Rect 
              key={rectIdx}
              x={eachRect.x}
              y={eachRect.y}
              width={eachRect.width}
              height={eachRect.height}
              fill={eachRect.fill}
            />
          ))}
        </Layer>
      ))}
    </Stage>
  );
}

export default App;
