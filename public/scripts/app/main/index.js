import React from 'react';
import styled from 'styled-components';

const NotificationButton = styled.button`
  margin: 50px;
  border-radius: 6px;
  background-color: rgb(33, 186, 69);
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: smaller;
  :hover {
    background-color: #16ab39;
  }
`;

const MainWrapper = styled.div`
  text-align: center;
`;

const Main = () => {
  return (
    <MainWrapper>
      <h2>Main</h2>
      <NotificationButton
        onClick={() => {
          fetch('/sendNotification', {
            method: 'post',
            headers: {
              'Content-type': 'application/json',
            },
            body: {},
          }).then(() => console.info('notification sent'));
        }}
      >
        Send my a notification please !
      </NotificationButton>
    </MainWrapper>
  );
};

export default Main;
