$(function() {

    $("#dsNomeCompletoCliente").on('change', function() {		
      if ($("#dsNomeCompletoCliente").val() === ''){
        document.getElementById('dsNomeCompletoCliente').style.border='thin solid red';
        alert("O Campo do Nome não pode estar vazio!");
      }
      else{
        document.getElementById('dsNomeCompletoCliente').style.border='thin solid green';
      }
    });
    
    $("#nuTelefoneCliente").on('change', function() {		
      if ($("#nuTelefoneCliente").val() === ''){
        document.getElementById('nuTelefoneCliente').style.border='thin solid red';
        alert("O Campo do Telefone não pode estar vazio!");
      }
      else{
        document.getElementById('nuTelefoneCliente').style.border='thin solid green';
      }
    });
    
    $("#nuTelefoneEmergenciaCliente").on('change', function() {		
      if ($("#nuTelefoneEmergenciaCliente").val() === ''){
        document.getElementById('nuTelefoneEmergenciaCliente').style.border='thin solid red';
        alert("O Campo do Telefone não pode estar vazio!");
      }
      else{
        document.getElementById('nuTelefoneEmergenciaCliente').style.border='thin solid green';
      }
    });
    
    $("#dtNascimentoCliente").on('change', function() {		
      if ($("#dtNascimentoCliente").val() === ''){
        document.getElementById('dtNascimentoCliente').style.border='thin solid red';
        alert("O Campo da Data de Nascimento não pode estar vazio!");
      }
      else{
        document.getElementById('dtNascimentoCliente').style.border='thin solid green';
      }
    });
    
    $("#dsEstadoCliente").on('change', function() {		
      if ($("#dsEstadoCliente").val() === ''){
        document.getElementById('dsEstadoCliente').style.border='thin solid red';
        alert("O Campo do Estado não pode estar vazio!");
      }
      else{
        document.getElementById('dsEstadoCliente').style.border='thin solid green';
      }
    });
    
    $("#dsCidadeCliente").on('change', function() {		
      if ($("#dsCidadeCliente").val() === ''){
        document.getElementById('dsCidadeCliente').style.border='thin solid red';
        alert("O Campo da Cidade não pode estar vazio!");
      }
      else{
        document.getElementById('dsCidadeCliente').style.border='thin solid green';
      }
    });
    
    $("#dsEnderecoCliente").on('change', function() {		
      if ($("#dsEnderecoCliente").val() === ''){
        document.getElementById('dsEnderecoCliente').style.border='thin solid red';
        alert("O Campo de Endereço não pode estar vazio!");
      }
      else{
        document.getElementById('dsEnderecoCliente').style.border='thin solid green';
      }
    });
    
    $("#nuEnderecoCliente").on('change', function() {		
      if ($("#nuEnderecoCliente").val() === ''){
        document.getElementById('nuEnderecoCliente').style.border='thin solid red';
        alert("O Campo de Endereço não pode estar vazio!");
      }
      else{
        document.getElementById('nuEnderecoCliente').style.border='thin solid green';
      }
    });
    
    $("#dsEnderecoComplementoCliente").on('change', function() {		
      if ($("#dsEnderecoComplementoCliente").val() === ''){
        document.getElementById('dsEnderecoComplementoCliente').style.border='thin solid red';
        alert("O Campo de Endereço não pode estar vazio!");
      }
      else{
        document.getElementById('dsEnderecoComplementoCliente').style.border='thin solid green';
      }
    });
    
    $("#btnSalvar").click(function() {
      if($("#dsNomeCompletoCliente").val() != ''){
        if($("#nuTelefoneCliente").val() != ''){
          if($("#nuTelefoneEmergenciaCliente").val() != ''){
            if($("#dtNascimentoCliente").val() != ''){
              if($("#dsEstadoCliente").val() != ''){
                if($("#dsCidadeCliente").val() != ''){
                  if($("#dsEnderecoCliente").val() != ''){
                    if($("#nuEnderecoCliente").val() != ''){
                      if($("#dsEnderecoComplementoCliente").val() != ''){
                        alert("Cadastro realizado com sucesso!");
                      }
                      else{
                        alert("Os campos não estão preenchidos corretamente!");
                      }
                    }
                    else{
                      alert("Os campos não estão preenchidos corretamente!");
                    }
                  }
                  else{
                    alert("Os campos não estão preenchidos corretamente!");
                      }
                }
                else{
                  alert("Os campos não estão preenchidos corretamente!");
                }
              }
              else{
                alert("Os campos não estão preenchidos corretamente!");
              }
            }
            else{
              alert("Os campos não estão preenchidos corretamente!");
            }
          }
          else{
            alert("Os campos não estão preenchidos corretamente!");
          }
        }
        else{
          alert("Os campos não estão preenchidos corretamente!");
        }
      }
      else{
        alert("Os campos não estão preenchidos corretamente!");
      }
    }); 
    
    });