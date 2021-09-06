import React from 'react'

function ClearShop({clearShop, reload}) {
    return (
        <div className='clear_btn'>
            <button
             onClick={()=>clearShop()}>
                Not Interested
            </button>
        </div>
    )
}

export default ClearShop
