import { IUsuario } from "./IUsuario";

interface ILogin {
    message: string;
}

interface ILoginRequest {
    email: string;
    senha: string;
}

interface ILoginSuccessResponse extends ILogin {
    usuario: IUsuario;
    token: string;
    refreshToken: string;
}

interface ILoginErrorResponse extends ILogin {
}

export { ILoginRequest, ILoginSuccessResponse, ILoginErrorResponse };
