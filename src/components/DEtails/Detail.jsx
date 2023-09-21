import { useLoaderData } from "react-router-dom";


const Detail = () => {
    const po=useLoaderData()
    
    return (
        <div>
           <div class="card card-compact w-72 h-[340px] mt-11 bg-base-100 shadow-xl">
  <figure><img src={po.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{po.title}</h2>
    <h3 className="text-xl font-medium"> $ {po.price}</h3>
  <p>{po.rating.rate}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Detail;