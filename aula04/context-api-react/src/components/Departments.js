
import React, { Component, Fragment } from 'react'
 
import Loading from './Loading'
 
import { getDepartments } from '../service/api'
 
function Departments(props){

    const handleGetDepartments = async () => {
        const { showLoading, hideLoading } = props

        showLoading('Carregando departamentos')

        const response = await getDepartments().then(response => {
            hideLoading()
            return response
        })
        console.log({ response })
    }

    return (
        <button onClick={handleGetDepartments}>Buscar departamentos</button>
    )
}




// class Departments extends Component {
 
//     state = {
//         loading: false
//     }
 
//     getDepartments = async () => {
//         this.setState({ loading: true })
//         const data = await getDepartments().then(response => {
//             this.setState({ loading: false })
//             return response
//         })
//         console.log({ data })
//     }
 
//     render() {
//         const { loading } = this.state

//         return (
//             <Fragment>
//                 <button onClick={this.getDepartments}>Buscar departamentos</button>
//                 <Loading loading={loading} message='Carregando departamentos...' />
//             </Fragment>
//         )
//     }
// }
 
export default Departments
