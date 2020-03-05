
import React, { Component, Fragment } from 'react'
 
import Loading from './Loading'
 
import { getUsers } from '../service/api'
 

//functional component
function Users(props){

    const handleGetUsers = async () => {
        const { showLoading, hideLoading } = props

        showLoading('Carregando usuários')

        const response = await getUsers().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    return (
        <button onClick={handleGetUsers}>Buscar usuários</button>
    )
}

// class Users extends Component {
 
//     state = {
//         loading: false
//     }
 
//     getUsers = async () => {
//         this.setState({ loading: true })
//         const response = await getUsers().then(response => {
//             this.setState({ loading: false })
//             return response
//         })
//         console.log({ response })
//     }
 
//     render() {
//         const { loading } = this.state
 
//         return (
//             <Fragment>
//                 <button onClick={this.getUsers}>Buscar usuários</button>
//                 <Loading loading={loading} message='Carregando usuários...' />
//             </Fragment>
//         )
//     }
// }
 
export default Users