// 3 partes que compõe um componente em JavaScript

// Primeira Parte
import React from "react";
import "./App.css"
import loja from './img/loja.jpg'

// Segunda Parte - Classe ou Função

class App extends React.Component{
  
  render(){
    return(
      <div className="App">
        <header className="App-cabecalho">
          <h1 className="logo"><a href="#index.html" title="Loja de informática do Obama"></a></h1>
          <form>
            <input type="text" name="busca" id="busca" placeholder="Faça uma busca aqui!"/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </header>
        <nav className="App-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
      </ul>
      <div className="social-icons">
          <a href="#" className="btn-facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="btn-twitter"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="btn-google"><i className="fa-brands fa-google"></i></a>
      </div>
        </nav>
        <main className="App-principal">
        <article className="sobre">
      <h2>Sobre nós</h2>
      <img src={loja} alt="imagens de uma loja de informática um casal sendo atendido pelo vendedor."/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi qui sunt ab eligendi laboriosam dolores impedit beatae, ipsum, autem, illum delectus enim minus soluta quas non? Cumque, ab fuga.</p>
      <p>Sit aspernatur hic quo commodi praesentium voluptates eligendi aliquam recusandae omnis distinctio. Iste eos repellendus culpa! Consequuntur, quibusdam laudantium earum facilis debitis sed eius dolorem doloremque reiciendis totam harum? Eaque?</p>
      <p>Blanditiis, modi? Asperiores pariatur eos iusto aspernatur dolores nesciunt quis quo alias? Id ipsa nesciunt at praesentium quos nihil consequuntur. Officia cumque rerum quidem placeat quibusdam, enim voluptatum facilis blanditiis.</p>
    </article>
    <aside className="onde-estamos">
    <h2>Onde estamos</h2>
    <p>Rua Tito nº54 - Vila Romana, São Paulo - SP - Vila Romana</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14632.496568223292!2d-46.691809!3d-23.528037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1651544217513!5m2!1spt-BR!2sbr"></iframe>
    <h2>Contato</h2>
    <ul>
      <li><i className="fa-solid fa-phone"></i>(11) 4002-8922</li>
      <li><i className="fa-brands fa-whatsapp"></i>(11) 9698-8569</li>
      <li><i className="fa-solid fa-envelope"></i>atividadedoproa@gmail.com</li>
    </ul>
    </aside>
        </main>
        <section className="App-newsletter">
         <h3>Newsletter</h3>
         <p>Receba nossas promoções por e-mail.</p>
         <form action="" method="post">
             <input type="text" name="" id="" placeholder="Seu nome"/>
             <input type="email" name="" id="" placeholder="Seu e-mail"/>
             <button>Cadastrar</button>
         </form>
     </section>
     <footer className="App-rodape">
    <p>&copy; Loja do Obama - Todos os direitos reservados. </p>
  </footer>
      </div> //div App
    );
    }
}

// Terceira Parte
export default App;