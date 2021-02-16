function Contato() {
    return (
     <div> <div className="background">
     <div className="container">
       <div className="screen">
         <div className="screen-header">
           <div className="screen-header-left">
             <div className="screen-header-button close"></div>
             <div className="screen-header-button maximize"></div>
             <div className="screen-header-button minimize"></div>
           </div>
           <div className="screen-header-right">
             <div className="screen-header-ellipsis"></div>
             <div className="screen-header-ellipsis"></div>
             <div className="screen-header-ellipsis"></div>
           </div>
         </div>
         <div className="screen-body">
           <div className="screen-body-item left">
             <div className="app-title">
               <span>Contato</span>
               <span>chama no zap!</span>
             </div>
             <div className="app-contact">Desenvolvido graças ao RecodePro (2020)</div>
           </div>
           <div className="screen-body-item">
             <div className="app-form">
               <div className="app-form-group">
                 <input className="app-form-control" placeholder="NAME" value="nome"></input>
               </div>
               <div className="app-form-group">
                 <input className="app-form-control" placeholder="EMAIL"></input>
               </div>
               <div className="app-form-group message">
                <input className="app-form-control" placeholder="mensagem"></input>
               </div>
               
               <div className="app-form-group buttons">
                 <button className="app-form-button">APAGAR</button>
                 <button className="app-form-button">ENVIAR</button>
               </div>
             </div>
           </div>
         </div>
       </div>
     
       </div>
     </div>
   </div>

  
  
     );
  }
  export default Contato;