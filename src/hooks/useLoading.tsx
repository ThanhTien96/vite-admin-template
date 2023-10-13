import {useState} from 'react';


const useLoading = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const enableLoading = () => setLoading(true);
    const disableLoading = () => setLoading(false);

    return [loading, enableLoading, disableLoading] as [
        boolean,
        () => void,
        () => void,
    ]
};

export default useLoading;