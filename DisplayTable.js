
import React from 'react'
class DisplayTable extends React.Component {

constructor(props){
    super(props)
    this.state={
        list:[]

    }
    this.callAPI =this.callAPI.bind(this)
    this.callAPI();
}
callAPI(){
fetch("https://jsonplaceholder.typicode.com/users").then(
    (response)=>response.json()
).then((data)=>{
    console.log(data)
})
}

render(){
    let tb_data=this.state.list.map((item)=>{
        return(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.city}</td>
                <td>{item.zipcode}</td>
                <td>{item.geo}</td>
                <td><button className='btn btn danger'>
                    remove</button> </td>
            </tr>
        )
    }
    )
    return(
        <div className='container'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th> 
                        <th>email</th>
                        <th>city</th>
                        <th>zipcode</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {tb_data}

                </tbody>
            </table>

        </div>
    )
}
}
export default DisplayTable;