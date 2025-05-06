document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
  
    const tabela = document.getElementById('tabela-contatos').querySelector('tbody');
    const novaLinha = tabela.insertRow();
  
    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);
  
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;
  
    document.getElementById('form-contato').reset();
  });
  