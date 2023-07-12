import { useState, useEffect } from 'react';
import { HttpAuth } from '../../../shared/Http';

export function UserApi(token: string | null){
    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await HttpAuth("/user/access");
                    if(res.data){
                        setUserData(res.data);
                        setIsLogged(true);
                    }
                } catch (error) {
                    //alert(error)
                }
            }
            getUser();
        }
    }, [token])

    return {
        userInfo: [userData, setUserData],
        isLogged: [isLogged, setIsLogged]
    }
}