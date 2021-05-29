import { signIn, signOut, useSession } from 'next-auth/client'

const Nav = ({show}) => {
    const [ session ] = useSession()

    const handleClick = (e) =>{
        e.preventDefault()
        show(true)
    }
    return (<>   
    <div className="grid grid-cols-6 items-center p-4 shadow-md bg-pink-800 text-white">
        {session &&  <>      
        <h1 className="col-span-5 f text-xl text-right pr-4 font-semibold">{session.user.name}</h1>
        <img onClick={handleClick} className="w-12 col-span-1 rounded-full" src={session.user.image}/>
         </>
            ||
            <>
            <ul className="text-xl  text-center col-start-5 col-end-7 p-2 cursor-pointer bg-blue-500  rounded">
                <li>{!session &&<a onClick={() => signIn('auth0')} className=" text-white font-semibold">Log In</a>}</li>           
                            
            </ul>             
           
            </>
        }
    </div> 

    </>)
}

export default Nav