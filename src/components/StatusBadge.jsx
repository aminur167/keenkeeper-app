const statusClass = {
  overdue: "badge-error text-white",
  "almost due": "badge-warning text-white",
  "on-track": "bg-[#1f5c49] text-white"
};

export default function StatusBadge({ status }) 
{
  return <span className={`badge badge-sm border-0 px-3 py-2 text-[10px] font-black capitalize ${statusClass[status]}`}>{status}</span>;
}
