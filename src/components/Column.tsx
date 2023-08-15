import React, { useCallback, useMemo } from "react";
import { useDrop } from "react-dnd";
import Card, { CardProps } from "./Card";
import styles from "../styles/Column.module.css";

interface ColumnProps {
  title: string;
  cards: string[];
  columnId: string;
  onCardDrop: (
    cardId: string,
    sourceColumn: string,
    targetColumn: string
  ) => void;
}

const Column: React.FC<ColumnProps> = ({
  title,
  cards,
  columnId,
  onCardDrop,
}) => {
  const cardCount = useMemo(() => cards.length, [cards]);
  const dropHandler = useCallback(
    (item: CardProps) => {
      if (cards) {
        onCardDrop(item.cardId, item.sourceColumn, columnId);
      }
    },
    [cards, columnId, onCardDrop]
  );

  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: dropHandler,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={styles.column}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <h3 className={styles.columnSubtitle}>{cardCount} tasks</h3>
      {cards.map((cardId) => (
        <Card
          key={cardId}
          cardId={cardId}
          sourceColumn={columnId}
          text={cardId}
        />
      ))}
      {!isOver && cardCount === 0 && (
        <p className={styles.dragSomeOver}>
          Drag some cards to add them to this column.
        </p>
      )}
      {isOver && <div className={styles.dropIndicator}>Drop here</div>}
    </div>
  );
};

export default Column;
