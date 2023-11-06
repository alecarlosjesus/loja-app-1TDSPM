import { promises as fs } from 'fs';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from "next/server";


const file = await fs.readFile(process.cwd() + '/src/app/base/db.json', 'utf8');

export async function GET() {

  console.log()
  return NextResponse.json(JSON.parse(file));
  }

//Recuperando todos os produtos do arquivo JSON em /app/base/db.json;

export async function POST(request) {

}


