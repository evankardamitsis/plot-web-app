"use client";

import { useState, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface Plant {
  id: string;
  name: string;
  icon: string;
}

const plantTypes: Plant[] = [
  { id: "tomato", name: "Tomato", icon: "🍅" },
  { id: "carrot", name: "Carrot", icon: "🥕" },
  { id: "lettuce", name: "Lettuce", icon: "🥬" },
  { id: "potato", name: "Potato", icon: "🥔" },
  { id: "pepper", name: "Pepper", icon: "🫑" },
];

interface PlantItemProps {
  id: string;
  name: string;
  icon: string;
}

const PlantItem = ({ id, name, icon }: PlantItemProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "plant",
    item: { id, name, icon },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as any}
      className={`glass-card p-4 flex items-center space-x-2 cursor-move ${isDragging ? "opacity-50" : "opacity-100"
        }`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-white">{name}</span>
    </div>
  );
};

interface PlotCellProps {
  x: number;
  y: number;
  plant: Plant | null;
  onDrop: (x: number, y: number, item: Plant) => void;
  onRemove: (x: number, y: number) => void;
}

const PlotCell = ({ x, y, plant, onDrop, onRemove }: PlotCellProps) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "plant",
    drop: (item: Plant) => onDrop(x, y, item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleClick = () => {
    if (plant) {
      onRemove(x, y);
    }
  };

  return (
    <div
      ref={drop as any}
      onClick={handleClick}
      className={`w-20 h-20 border border-white/20 rounded-md flex items-center justify-center ${isOver ? "bg-white/20" : plant ? "bg-white/10" : "bg-transparent"
        } transition-colors cursor-pointer`}
    >
      {plant && <span className="text-4xl">{plant.icon}</span>}
    </div>
  );
};

export default function PlotManager() {
  const [plot, setPlot] = useState<(Plant | null)[][]>(
    Array(5).fill(null).map(() => Array(5).fill(null))
  );

  const handleDrop = useCallback((x: number, y: number, item: Plant) => {
    setPlot((prevPlot) => {
      const newPlot = prevPlot.map((row) => [...row]);
      newPlot[y][x] = item;
      return newPlot;
    });
  }, []);

  const handleRemove = useCallback((x: number, y: number) => {
    setPlot((prevPlot) => {
      const newPlot = prevPlot.map((row) => [...row]);
      newPlot[y][x] = null;
      return newPlot;
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-4">
          <h2 className="text-2xl font-semibold text-white mb-4">Plants</h2>
          {plantTypes.map((plant) => (
            <PlantItem key={plant.id} {...plant} />
          ))}
        </div>
        <div className="md:w-3/4">
          <h2 className="text-2xl font-semibold text-white mb-4">Your Plot</h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-5 gap-2">
              {plot.map((row, y) =>
                row.map((cell, x) => (
                  <PlotCell
                    key={`${x}-${y}`}
                    x={x}
                    y={y}
                    plant={cell}
                    onDrop={handleDrop}
                    onRemove={handleRemove}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
