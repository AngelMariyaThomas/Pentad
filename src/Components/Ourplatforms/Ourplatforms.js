import React from 'react'
import "./Ourplatforms.css"

function Ourplatforms() {
  return (
     
    <section>
    <div className='my-div'>
        <h1>Our Platforms</h1>
        <p>Pentad Securities operates through various platforms for the ease of our customers and to provide a
            pleasant investment experience.</p>
        <div className='image-section'>
            <div className='left-section'>
                <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/01/Pen_for-site.png" alt=""/><br/><br/>
                <img className='small-image' src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/01/Pen-1.svg" alt=''  />
              
                <div className='jk'>
                    <h3 id="boxhading"> PEN </h3><br/>
                    <p className='page4p'>Trading and Investment for Equity, ETFS, and Derivatives Products</p>
                </div>
                <div class="wrap"> <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/12/qrcode-pen.png" alt=""/>
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/google-play-1.svg" alt=""/>
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/app-store-1.svg" alt=""/>
                    <button className='nwbutton'>Know More</button>
                </div>
            </div>
            <div className='right-section'>
                <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/01/Box_for-site.png" alt=""/><br/><br/>
                <img className='small-image' src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/01/Box.svg" alt=""/>
                <div className='jk'>
                    <h3 id="boxhading"> BOX </h3><br/>
                    <p className='page4p'>Platform and Dashboard to Observe Your Fund’s Performance.</p>
                </div>
                <div className='wrap'>
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/05/google-play-1.svg" alt=""/>
                    <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/apple_store.svg" alt=""/>
                    <button class="nwbutton">Know More</button>
                </div>

            </div>
        </div>
    </div>

</section>
  )
}

export default Ourplatforms