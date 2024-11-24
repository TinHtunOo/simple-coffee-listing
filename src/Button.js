export default function Button({ children, available, onClick }) {
  return (
    <button className={available} onClick={onClick}>
      {children}
    </button>
  );
}
