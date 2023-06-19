import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErroePage() {
    const navigate = useNavigate();
    //it will show me the error for 3 sec after 3 sec it navigate to home page
    useEffect(()=>{
        setTimeout(()=>navigate('/'),3000)
    },[]);
    return (
        <>
            <h1>Opps!!Something Went Wrong..</h1>
        </>
    )
}
