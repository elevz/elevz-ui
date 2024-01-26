import fs from "fs";
import path from "path";

const dir = './dist';
const routes = ['icon', 'input', 'text']; // Adicione todas as rotas aqui

routes.forEach(route => {
  const indexPath = `${dir}/index.html`;
  
  const routePath = path.join(dir, route, 'index.html');

  // Lê o conteúdo do index.html
  const content = fs.readFileSync(indexPath, 'utf-8');

  // Cria a pasta da rota se não existir
  if (!fs.existsSync(`${dir}/${route}`)) {
    fs.mkdirSync(`${dir}/${route}`);
  }

  // Escreve o conteúdo do index.html na pasta da rota
  fs.writeFileSync(routePath, content);
});
