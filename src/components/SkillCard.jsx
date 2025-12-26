import { Link } from "react-router-dom";

const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <figure className="relative h-48 overflow-hidden">
        <img src={skill.image} alt={skill.skillName} className="group-hover:scale-110 transition-transform duration-500 object-cover w-full h-full" />
        <div className="absolute top-3 left-3 badge badge-primary font-bold p-3">${skill.price}</div>
      </figure>
      <div className="card-body p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">{skill.category}</span>
          <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
            <span>★</span> {skill.rating}
          </div>
        </div>
        <h2 className="card-title text-gray-800 text-lg mb-1">{skill.skillName}</h2>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">{skill.description}</p>
        <div className="card-actions">
          <Link to={`/skill/${skill.skillId}`} className="btn btn-outline btn-primary btn-block btn-sm rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;