import { useLocation } from "react-router-dom";
import  Black  from "../../common/Black";
import Footer from "./Footer";
import Form from "../../common/Form";

export const Contact=()=>{
     
    return(<>
    <div> <Black title={"Contact to me"} subtitle={"Say Hello to me..."}/></div>
    <div> <Form/></div>
    <div> <Footer/></div>
       
       
       
    </>
    )
};