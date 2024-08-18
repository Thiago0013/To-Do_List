document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const currentDate = `${year}-${month}-${day}` 
    const currentTime = `${hours}:${minutes}`;
    
    var timerInput = window.document.getElementById('time')
    var dateInput = window.document.getElementById('date')

    dateInput.value = currentDate
    timerInput.value = currentTime
  });

  function verificar(){
    const nome = document.getElementById('nome');
    var valor = nome.value.trim();
    if (valor === ''){
        alert('ERRO: Preencha o nome da tarefa!')
    }
  }