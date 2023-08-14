import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Column from "./Column";
import { RootState } from "../redux/store";
import { moveCard } from "../redux/actions";
import styles from "../styles/Board.module.css";

const Board: React.FC = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state: RootState) => state.columns);

  const handleCardDrop = (
    cardId: string,
    sourceColumn: string,
    targetColumn: string
  ) => {
    dispatch(moveCard(cardId, sourceColumn, targetColumn));
  };

  return (
    <div className={styles.board}>
      {Object.keys(columns).map((columnId) => (
        <Column
          key={columnId}
          title={columns[columnId].title}
          cards={columns[columnId].cards}
          columnId={columnId}
          onCardDrop={handleCardDrop}
        />
      ))}
    </div>
  );
};

export default Board;
