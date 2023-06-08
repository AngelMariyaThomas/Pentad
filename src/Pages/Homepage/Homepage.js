import React from 'react'
import Movingtext from '../../Components/moving/Movingtext'
import Navbar from '../../Components/navbar/Navbar'
import Animation from '../../Components/animation/Animation'
import Chooseproducts from '../../Components/Chooseproducts/Chooseproducts'
import Aboutcompany from '../../Components/Aboutcompany/Aboutcompany'
import Ourplatforms from '../../Components/Ourplatforms/Ourplatforms'
import Memberbroker from '../../Components/Memberbroker/Memberbroker'
import Recentvlogs from '../../Components/Recentvlogs/Recentvlogs'
import Footer from '../../Components/Footer/Footer'



function Homepage() {
  return (
    <div>
        <Movingtext/>
        <Navbar/>
        <Animation/>
        <Chooseproducts/>
        <Aboutcompany/>
        <Ourplatforms/>
        <Memberbroker/>
        <Recentvlogs/>
        <Footer/>
     
       

    </div>
  )
}

export default Homepage