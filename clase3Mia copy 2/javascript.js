
const Component=()=>{
    return(

        <div>
        <h1>Componente</h1>
    <Component2/>
    </div>
        )
}


class Component2 extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <h1>Class Compomemt</h1>
    }
}




const root=document.getElementById('root')
ReactDOM.render(<Component/>,root)