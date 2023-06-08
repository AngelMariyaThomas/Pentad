import React from 'react'
import"./Animation.css"

function Animation() {
  return (
    // animation page 

         <div className='carousel-container'>
            <div className='carousel'>
                <div className='page'>
                    
                    {/* animation page slide 1 content  */}

                    <div className='slide'>
                        <div className='left'>
                            <div className='text-container'>
                                <h1 className='resize' resize>Fixed Deposit</h1>
                               
                                <p className='description'>Earn better returns than bank interest at Corporate FDs, Peer to
                                    Peer Lending.
                                </p>
                               
                                <button className='button'>Request a callback</button>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Invest-in-Equity01.png.webp" alt=""/>
                        </div>
                    </div>
                </div>
                <div className='page'>
                    {/* Page 2 */}
                    {/* animation page slide 2 content  */}
                    <div className='slide'>
                        <div className='left'>
                            <div className='text-container'>
                                <h1 className='resize'>Intraday Trades</h1>
                                <p className='description'>Flat ₹20 per Order for F&O trades with advanced web portal and
                                    app
                                </p>
                                <button className='button'> Open an account</button>
                            </div>

                        </div>
                        <div className='right'>
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Intraday-Trades.png.webp" alt=" "/>
                        </div>
                    </div>
                </div>
                <div className='page'>
                     {/* Page 3 */}
                    {/* animation page slide 3 content  */}
                    <div className='slide'>
                        <div className='left'>
                            <div className='text-container'>
                                <h1 className='resize'>Invest in Equity</h1>
                                <p className='description'>Flat ₹20 per Order for F&O trades with advanced web portal and
                                    app
                                </p>
                                <button className='button'>Request a callback</button>
                            </div>

                        </div>
                        <div className='right'>
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Invest-in-Equity01.png.webp" alt=" "/>
                        </div>
                    </div>
                </div>
                <div className='page'>
                    {/* Page 4 */}
                    {/* animation page slide 4 content  */}
                    <div className='slide'>
                        <div className='left'>
                            <div className='text-container'>
                                <h1 className='resize'>Invest in mutual</h1>
                                <p className='description'>Invest in 2500+ mutual fund schemes in India
                                </p>
                                <button className='button'>Open an account</button>
                            </div>
                        </div>
                        <div className='right'>
                            <img src="https://www.pentadsecurities.com/engine/wp-content/uploads/2023/02/Invest-in-mutual-Funds.png.webp" alt=" "/>
                        </div>
                    </div>
          </div>
          </div>
          </div>
  )
}

export default Animation