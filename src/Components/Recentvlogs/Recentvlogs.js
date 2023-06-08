import React from 'react'
import "./Recentvlogs.css"

function Recentvlogs() {
  return (
    <section>

    <h2 className='section-heading'>Recent Blogs</h2>
    <div className='section-content'>
        <div className='item'>
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/05/website-blog-poster-01-scaled.jpg.webp" alt=" "/>
            <div className='item-details'>
                <p class="date">May 25, 2023</p>
                <h3>How to do stock market investments?</h3>
                <p className='description'>How to do stock market investm...</p>
            </div>
        </div>
        <div className='item'>
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/Insurance-As-An-Investment-1.jpeg.webp" alt=" "/>
            <div className='item-details'>
                <p className='date'>June 6, 2022</p>
                <h3>Insurance as an investment</h3>
                <p class="description">Insurance is never an investment, rather a protection against risks and
                    contingencies.</p>
            </div>
        </div>
        <div className='item'>
            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2022/06/What-is-SIP-1.jpeg.webp" alt=" "/>
            <div className='item-details'>
                <p className='date'>June 6, 2022</p>
                <h3> What is SIP/Systematic Investment Plan</h3>
                <p className='description'>SIP or Systematic Investment Plan has been gaining immense popularity in
                    the financial mainstream these days. </p>
            </div>
        </div>
        
    </div>
    <button className='new'>View all Blogs</button>
    <br/><br/><br/><br/>
</section>

  )
}

export default Recentvlogs