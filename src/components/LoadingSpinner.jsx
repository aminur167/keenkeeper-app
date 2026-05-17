export default function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="grid min-h-60 place-items-center gap-3 text-sm font-bold text-slate-500">
      <span className="loading loading-spinner loading-lg text-[#1f5c49]" />
      <span>{label}</span>
    </div>
  );
}
