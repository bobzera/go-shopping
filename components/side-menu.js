import { signOut, useSession } from 'next-auth/client'

const sideMenu = ({show}) => {
    
    const [ session ] = useSession()

    const handleClick = (e) =>{
        e.preventDefault()
        show(false)
    }

    const handleClickSignOut = (e) =>{
      e.preventDefault()
      signOut()     
  }

    return (<>
    <div>
  <div className="grid grid-cols-6 items-center p-4 shadow-md">
    <svg onClick={handleClick} className="" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><path d="M12.71,12l8.15,8.15l-0.71,0.71L12,12.71l-8.15,8.15l-0.71-0.71L11.29,12L3.15,3.85l0.71-0.71L12,11.29l8.15-8.15l0.71,0.71 L12.71,12z"></path></svg>
    <h1 className="col-span-5 f text-xl font-semibold">Conta</h1>
  </div>

  <div  className="grid grid-cols-6  py-8 p-4 border-gray-30000 border-b-2">
    <img className="col-span-1 rounded-full" src={session.user.image}/>
    {/* <img className="col-span-1 rounded-full" src="https://yt3.ggpht.com/yti/ANoDKi57C9fgKaKO0LrZRoo9gcCEf0_KiTbIZ8pCWBZz=s108-c-k-c0x00ffffff-no-rj"/> */}
    <div className="col-span-5 px-4">
      <div className="text-xl">
        <p>{session.user.name}</p>
        <p>{session.user.email}</p>
      </div>
      <div className="text-xl py-2">
        <a onClick={handleClickSignOut} className=" cursor-pointer text-blue-700 underline text-sm">Sing Out</a>
        <p></p>
      </div>      
    </div>
  </div>
  
  {/* <div  className="  py-8 p-4 border-gray-30000 border-b-2">
    <div className="grid grid-cols-6">
        <div className="col-span-1">

        </div>
        <div className="col-span-5 px-4">
          <div className="text-xl">
            <p>weslley oliveira</p>
            <p>hello@weslleyoliveira.com</p>
          </div>
          </div>
          </div>
            
    
  </div> */}

  <div className=""></div>
  <div className="fixed w-full bottom-0 text-gray-500">
    <p className="text-center text-sm p-4">www.weslleyoliveira.com</p>
  </div>
</div>

    </>)
}

export default sideMenu