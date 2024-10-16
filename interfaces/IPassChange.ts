interface IUpdatePassRequest {
    email: string;
    senha: string;
  }
  
  const updateRequest: IUpdatePassRequest = {
    email: email,
    senha: senha,
  };

export { IUpdatePassRequest, updateRequest };