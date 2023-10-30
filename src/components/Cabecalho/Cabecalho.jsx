import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
    <nav>
      <Link href="/">HOME</Link>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <Link href="/form">FORM</Link>
>>>>>>> daa331fb3d5ece25c7374a58fab336eb4e51fec8
      <Link href="/git-users">USERS</Link>
      <Link href="/add-prod">ADD-PROD</Link>
=======
      <Link href="/consumo/fruta-view">FRUTAS</Link>
>>>>>>> 8a2efa2f44e30891e94e62b9f1f0b36de035d4d1
      <Link href="/produtos/mamao" >MAMÃO</Link>
      <Link href="/produtos/melao" >MELÃO</Link>
      <Link href="/produtos/manga" >MANGA</Link>
    </nav>
  </header>
  )
}
