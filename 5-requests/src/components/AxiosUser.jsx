import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchUser = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [newUser, setNewUser] = useState({name: '', email: ''})

    const getUsers = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
            setLoading(false)
        } catch(err) {
            setError(err.message)
            setLoading(false)
        }
    }

    const addUser = async (user) => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", user)
            setUsers([...users, response.data])
            setNewUser({name: '', email: ''})
        } catch(err) {
            setError(err.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return(
        <div>
            {loading && <p>Carregando</p>}
            {error && <p>Erro: {error}</p>}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            <form onSubmit={(e) => {
                e.preventDefault()
                addUser(newUser)
            }}>
                <input type="text" placeholder="Nome"  onChange={(event) => setNewUser({...newUser, name: event.target.value})} value={newUser.name} />
                <input type="email" placeholder="E-mail" onChange={(event) => setNewUser({...newUser, email: event.target.value})} value={newUser.email} />
                <button>Adicionar</button>
            </form>
        </div>
    )
}

export default FetchUser
