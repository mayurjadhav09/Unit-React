import "./groscy.css"

export const GrocyList=({title,status,id,delGrocy,togGrocy})=>{
    return(
        
        <div className="list">
            
            <table>
              
              <th>
              <li>
           
                {title }       |{ status ?"Done" : "Not Done"}|
            <button onClick={(e)=>{
                delGrocy(e.id)
            }}>Delete</button>
             <input className="checkbox" type="checkbox" />

          
            </li>
              </th>
              
            </table>
        
           
        </div>
    )
}