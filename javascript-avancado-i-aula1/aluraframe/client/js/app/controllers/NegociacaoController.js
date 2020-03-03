

class  NegociacaoController{

        constructor(){

            let $ = document.querySelector.bind(document);

            this._inputData = $('#data');
            this._inputQuantidade = $('#quantidade');
            this._inputValor = $('#valor');
            this._listaNegociacoes = new ListaNegociacoes();
        }
  
    adiciona(event){   
        event.preventDefault();
<<<<<<< HEAD
          
       
        let helper = new DateHelper();
    
        let negociacao = new Negociacao (
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
                                    );
         console.log(negociacao); 
         console.log(helper.dataParaTexto(negociacao.data));
=======
           
        let helper = new DateHelper(); 
       
        let negociacao = new Negociacao (
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
         );

      // console.log(negociacao);
      // console.log(DateHelper.dataParaTexto(negociacao.data));

      this._listaNegociacoes.adiciona(negociacao);
      console.log(this._listaNegociacoes.negociacoes);

>>>>>>> 8901cccb115b936799eda4c165d4b972eae77d3a
    }
}

