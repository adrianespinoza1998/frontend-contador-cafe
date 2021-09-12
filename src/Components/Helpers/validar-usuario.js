import axios from 'axios';

export const validarUsuario = async(correo, contrasena) => {

    try{
        const fetch = await axios({
            method: 'POST',
            url: 'http://localhost:5000/api/auth',
            data: {
                correo,
                contrasena
            }
        });
    
        const {data} = fetch;
    
        return data;
    }catch(error){
        return error;
    }
}
