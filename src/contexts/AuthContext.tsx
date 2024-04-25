import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { buscar, login } from "../services/Service";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
  setUsuario: Dispatch<SetStateAction<UsuarioLogin>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [userData,setUserData] = useState<UsuarioLogin>()
  
  const [usuario, setUsuario] = useState<UsuarioLogin>(() => {
    const storagedUser = sessionStorage.getItem("@App:usuario"); // Alterado para sessionStorage
    if (storagedUser) {
      return JSON.parse(storagedUser);
    }
    return {
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    };
  });

  useEffect(() => {
    sessionStorage.setItem("@App:usuario", JSON.stringify(usuario)); // Alterado para sessionStorage
  }, [usuario]);
  
 

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, userLogin, setUserData);
      alert("Usuário logado com sucesso");
      setIsLoading(false);
    } catch (error) {
      alert("Dados do usuário inconsistentes");
      setIsLoading(false);
    }
  }

  useEffect(
  ()=>{
    const fetchData = async()=>{
    try {
      if (userData && userData.id !== 0) {
        await buscar(`/usuarios/${userData.id}`, setUsuario, {
            headers: {
              'Authorization': userData.token
            }
          });
      }
    } catch (error) {
      alert(`erro: ${error}`)
    }
  }
  fetchData()
},[userData,setUsuario]
)
  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
    sessionStorage.removeItem("@App:usuario"); // Alterado para sessionStorage
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogin, handleLogout, isLoading, setUsuario }}
    >
      {children}
    </AuthContext.Provider>
  );
}
