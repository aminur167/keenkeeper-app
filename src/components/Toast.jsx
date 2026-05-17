export default function Toast({ message }) {
  return (
    <div className="toast toast-end toast-bottom z-50">
      <div className="alert rounded border-0 bg-[#1f5c49] text-sm font-bold text-white shadow-xl">
        <span>{message}</span>
      </div>
    </div>
  );
}
