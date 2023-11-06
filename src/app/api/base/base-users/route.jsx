import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';


export async function GET() {
    //Realziando a leitura do arwquivo db.json desde a raiz do projeto.
    const file = await fs.readFile(process.cwd() + '/src/app/api/base/db.json', 'utf8');  //process.cwd() retorna o caminho da raiz do projeto.
  
    const listaUsuarios = await JSON.parse(file); //Convertendo o arquivo para JSON.

    //Retornando os dados do arquivo db.json.
    return NextResponse.json(listaUsuarios.usuarios);

}