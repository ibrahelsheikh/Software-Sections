const ShowUsers = ({data}) => {
    return (
      <div style={{fontSize:'50px'}}>
        <div >
           {data.map((item)=>`${item.id} | `)} 
          </div>
          <div>
           {data.map((item)=>`${item.name} | `)}
          </div>
          <div>
           {data.map((item)=>`${item.age} | `)}
          </div>
      </div>
          
    )
  }
  
  export default ShowUsers