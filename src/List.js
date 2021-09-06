import React from 'react'


function List({goods, remove}) {
    return (
        
        <div className="section">
            {goods.map((good)=>{
                    const {id,title,img,category,price,desc} = good;
                    return(
                        <article key={id}>
                            <div className="img_box">
                                <img src={img} alt={title} />
                            </div>
                            <div className="section_info">
                               <header>
                                   <h5>{title}</h5>
                                   <h6>${price}</h6>
                               </header>
                               <p className='desc'>{desc}</p>
                               <div className="btn">
                                   <button>Add</button>
                                   <button onClick={()=> remove(id)}>Remove</button>
                               </div>
                            </div>
                        </article>
                    )
                })}   
        </div>

    )
}

export default List
