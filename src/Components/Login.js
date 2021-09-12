
import { useState } from 'react';
import { validarUsuario } from './Helpers/validar-usuario';

export const Login = ()=>{

    //TODO: conseguir valores de input, convertir usefetch en helper

    const [log, setLog] = useState({
        correo: '',
        contrasena: '',
        estado: false
    });

    const {correo, contrasena} = log;

    const handleInputChange = ({target})=>{
        if(!log.estado){
            setLog({
                ...log,
                [target.name]: target.value
            });
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const data = await validarUsuario(correo,contrasena);

        if(data.message){
            alert('Correo y/o contraseña incorrectos');
        }else{
            data.estado = true;
            setLog(data);
        }
    }
    
    return (
        <div>
                <h1 className="text-center mt-1">Login</h1>
                <hr />

                <form className="card">
                    <div className="card-body">
                        <input 
                            className="form-control"
                            placeholder="Correo"
                            autoComplete="off"
                            type="email"
                            value={correo}
                            name="correo"
                            onChange={handleInputChange}
                        />
                        <input 
                            className="form-control mt-2"
                            placeholder="Contraseña"
                            autoComplete="off"
                            type="password"
                            value={contrasena}
                            name="contrasena"
                            onChange={handleInputChange}
                        />
                        <div className="text-center mt-2">
                            <button 
                                className="btn btn-primary" 
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Log in
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <button className="btn btn-primary">Registrarse</button>
                        </div>
                    </div>
                </form> 
        </div>
    )
}