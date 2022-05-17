import { Link } from 'react-router-dom'
import './cardPersonajes.css'

export const CardPersonajes = ( {id, nombre, status, species,img} ) => {    
    
    return (
        
        <Link to={`/${id}`}>
        <div className="card" >
            <img className="img" src={img} alt="Personaje"/>
            <div className="container">
                <h4><b>{nombre}</b></h4> 
                <p>{status} - {species}</p> 
                

            </div>
        </div>
        </Link>
        
    )
}




{/* //El el link ponemos que si se presiona en el boton "ver mas" nos dirigiremos a /detail/${id} 
//que ira cambiando obviamente si el id es distinto, el link nos devuelve a la app.js y con el 
//route nos dirige a itemDetailContainer */
//<img src={img} alt="Avatar" style="width:100%"/>

}



{/* <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>

                <Card.Text>
                    status: {status}
                </Card.Text>
                
            </Card.Body>
            
            <Link to={`/detail/${id}`}>
                    <Button className="btn btn-secondary my-2 btn-block" >Ver más</Button>
                </Link>
        </Card> */}