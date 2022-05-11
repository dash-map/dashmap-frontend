import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Loader from "./loader";
import axios from "axios";

const Callback = () => {
    
    const router = useRouter();
    const params = typeof window !== "undefined" ?  new URLSearchParams(location.search) : null;
    const code = params?.get('code') ?? '';
    const URL = "dashmap.kro.kr/api/login?code"

    const [lock, setLock] = useState<boolean>(true);

    useEffect(() => {
        if(code === '') return;

        axios.get(`http://dashmap.kro.kr/api/login?code=${code}`).then((res) => {
            setLock(false);
            localStorage.setItem("access_token", res.data.access_token)
            localStorage.setItem("jwt", res.data.jwt);
            localStorage.setItem('imageUrl', res.data.profileImageUrl);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem('email', res.data.email);
            router.push('/main')
        }).catch((err) => {
            console.log(err)
        })
        
    }, [code]);

    if (lock) return null;

    return(
        <>
            <Loader />
        </>
    )
}

export default Callback;