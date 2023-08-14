export const MOVE_CARD = "MOVE_CARD";

export function moveCard(
  cardId: string,
  sourceColumn: string,
  targetColumn: string
) {
  return {
    type: MOVE_CARD,
    payload: { cardId, sourceColumn, targetColumn },
  };
}
