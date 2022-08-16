import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  display: flex;
  padding: 10px;
`;

export const Input = styled.input`
  border-radius: 10px;
  width: 430px;
  font: inherit;
  padding: 5px;
  font-size: 15px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const BtnAddContact = styled.button`
  border: 1px solid #ffffff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background-color: #ffffff;
  background-image: url('https://www.svgrepo.com/show/123778/add-contact.svg');
  background-repeat: no-repeat;
`;
