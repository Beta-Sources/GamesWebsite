import { createContext, useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
    image: ""
  },
  token: ""
};

const persist = (token, rememberme) => {
  const expiration = rememberme ? 30 : 0.5;
  Cookies.set("token", `${token}`, { expires: expiration });
};

export const AuthContext = createContext();
const AuthContextProvider = props => {
  const Router = useRouter();
  const [state, setState] = useState({
    isAuthenticated: null,
    user: {
      id: "",
      name: "",
      email: "",
      image: ""
    },
    token: ""
  });

  useEffect(() => {
    (async () => {
      // try {
      //   if(Cookies.get("token")){
      //     const url = 'https://web.metatech.games/profile';
      //     const response = await fetch(url, {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //         "token": Cookies.get('token')
      //       }
      //     });

      //     const { player } = await response.json();
      //     // console.log(await player)
      //     setState({
      //       isAuthenticated: true,
      //       user: {
      //         id:   player.user_id,
      //       name:   `${player.first_name} ${player.last_name}`,
      //       email:  player.email,
      //       image:  player.image || "/assets/Games/card.jpg"
      //       },
      //       token: Cookies.get("token")
      //     }) 
      //   }else{
      //     setState(initialState) 
      //   }
      // } catch (error) {
      //   setState(initialState);
      //   Cookies.remove('token');
      //   // console.log(error.message)
      // }

      if(Cookies.get("token")){
        setState({
          isAuthenticated: true,
          user: {
            id: /*(await user.id) ||*/ 123,
            name: `random ranomd`,
            email: "random@ranomd.com",
            image: "/assets/Games/card.jpg"
          },
          token: "ourauthtoken"
        }) 
      }else{
        setState(initialState);
        Cookies.remove('token');
      }
         







    })();
  }, [Cookies.get('token')])

  const signup = async user => {
    try {
      const url = "https://web.metatech.games/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first_name: user.firstName,
          last_name: user.lastName,
          email: user.email,
          password: user.password,
          confirm_password: user.confirmPassword
        })
      });

      if ((await response.status) === 200) {
        const { player: user, token } = await response.json();
        setState({
          isAuthenticated: true,
          user: {
            id: (await user.id) || 123,
            name: `${await user.first_name} ${await user.last_name}`,
            email: await user.email,
            image: (await user.image) || "/assets/Games/card.jpg"
          },
          token: await token
        });
        persist(await token, false);
        Router.push("/");
      } else {
        throw new Error();
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  const login = async credentials => {
    // try {
    //   const url = "https://web.metatech.games/login";
    //   const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //       email: credentials.email,
    //       password: credentials.password
    //     })
    //   });
    //   if ((await response.status) === 200) {
    //     const { player: user, token } = await response.json();
    //     setState({
    //       isAuthenticated: true,
    //       user: {
    //         id: (await user.id) || 123,
    //         name: `${await user.first_name} ${await user.last_name}`,
    //         email: await user.email,
    //         image: (await user.image) || "/assets/Games/card.jpg"
    //       },
    //       token: await token
    //     });
    //     persist(await token, credentials.rememberme);
    //     if (Router.pathname !== "/") Router.push("/");
    //   } else {
    //     throw new Error("Wrong Email or Password");
    //   }
    // } catch (error) {
    //   alert(error.message);
    // }

    setState({
      isAuthenticated: true,
      user: {
        id: /*(await user.id) ||*/ 123,
        name: `random ranomd`,
        email: "random@ranomd.com",
        image: "/assets/Games/card.jpg"
      },
      token: "ourauthtoken"
    });
  };

  const logout = () => {
    setState({
      isAuthenticated: false,
      user: {
        id: "",
        name: "",
        email: "",
        image: ""
      },
      token: ""
    });
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider value={{ ...state, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
