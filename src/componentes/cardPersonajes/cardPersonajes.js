import { Link } from 'react-router-dom'
import './cardPersonajes.css'

<<<<<<< HEAD
export const CardPersonajes = ( {id, nombre, status, species,img} ) => {    
=======
//una vez los datos en el cardStock los recibimos ya desestructurados
//usamos los datos a placer en la cart, teniendo en cuenta que estas cartas
//se van a renderizar de manera dinamica segun cuantos objetos tenga el array
export const CardPersonajes = ( {id, nombre, status, species,img} ) => {    


    // const saludar = (id) => {
    //     //si el contador es menor que el max && (simplificar IF)
    //     console.log(id);
    //onClick={()=> saludar({id})}
    // }

    
    
>>>>>>> 24bfe0e579081655ca32545e5508907f5e63f173
    
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