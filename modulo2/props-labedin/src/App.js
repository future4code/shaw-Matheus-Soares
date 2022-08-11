import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-19/26186631_161007457860984_8475507201421606912_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=ybvl0sQzsf0AX8Iat0k&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_c5h6JabikYkf9T0wqyTW6Rawfap3nUmw-9cKd2Pa6sw&oe=623FF51B&_nc_sid=7bff83" 
          nome="Matheus" 
          descricao="Oi, eu sou o Matheus. Sou o aluno da Labenu. E eu gosto de pizza."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
        <CardPequeno
        imagem = 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png'
        nome = 'Email: matheusmoraes0507@gmail.com'
        />
        <CardPequeno 
        imagem='https://cdn-icons-png.flaticon.com/512/1295/1295181.png'
        nome='Endereço: Vila da folha'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
