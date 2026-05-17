import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge.jsx";
import TagList from "./TagList.jsx";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <article
      className="card min-h-[185px] cursor-pointer rounded border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#1f5c49]"
      onClick={() => navigate(`/friends/${friend.id}`)}
      onKeyDown={(event) => event.key === "Enter" && navigate(`/friends/${friend.id}`)}
      tabIndex="0"
    >
      <img className="mx-auto size-[58px] rounded-full object-cover" src={friend.picture} alt={friend.name} />
      <div className="mt-3 grid justify-items-center gap-2">
        <h3 className="text-[13px] font-black text-slate-800">{friend.name}</h3>
        <p className="text-xs font-bold text-slate-500">{friend.days_since_contact} days ago</p>
        <TagList tags={friend.tags} />
        <StatusBadge status={friend.status} />
      </div>
    </article>
  );
}
