import { ImageLoaded } from "../Image-loaded/ImageLoaded";
import styled from "styled-components";

export const MobileDetails = ()=>{

    const Main = styled.div`
        background-color:#f4f4f4;
        height:900px;
        overflow:hidden;
    `;
    return <Main>
        <br /><br /><br /><br /><br /><br /><br />
        <ImageLoaded image={"https://images.samsung.com/in/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg"} title={"Galaxy S22 Ultra 1TB"} description={"Available exclusively on Samsung.com Get Watch4 at ₹ 2999*"} top={"200px"} color={"black"} margin={"10%"}/>
    </Main>
}