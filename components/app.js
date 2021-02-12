import Form from '../components/form'

export default function App(){
    return(<>
    <div className="p-4 ">
        <div className="pt-20">
            <h1 className="text-5xl text-center font-semibold text-blue-900">Hello Word</h1>
        </div>
        <div className="py-10">
            <Form/>
        </div>
    </div>
    </>)
}