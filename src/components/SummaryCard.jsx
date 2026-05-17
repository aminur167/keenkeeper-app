export default function SummaryCard({ compact = false, title, value }) {
  return (
    <article className={`${compact ? "min-h-[96px]" : "min-h-[92px]"} card rounded border border-slate-100 bg-white shadow-sm`}>
      <div className={`card-body items-center justify-center text-center ${compact ? "p-4" : "p-4"}`}>
        <strong className={`${compact ? "text-2xl" : "text-xl"} leading-none text-[#1f5c49]`}>{value}</strong>
        <span className="text-[11px] font-bold text-slate-500">{title}</span>
      </div>
    </article>
  );
}
