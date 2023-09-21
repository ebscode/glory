import { Link, useNavigate  } from "react-router-dom";


const Pro = ({p}) => {
   
 const navigate=useNavigate()
 const handleclick=()=>{
    navigate(`/detail/${p.id}`)

 }

      

    return (
        <div>
          <div className="card w-auto bg-base-100 h-2/3 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={p.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{p.title}</h2>
    <p>{p.category}</p>
    <div className="card-actions">
        
      <button onClick={handleclick} className="btn btn-primary">details</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Pro;