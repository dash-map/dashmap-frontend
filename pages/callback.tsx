import qs from "qs";
import { useEffect } from "react";

interface Props{
    history: any;
    location: any;
}

const Callback = ({history, location}: Props) => {

    const authUri = "https://github.com/login/oauth/authorize?client_id=e478d9cea0fa33472386";

    useEffect(() => {
        const getToken = async () => {
            const {code} = qs.parse(location.search, {
                ignoreQueryPrefix: true,
            });
    
            try {
                const response = await fetch(`${authUri}?code=${code}`);
                const data = await response.json();
    
                localStorage.setItem('token', data.jwt);
    
                history.push('/main')
            }catch(err) {}
        };

        getToken();
    }, [location, history, authUri]);

    return(
        <div></div>
    )
}

export default Callback;