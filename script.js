document.getElementById('verificarBtn').addEventListener('click', function () {
    var cpfInput = document.getElementById('cpf');
    var cpf = cpfInput.value;

    if (cpf.length === 9) {
        function calcularDigitosVerificadores(cpf) {
            var d0, d1, d2, d3, d4, d5, d6, d7, d8;
            var somaprod1, somaprod2;
            var dezena, unidade;
            var restoAux;

            d0 = cpf % 10; d1 = Math.floor(cpf / 10) % 10; d2 = Math.floor(cpf / 100) % 10;
            d3 = Math.floor(cpf / 1000) % 10; d4 = Math.floor(cpf / 10000) % 10; d5 = Math.floor(cpf / 100000) % 10;
            d6 = Math.floor(cpf / 1000000) % 10; d7 = Math.floor(cpf / 10000000) % 10; d8 = Math.floor(cpf / 100000000) % 10;

            somaprod1 = d0 * 2 + d1 * 3 + d2 * 4 + d3 * 5 + d4 * 6 + d5 * 7 + d6 * 8 + d7 * 9 + d8 * 10;

            restoAux = somaprod1 % 11;
            dezena = (restoAux < 2) ? (0) : (11 - restoAux);

            somaprod2 = dezena * 2 +
                d0 * 3 + d1 * 4 + d2 * 5 + d3 * 6 + d4 * 7 + d5 * 8 + d6 * 9 + d7 * 10 + d8 * 11;

            restoAux = somaprod2 % 11;
            unidade = restoAux < 2 ? 0 : 11 - restoAux;

            return `${dezena}${unidade}`;
        }

        var digitosVerificadores = calcularDigitosVerificadores(parseInt(cpf));
        var cpfCompleto = cpf + '-' + digitosVerificadores;

        var novoContainer = document.createElement('div');
        novoContainer.className = 'cpf-container';


        novoContainer.innerHTML = `
                    <div class="cpf-content">
                        <h2>CPF Completo</h2>
                        <p>${cpfCompleto}</p>
                        <button class="deleteBtn">Deletar</button>
                    </div>
                `;


        document.body.appendChild(novoContainer);


        novoContainer.querySelector('.deleteBtn').addEventListener('click', function () {
            document.body.removeChild(novoContainer);
        });


        cpfInput.value = '';
    } else {
        alert('Digite os 9 primeiros dígitos do CPF antes de verificar.');
    }
});