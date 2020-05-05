import styled from 'styled-components'

export const InputContainer = styled.input`
 font-size:1.3rem;
 background: transparent;
 border:0.05rem solid var(--light1);
 color:var(--light1);
 border-radius:1rem;
 border-color:var(--light1);
 padding:0.5rem 0.5rem;
 cursor:pointer;
 margin:0.2rem 0.5rem 0.2rem 0;
 &:focus{
     outline:none;
     box-shadow:2px 2px 5px 0px rgba(0, 0, 0, 0.2);
 }
`