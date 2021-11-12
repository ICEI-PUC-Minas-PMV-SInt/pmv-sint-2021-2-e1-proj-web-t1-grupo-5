import { useEffect, useState } from 'react'

export default function SignIn () {
    const [ufState, setUfState] = useState([]);
    const [userType, setUserType] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
            const ibge = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
            const response = await ibge.json()

            setUfState(response)
        }

        fetchStates()
    }, [])

    return (
        <div>
            <div></div>
            <div>
                <div>
                    <h1>Login</h1>
                    <div>
                        <input type="text" name="name" id="name" placeholder="Nome" />
                        <input type="email" name="email" id="email" placeholder="E-mail" />
                        <input type="password" name="password" id="password" placeholder="Senha"  />
                        <input type="text" name="cpfCnpj" id="cpfCnpj" placeholder="CPF/CNPJ"  />
                        <select name="state" id="state">
                            {ufState.map(state => <option key={state.id} value={state.id}>{state.nome}</option>)}
                        </select>
                        <select name="userType" id="userType">
                            {userType.map(type => <option key={type.nome} value={type.nome}>{type.nome}</option>)}
                        </select>
                        <input type="text" name="cna" id="cna" placeholder="CNA" />
                        
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}