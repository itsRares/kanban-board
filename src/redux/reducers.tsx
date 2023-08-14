import { MOVE_CARD } from "./actions";

interface Column {
  title: string;
  cards: string[];
}

interface Columns {
  [key: string]: Column;
}

interface InitialState {
  columns: Columns;
}

const initialState: InitialState = {
  columns: {
    todo: {
      title: "To do",
      cards: [
        "Add Redux to the project",
        "Add React DnD to the project",
        "Clean up console logs",
        "Test efficiency of the project",
        "Test the project",
      ],
    },
    inprogress: {
      title: "In Progress",
      cards: [],
    },
    inreview: {
      title: "In Review",
      cards: [],
    },
  },
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MOVE_CARD: {
      const { cardId, sourceColumn, targetColumn } = action.payload;

      const updatedColumns = { ...state.columns };

      // Remove the card from the source column
      updatedColumns[sourceColumn].cards = updatedColumns[
        sourceColumn
      ].cards.filter((cardIdInSource) => cardIdInSource !== cardId);

      // Add the card to the target column
      updatedColumns[targetColumn].cards = [
        ...updatedColumns[targetColumn].cards,
        cardId,
      ];

      return {
        ...state,
        columns: updatedColumns,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
