import styled from '@emotion/styled';

export const Form = styled.form`
max-width:400px;
border: 2px solid black;
background-color: #d3eaed;
margin-left:20px;
padding:20px;
border-radius: 20px;
display:flex;
flex-direction:column;
gap:10px;
`
export const Input = styled.input`
font-size: 10px;
width:200px;
height:20px;
background-color: #d3eaed;
border-radius: 5px;
border: 2px solid inherit; /* Задаємо початковий колір бордеру */
  transition: border-color 0.3s ease; /* Додаємо плавну анімацію для зміни колір бордеру */
  
  /* Стилі для інпуту при наявності помилки */
  &.input-error {
    border-color: darkred;
  }
`
// export const ErrorBlock = styled.div`
// border-color: #fc8181;`


