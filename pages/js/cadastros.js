$(function() {

  $("#dsNomeCompleto").on('change', function() {		
    if ($("#dsNomeCompleto").val() === ''){
      document.getElementById('dsNomeCompleto').style.border='thin solid red';
      alert("O Campo do Nome não pode estar vazio!");
    }
    else{
      document.getElementById('dsNomeCompleto').style.border='thin solid green';
    }
	});

  $("#nuTelefone").on('change', function() {		
    if ($("#nuTelefone").val() === ''){
      document.getElementById('nuTelefone').style.border='thin solid red';
      alert("O Campo do Telefone não pode estar vazio!");
    }
    else{
      document.getElementById('nuTelefone').style.border='thin solid green';
    }
	});

  $("#dtNascimento").on('change', function() {		
    if ($("#dtNascimento").val() === ''){
      document.getElementById('dtNascimento').style.border='thin solid red';
      alert("O Campo da Data de Nascimento não pode estar vazio!");
    }
    else{
      document.getElementById('dtNascimento').style.border='thin solid green';
    }
	});

  $("#dsCidade").on('change', function() {		
    if ($("#dsCidade").val() === ''){
      document.getElementById('dsCidade').style.border='thin solid red';
      alert("O Campo da Cidade não pode estar vazio!");
    }
    else{
      document.getElementById('dsCidade').style.border='thin solid green';
    }
	});

  $("#dsEstado").on('change', function() {		
    if ($("#dsEstado").val() === ''){
      document.getElementById('dsEstado').style.border='thin solid red';
      alert("O Campo do Estado não pode estar vazio!");
    }
    else{
      document.getElementById('dsEstado').style.border='thin solid green';
    }
	});

  $("#dsEndereco").on('change', function() {		
    if ($("#dsEndereco").val() === ''){
      document.getElementById('dsEndereco').style.border='thin solid red';
      alert("O Campo de Endereço não pode estar vazio!");
    }
    else{
      document.getElementById('dsEndereco').style.border='thin solid green';
    }
	});

  $("#btnSalvarCadFunc").on('click', function() {
    if($("#nuTelefone").val() != ''){
      if($("#dtNascimento").val() != ''){
        if($("#dtNascimento").val() != ''){
          if($("#dsCidade").val() != ''){
            if($("#dsEstado").val() != ''){
              if($("#dsEndereco").val() != ''){
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
  }); 
     
  });

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
    
    $("#btnSalvarCadCliente").on('click', function() {
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