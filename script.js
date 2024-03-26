document.addEventListener('DOMContentLoaded', function() {
    const config = document.getElementById('config');
    const btnClick = document.getElementById('click');

    const addData = () => {
        const newBlock = document.createElement('div');
        newBlock.classList.add('Card-info');
        newBlock.innerHTML = `
        <div class="row Card-info col-6 col-sm-12">
            <div class="col-4 rota">
            <label for="server" class="form-label bi bi-diagram-3"> TIPO DE ROTA</label>
            <input type="text" class="form-control" id="server">
            </div>
            <div class="col-4 server">
                <label for="server" class="form-label bi bi-hdd-network"> SERVER</label>
                <input type="text" class="form-control" id="server">
            </div>
            <div class="col-4 techprefix">
                <label for="techprefix" class="form-label bi bi-database-fill-up"> TECHPREFIX</label>
                <input type="text" class="form-control" id="techprefix">
            </div>
            
            <div class="col-6 form-check com_classificador">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                SEM CLASSIFICADOR
                </label>
            </div>

            <div class="col-6 form-check com_classificador">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                COM CLASSIFICADOR
                </label>
            </div>

            <div class="painel">
                <div>
                    <h6>PAINEL PARA ACOMPANHAR O GASTO</h6>
                    <br>
                    <div class="col-md-12">
                        <label for="usuario nome" class="form-label bi bi-link"> URL</label>
                        <input type="text" class="form-control" id="usuario" disabled value="http://181.191.206.175:8080/SipPulsePortal/pages/login/login.jsf">
                    </div><!--col-md-12-->
                </div>
                <div class="row usuario">
                    <div class="col-md-6 nome_usuario">
                        <label for="usuario nome" class="form-label bi bi-person"> NOME DE USUÁRIO</label>
                        <input type="text" class="form-control" id="usuario">
                    </div><!--col-md-12-->
                    <div class="col-md-6 senha">
                        <label for="senha" class="form-label bi bi-key"> SENHA DE ACESSO</label>
                        <input type="text" class="form-control" id="senha">
                    </div><!--col-md-12 Senha-->
                </div><!--usuario-->
            </div><!--painel-->
                    <button class="btn btn-danger remove-btn no-print">Remover</button>
                </div>
        </div>`;
        
        config.appendChild(newBlock);

        // Adiciona o ouvinte de evento de clique ao botão de remoção
        const removeBtn = newBlock.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            config.removeChild(newBlock);
        });
    };

    // Adiciona o ouvinte de evento de clique ao botão principal
    btnClick.addEventListener('click', addData);
});

const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {
    // Oculta os botões de remoção e o botão "Gerar PDF" durante a geração do PDF
    const buttonsToHide = document.querySelectorAll('.remove-btn, #generate-pdf');
    buttonsToHide.forEach(button => {
        button.style.display = 'none';
    });

    // Conteudo do PDF
    const formulario = document.querySelector("#formulario")

    // Configuração do arquivo final de PDF
    const options = {
        filename: "Formulário SIP.pdf",
        jsPDF: {
            format: 'a4',
            orientation: 'portrait'
        },
        html2canvas: {
            scale: 1
        },
        pagebreak: { mode: 'avoid-all' },     

        
    };

    

    
    

    // Gerar e baixar o PDF
    html2pdf().set(options).from(formulario).save().then(() => {
        // Restaura a exibição dos botões após a geração do PDF
        buttonsToHide.forEach(button => {
            button.style.display = '';
        });
    });
});
