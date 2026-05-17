export default function TagList({ tags }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {tags.map((tag) => (
        <span key={tag} className="badge border-0 bg-emerald-50 px-2 py-2 text-[9px] font-black uppercase text-[#1f5c49]">
          {tag}
        </span>
      ))}
    </div>
  );
}
