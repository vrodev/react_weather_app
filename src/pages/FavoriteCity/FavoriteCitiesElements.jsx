import styled from 'styled-components';

export const Div = styled.div`
  width: 100px;
  height: 50px;
  border: 5px outset aqua;
  background-color: aqua;
  text-align: center;
  margin: 15px;
  font-size: medium;
  cursor:pointer;
`;

export const TextField = styled.input`
    outline: none;
    padding: 20px 7%;
    border-radius: 15px;
    border: none;
    margin-bottom: 2%;
    background: rgba(0,255,255);
`;

export const Buttons = styled.button `
    outline: none;
    padding: 10px 2%;
    border-radius: 15px;
    border: none;
    margin-bottom: 2%;
    background: rgba(0,255,255);
    cursor:pointer;
`;