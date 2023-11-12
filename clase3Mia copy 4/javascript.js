const facts = [
    { fact: '"Declarativo"', id: 1 },
    { fact: 'Mantenido por Facebook', id: 2 },
    { fact: 'Fácil de aprender', id: 3 },
    { fact: 'Aprendamos React Juntos', id: 4 },
    { fact: 'El proyecto  esta ok', id: 5 }
  ];
  
  const Header = () => (
    <div className="Header-Container">
      <img src="./logoreact.png" alt="" />
      <h3>React JS</h3>
    </div>
  );
  
  const Main = ({ children }) =>
   <div className="main-container">{children}</div>;
  
const Item = ({children}) => {
    return (
        <div className="facts-container">
            <ul>
                {facts.map((fact) => (
                    <li className="li-facts" key={fact.id}>{fact.fact}</li>
                ))}
            </ul>
            {children}
        </div>
    );
}
  
  
  function Footer({ name3 }) {
    return (
    <div className="footer-container">

    <h4>{name3}</h4>
    
    </div>
    );
        
  }
  
  const Button = ({ handleClick }) => (
    <button onClick={handleClick}>Check</button>
  );
  
  const App = () => {

    const name3 = 'LOBO SOLITO';
  
    const handleClick = () => {
      alert("Pulsó el botón");
    };
  
    return (
      <div>
        <Header />
        <Main>
          <Item>
        <Button handleClick={handleClick} />

          </Item>
        </Main>
        <Footer name3={name3} />
      </div>
    );
  };
  
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
  