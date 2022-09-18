import React from 'react'
import Header from '../components/Header'
import SideNavigation from '../components/SideNavigation'
import display from '../Helpers/display';


const Home = ({state,setState,history,className,setClassName,invoiceId,setInvoiceId}) => {

  return (
    <div>
      <Header/>
      <div className='main'>
        <SideNavigation state={state} setState={setState} history={history} className={className} setClassName={setClassName}/>
        {display(state[0],setState,invoiceId,setInvoiceId)}
      </div>
    </div>
  )
}

export default Home;


