import './App.css'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Biblioteca from './components/Biblioteca.jsx'
import Livro from './components/Livro.jsx'

function App() {
  return(
    <>
    <Cabecalho />
    <Biblioteca />
    <Livro
    titulo={"A Sutil Arte De Ligar o Foda-se"}
    autor={" Autor: Mark Manson"}
    ano={"Ano: 06/11/2017"}
    sinopse={"Sinopse: Em A sutil arte de ligar o f*da-se, Mark Manson mostra que quanto mais nos importamos com todos os problemas da vida, "}
    sinopse2={"maior o sofrimento. Então, aprenda identificar suas prioridades, ligue o f*da-se para o resto e aproveite uma vida melhor."}
    />
    <h3>Livros Disponíveis</h3>
    <Galeria />
    <Rodape />
    </>
  )
}

export default App