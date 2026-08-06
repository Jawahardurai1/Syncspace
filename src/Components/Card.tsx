

  type Cardcontent={
        description:string,
        image:string
    }
function Card({description,image}:Cardcontent)
{
 
    return(
        <>
        <div className="flex flex-col gap-3 mt-8 m-10 rounded">
             
            <img src={image} alt="no image found" className="hover:scale-105 transition duration 200 object-cover rounded-xl shadow-x"/>
            <div className=" mt-2 text-slate-600">{description}</div>
           
        </div>
        
        </>
    );
}
export default Card