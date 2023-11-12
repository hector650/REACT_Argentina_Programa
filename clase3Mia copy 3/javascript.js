
    class Header extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            return (
            <div className="Header">               
            <h1>{this.props.name}</h1>

           </div>);
        }
    }
const Main=({name2})=>{
 return(
     <h1>{name2}</h1>
 )
}
const Page =({children})=>{
return(
    <div>
        {children}
    </div>
       )
}
function Footer({ name3 }) {
    return (
        <h1>{name3}</h1>
    );
}
const Button=({handleClick})=>{
 return(
     <button onClick={handleClick}>Check</button>
 )
}
const App=()=>{
    let name='Header'
    let name2='Main'
    let name3='Footer'
    const handleClick =()=>{
        alert("pulse el button ")
    }
    return(
        <div>
    <Page>
    <Header   name={name}/>
    <Main     name2={name2}/>
    <Footer   name3={name3}/>
    <Button   handleClick= {handleClick}/>
    </Page>
    </div>
        )
}



const root=document.getElementById('root')
ReactDOM.render(<App/>,root)