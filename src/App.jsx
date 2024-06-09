import { useState } from 'react'

import PrimaryMenu from './component/PrimaryMenu'


import SidebarClaimSend from './CardComponents/SidebarClaimSend'
import Claim1 from './component/ClaimTest'
import ClaimP from './component/CaimP2'
import ClaimTemp from './component/ClaimTemp'
import SidebarCLaimView from './CardComponents/SidebarCLaimView'
import CoustmerSelect from './component/CoustmerSelect'
import SideBarProfile from './CardComponents/SideBarProfile'
import InsuranceRenew from './component/InsuranceRenew'
import Summary from './component/summery'
import Sidebar22 from './CardComponents/SideBarPayment'
import UserList from './component/Users'
import Navbar from './component/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="">
     <SideBarProfile/>
     </div>
    </>
  )
}

export default App
