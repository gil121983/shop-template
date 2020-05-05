import styled from 'styled-components'

export const ButtonContainer = styled.button`
 text-transform:capitalize;
 font-size:1.3rem;
 background: transparent;
 border:0.05rem solid var(--light1);
 color:${props => props.cart ? "var(--main2)" : "var(--light1)"};;
 border-radius:1rem;
 border-color:${props => props.cart ? "var(--main2)" : "var(--light1)"};
 padding:0.5rem 0.5rem;
 cursor:pointer;
 margin:0.2rem 0.5rem 0.2rem 0;
 transition:all 0.5s ease-in-out;
 align-text:center;
 &:hover{
     background:${props => props.cart ? "var(--main2)" : "var(--light1)"};
     color:var(--main1);
     box-shadow:2px 2px 5px 0px rgba(0, 0, 0, 0.2);
 }
 &:focus{
     outline:none;
 }
`