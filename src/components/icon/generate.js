const fs = require('fs');

function parseName(path = ''){
  path = path.replace('lib/', '');
  path = path.replace('-svgrepo-com.svg', '');
  let name = '';
  const parts = path.split('-');
  parts.map((word) => {
    name += word.charAt(0).toUpperCase() + word.slice(1);
  })
  return name;
}

function convertSvgToTsx(inputFilePath) {
  try {
    // Ler o conteúdo do arquivo SVG
    const svgContent = fs.readFileSync(inputFilePath, 'utf-8');

    // Criar o conteúdo do arquivo TSX
    const tsxContent = `import React, { SVGProps } from "react";

    export default (props: SVGProps<SVGSVGElement>) => {
      return (
        ${svgContent.trim()}
      );
    }`;
    

    const outputFilePath = `lib/${parseName(inputFilePath)}.tsx`;

    // Escrever o conteúdo no arquivo TSX
    fs.writeFileSync(outputFilePath, tsxContent);

    console.log(`Conversão concluída. Arquivo TSX criado em: ${outputFilePath}`);
  } catch (error) {
    console.error('Erro ao converter SVG para TSX:', error);
  }
}

// Capturar argumentos da linha de comando
const [, , inputSvgFilePath] = process.argv;

// Verificar se os caminhos dos arquivos foram fornecidos
if (!inputSvgFilePath) {
  console.error('Por favor, forneça os caminhos dos arquivos SVG e TSX.');
} else {
  // Executar a conversão
  convertSvgToTsx(inputSvgFilePath);
}
