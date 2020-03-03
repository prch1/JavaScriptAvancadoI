
class DateHelper{

<<<<<<< HEAD
    dataParaTexto(data){
        return data.getDate()
             + '/' + (data.getMonth() + 1)
             + '/' + data.getFullYear();
                      }
  
    textoParaData(texto){
        return new Date(...texto.split('-').map((item,indice) =>  item - indice % 2 ));       
    }
  
}
=======
    /*constructor(){
        throw new Error('DateHelper não pode ser instanciada');
        }*/

   static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} `;
    }

    static textoParaData(texto){
      if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formato aaaa-mm-dd');
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));
    }
}
>>>>>>> 8901cccb115b936799eda4c165d4b972eae77d3a
