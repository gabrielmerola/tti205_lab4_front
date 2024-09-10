import { useEffect, useState } from "react"

export default function App() {
  const [login, setLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState("")

  const data = [
    {disciplina: "Desenv. Multiplataforma", nota: 10, faltas: 2},
    {disciplina: "Álgebra Linear e Geometria Analítica", nota: 10, faltas: 2},
    {disciplina: "Banco de Dados Não Relacional", nota: 10, faltas: 2},
    {disciplina: "Engenharia de Software", nota: 10, faltas: 2},
    {disciplina: "Teoria da Comp. Autômato e Linguagem Formal", nota: 10, faltas: 2},
    {disciplina: "Projeto Integrador - Multiplataforma", nota: 10, faltas: 2}
  ]

  function handleLogin() {
    if (email === "" || password === "") {
      alert("Preencha todos os campos!")
      return
    }
    if(!email.includes("@")) {
      alert("Email inválido!")
      return
    }
    const response = fetch("http://localhost:8080/api/mptas-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password})
    })
    response.then((res) => {
      if (res.status === 401) {
        alert("Email ou senha inválidos!")
        return
      }
      if (res.status === 200) {
        alert("Login efetuado com sucesso!")
        setUser(res.idUser)
        setLogin(true)
      }
    })
  }

  async function getData() {
    const response = await fetch("http://localhost:8080/api/mptas-faltas?"+user, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

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
          {data.map((item, index) => (
            <tr key={index} className="border-2">
              <td className="border-2">{item.disciplina}</td>
              <td className="border-2 text-center">{item.nota}</td>
              <td className="border-2 text-center">{item.faltas}</td>
            </tr>
          ))}
        </table>
        <button onClick={() => setLogin(false)} className="bg-red-500 rounded-full p-2 text-white px-8 hover:bg-red-600">Sair</button>
      </div>
    </main>
  )
}