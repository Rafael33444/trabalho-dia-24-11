function calcular() {
    const salario = Number(document.getElementById("salario").value);
    const dep = Number(document.getElementById("dependentes").value);

    if (salario <= 0) {
        alert("Digite um salário válido!");
        return;
    }

    // --- CÁLCULO DO INSS ---
    let inss = 0;

    if (salario <= 1412) inss = salario * 0.075;
    else if (salario <= 2666.68) inss = salario * 0.09;
    else if (salario <= 4000.03) inss = salario * 0.12;
    else inss = salario * 0.14;

    // --- CÁLCULO DO IRRF ---
    const deducaoDep = dep * 189.59;
    const baseIR = salario - inss - deducaoDep;

    let ir = 0;

    if (baseIR <= 2259.20) ir = 0;
    else if (baseIR <= 2828.65) ir = baseIR * 0.075 - 169.44;
    else if (baseIR <= 3751.05) ir = baseIR * 0.15 - 381.44;
    else if (baseIR <= 4664.68) ir = baseIR * 0.225 - 662.77;
    else ir = baseIR * 0.275 - 896;

    if (ir < 0) ir = 0;

    const liquido = salario - inss - ir;

    document.getElementById("inss").innerText = inss.toFixed(2);
    document.getElementById("ir").innerText = ir.toFixed(2);
    document.getElementById("liquido").innerText = liquido.toFixed(2);
}