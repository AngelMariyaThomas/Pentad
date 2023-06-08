import React from 'react'
import "./Chooseproducts.css"

function Chooseproducts() {
  return (

    <div id="page2">
    <div className='equity'>
    <div>
        <h1 className='page2heading'>Choose From Products</h1>
    </div>
    <br/>
    <br/>
    <div className='equity'>
    <div className='button-navigation'>
       
        <div className='button-container'>
            <button className='button1'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/equity-2.svg" alt=''/>Equity</button>
            <button className='button2'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/mutual-funds-1.svg" alt=''/>Mutual Funds</button>
            <button className='button3'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/future-and-option.svg" alt=''/>Future and Option</button>
            <button className='button4'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/fixed-deposit.svg" alt=''/> Fixed deposit</button>
            <button className='button5'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/bonds.svg" alt=''/>Bonds</button>
            <button className='button6'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/ulisted_shares.svg" alt=''/>Unlisted Shares</button>
            <button className='button7'><img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/exchange-traded-funds-2.svg" alt=''/>Exchange Traded Funds</button>
        </div>
       
    </div>
    <br/><br/><br/><br/>
    <div className='content'>
        <div className='left1'>
            <img class="image" src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/Bond-2-1.png.webp" alt=" "/>
        </div>
        <br/> <br/><br/>
        <div className='right1'>
            
            <div className='bond'>
                <h1>Product
                    Better Option for Fixed Income Product</h1>
                    <br/>
                    <button >Know More</button>
            </div>
        </div>
        </div>
    </div>
</div>
<br/><br/><br/><br/>

</div>
  )
}

export default Chooseproducts