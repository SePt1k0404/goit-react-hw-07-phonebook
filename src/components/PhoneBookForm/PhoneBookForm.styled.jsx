import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 580px;
  padding: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 2px solid #000;
  border-radius: 20px;
  background-color: #94adab;
`;

export const FormSubmitBtn = styled.button`
  width: 120px;
  margin-left: auto;
  border: none;
  border-radius: 20px;
  padding: 5px;
  background-color: #43c5d1;
  font-weight: bold;
  cursor: pointer;
`;

export const FormInputName = styled.input`
  margin-left: 30px;
  border-color: transparent;
  padding: 5px;
  border-radius: 10px;
`;

export const FormInputNumber = styled.input`
  margin-left: 15px;
  border-color: transparent;
  padding: 5px;
  border-radius: 10px;
`;
