 import React from 'react'
 const UserName = (props)=>{
console.log(props);
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <p>{+props.date === 2023 ? props.date : `${2023- +props.date} год назад`}</p>
        </div>
    )
    
 }
 export default UserName

 