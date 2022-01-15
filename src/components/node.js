import styles from "../styles/Node.module.css";

export default function Node({
  col,
  row,
  isWall,
  isStart,
  isFinish,
  isShortestPath,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) {
  const extraClassName = isFinish
    ? styles.nodeFinish
    : isStart
    ? styles.nodeStart
    : isWall
    ? styles.nodeWall
    : isShortestPath
    ? styles.isShortestPath
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`${styles.node} ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    />
  );
}
