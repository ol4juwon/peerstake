import React from 'react';
import styled from 'styled-components';
import background from "../assets/[Downloader\ 2.png";
const Test = () => {
    return (
        <Test.Wrapper>
            <>
            hi
            </>
        </Test.Wrapper>
    );
}
Test.Wrapper = styled.div`
background: #E5E5E5;
background: linear-gradient(3.33deg, rgb(68, 35, 133) 16.43%, rgba(154, 115, 231, 0) 141.44%), url('${background}');
width: 100%;
height: 100vh;
mix-blend-mode: multiply;
box-sizing: border-box;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-position: center center;  
background-repeat: no-repeat;
`

export default Test;
