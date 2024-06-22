let valor = prompt("Insira um número entre 10 e 50")

if (valor >= 10 && valor <=50) {
    alert(`Correto! O número ${valor} está de acordo com o que foi solicitado`);
    location.reload();
} else {
    alert("Você não digitou um valor entre 10 e 50, tente novamente");
    location.reload();
 }