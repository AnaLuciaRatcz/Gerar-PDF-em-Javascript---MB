const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () =>{

    //conteúdo do PDF
    const content = document.querySelector("#content");

    //Configuração do arquivo final de PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},   //biblioteca também, para fazer a escala do documento
        jsPDF: {unit: "mm", formate: "a4", orientation: "portrait"} //biblioteca
    }

    //Gerar e baixar o PDF
    // chama a função htmltopdf, anexa a formatação que criei ali em cima em options,
    //  o from pega o conteúdo do pdf,
    //  neste caso é o que está na "content" e o método "save" será usado para salvar o pdf
    html2pdf().set(options).from(content).save();
});

