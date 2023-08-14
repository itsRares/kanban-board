import React from "react";
import { useDrag } from "react-dnd";
import styles from "../styles/Card.module.css";

export interface CardProps {
  cardId: string;
  sourceColumn: string;
  text: string;
}

const Card: React.FC<CardProps> = React.memo(
  ({ cardId, sourceColumn, text }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "CARD",
      item: { cardId, sourceColumn },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });

    return (
      <div
        className={`${styles.card} ${isDragging ? styles.dragging : ""}`}
        ref={drag}
      >
        {text}
      </div>
    );
  }
);

export default Card;
