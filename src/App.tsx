import { useState } from "react"

export default function App() {
  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos!")
      return
    }
    if(!email.includes("@")) {
      alert("Email inválido!")
      return
    }
    setLogin(true)
  }

  return (
    <main className="flex items-center justify-center bg-gray-200 h-screen w-full">
      <div className={`bg-white p-8 ${login ? "hidden" : "flex"} flex-col items-center justify-between gap-4 rounded-lg shadow-2xl w-1/4`}>
        <h1 className="text-4xl text-blue-500 font-bold">Login</h1>
        <div>
          <div className="flex flex-col">
            <label>Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} className="border-[1px] rounded-md p-1" type="email" />
          </div>
          <div className="flex flex-col">
            <label>Senha:</label>
            <input onChange={(e)=>setPassword(e.target.value)} className="border-[1px] rounded-md p-1" type="password" />
          </div>
        </div>
        <button onClick={handleLogin} className="bg-blue-500 rounded-full p-2 text-white w-1/2 hover:bg-blue-600">Entrar</button>
      </div>
      
      <div className={`bg-white p-8 ${login ? "flex" : "hidden"} flex-col items-center justify-between gap-4 rounded-lg shadow-2xl w-1/3`}>
        <h1 className="text-4xl text-blue-500 font-bold">NOTAS</h1>
        <table className="w-full border-2">
          <tr className="border-2">
            <th className="border-2">Disciplina</th>
            <th className="border-2">Notas</th>
            <th className="border-2">Faltas</th>
          </tr>
          <tr className="border-2">
            <td className="border-2">Desenv. Multiplataforma</td>
            <td className="border-2 text-center">10</td>
            <td className="border-2 text-center">2</td>
          </tr>
          <tr className="border-2">
            <td className="border-2">Álgebra Linear e Geometria Analítica</td>
            <td className="border-2 text-center">10</td>
            <td className="border-2 text-center">2</td>
          </tr>
          <tr className="border-2">
            <td className="border-2">Banco de Dados Não Relacional</td>
            <td className="border-2 text-center">10</td>
            <td className="border-2 text-center">2</td>
          </tr>
          <tr className="border-2">
            <td className="border-2">Engenharia de Software</td>
            <td className="border-2 text-center">10</td>
            <td className="border-2 text-center">2</td>
          </tr>
          <tr className="border-2">
            <td className="border-2">Teoria da Comp. Autômato e Linguagem Formal</td>
            <td className="border-2 text-center">10</td>
            <td className="border-2 text-center">2</td>
          </tr>
          <tr className="border-2">
            <td className="border-2">Projeto Integrador - Multiplataforma</td>
            <td className="border-2 text-center">10</td>
            <td className="border-2 text-center">2</td>
          </tr>
        </table>
        <button onClick={() => setLogin(false)} className="bg-red-500 rounded-full p-2 text-white px-8 hover:bg-red-600">Sair</button>
      </div>
    </main>
  )
}