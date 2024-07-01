import { useRef } from 'react'
import { useState } from 'react'
import { AddButton, Container, DeleteButton, Product, ShareButton } from './styles'

function Home() {

    const inputRef = useRef()
    const [produtos, setProdutos]= useState([])
    // This is the JSX code that will be rendered by React
    
    function button(){
      setProdutos([...produtos,inputRef.current.value])
      inputRef.current.value = ''; 
    }
    function buttonDelete(index){
      setProdutos(produtos.filter((_, i) => i !== index))
    }
    function listToWhats() {
      // Formatar a lista de produtos em uma string separada por quebras de linha
      return produtos.join('\n');
  }
  const shareOnWhatsApp = () => {
    const lista = listToWhats();
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(lista)}`;
    window.open(whatsappURL, '_blank');
};

    return (

      <Container>
        <h1>Lista de compras</h1>
        <input type="text" placeholder="Produto" ref={inputRef}/>
        <AddButton onClick ={button}>Adicionar</AddButton>

        {
          produtos.map((produto, index) => (
            <Product key={index}>
             <p>{produto}</p>
             <DeleteButton onClick={() => buttonDelete(index)}>Deletar</DeleteButton>
             </Product>
          ))
        }
         <ShareButton onClick={shareOnWhatsApp}>Compartilhar</ShareButton>
      </Container>
      

  )
}

export default Home