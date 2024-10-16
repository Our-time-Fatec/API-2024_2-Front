import axios from 'axios';

const checkEmailExists = async (email: string) => {
  try {
    const response = await axios.post('http://localhost:3010/usuario/verificar-email', { email });
    return response.data.exists; 
  } catch (error) {
    console.error('Erro ao verificar e-mail:', error);
    return false;
  }
};

export default checkEmailExists;