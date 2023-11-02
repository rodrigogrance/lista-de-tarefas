$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault()

        const recebeLista = $('#form-tarefa').val();
        const ul = $('ul') //Seleciona a lista <ul> onde deseja adicionar os itens 

        if (recebeLista) {
            const novoItem = $('<li></li>').text(recebeLista)
            ul.append(novoItem) //Cria um novo item de lista com o texto inserido no campo e adiciona esse item à lista quando o formulário é enviado

            novoItem.click(function(){
                $(this).toggleClass('tarefa-concluida')
            }) //Adiciona um evento de clique a cada item da lista, que aciona o elemento css 'line-through' para riscar o item da lista
    
        }

        $('#form-tarefa').val('') //Limpa o campo de entrada após a adição de um item na lista
    });
});
