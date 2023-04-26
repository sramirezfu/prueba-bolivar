import { FC } from "react"

const CLIENT_ID = "0479985242184621921fc8623b8fc770"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

const LoginComp: FC = () => {

    return (
        <div className="login-modal">
            <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 login-content bg-white">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="text-center text-[18px] font-bold text-cb-primary">TO MUSIC</div>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Ingresa con tu cuenta de Spotify
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                        className="flex w-full justify-center rounded-md bg-cb-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Ingresar
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginComp;