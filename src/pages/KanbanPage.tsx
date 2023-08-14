import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "../components/Board";
import styles from "../styles/KanbanPage.module.css";

const KanbanPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <DndProvider backend={HTML5Backend}>
          <Board />
        </DndProvider>
      </div>
    </div>
  );
};

export default KanbanPage;
