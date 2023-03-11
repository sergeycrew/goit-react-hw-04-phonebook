import styled from 'styled-components';

export const PhonebookForm = styled.form`
  margin-top: 10px;
  margin-bottom: 30px;
`;
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 20px;
  color: rgb(61, 30, 30);
  font-weight: 200;
  font-size: 20px;
`;
export const TextInput = styled.input`
  display: block;
  padding: 10px;
  width: 96%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font-size: 15px;
`;
export const FormButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(90, 4, 4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  :hover {
    opacity: 1;
`;
