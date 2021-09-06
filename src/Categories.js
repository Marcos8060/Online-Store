import React from 'react'

function Categories({categories, filterItems}) {
    return (
        <div className='btn_container'>
            {categories.map((category, index)=>{
                return(
                    <div className="btn">
                        <button
                            type='button'
                            key={index}
                            onClick={()=> filterItems(category)} >
                            {category}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories
