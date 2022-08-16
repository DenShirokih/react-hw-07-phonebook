import styled from '@emotion/styled';

export const ContactItem = styled.li`
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 430px;
  border: solid 1px black;
  border-radius: 20px;
  padding: 2px;
  margin-bottom: 12px;
`;
export const Btn = styled.button`
  margin-right: 10px;
  background-color: white;
  border-radius: 10%;
  border: none;
  width: 30px;
  height: 30px;
  background-image: url('https://www.svgrepo.com/show/162728/delete.svg');
  background-repeat: no-repeat;
  padding-right: 35px;
`;
export const ContactName = styled.p`
  font-size: 15px;
  margin: 5px;
`;
export const PhoneNumber = styled.p`
  margin: 5px;
  font-size: 15px;
`;
export const ContactInfo = styled.div`
  display: flex;
`;
