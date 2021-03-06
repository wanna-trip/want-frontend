import styled from 'styled-components';

export const SignUpWrap = styled.div`
  width: 100%;
  background-color: #f5f6f7;
`;

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpHeader = styled.div`
  color: #03c75a;
  font-size: 100px;
  font-family: 'NanumPenScript';
`;

export const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 20px;
`;

export const SignUpItemWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;

  margin-bottom: 10px;
`;

export const SignUpItemLabel = styled.div`
  width: 100%;
  margin-bottom: 6px;

  font-size: 14px;
  font-weight: 700;
`;

export const SignUpItemBirthInputWrapper = styled.div`
  width: 490px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignUpItemBirthSelect = styled.select`
  width: 140px;
  height: 53px;
  display: flex;
  padding-left: 20px;
  font-size: 15px;
  border: 1px solid #dadada;
  background-color: white;
`;

export const SignUpItemGenderSelect = styled.select`
  width: 100%;
  height: 53px;
  display: flex;
  font-size: 15px;
  padding-left: 20px;
  border: 1px solid #dadada;
  background-color: white;
`;

export const SignUpItemTextInputWrapper = styled.div<{ isFocus: boolean }>`
  width: 100%;
  height: 31px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;

  border: 1px solid ${(props) => (props.isFocus ? '#03c75a' : '#dadada')};
  background-color: white;
`;

export const SignUpItemInput = styled.input`
  font-size: 15px;
  border: 0;

  :focus {
    outline: none;
  }
`;

export const SignUpItemMessage = styled.div`
  width: 100%;
  height: 14px;

  margin-top: 5px;
  font-size: 12px;
`;

export const SignUpSubmitButton = styled.div<{ isValidComplete: boolean }>`
  width: 490px;
  height: 53px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: solid 1px rgba(0, 0, 0, 0.08);
  font-size: 15px;

  background-color: ${(props) => (props.isValidComplete ? '#03c75a' : '#f5f6f7')};
  color: ${(props) => (props.isValidComplete ? 'white' : 'rgb(84, 84, 84)')};
  :hover {
    cursor: ${(props) => (props.isValidComplete ? 'pointer' : 'default')};
  }
`;
