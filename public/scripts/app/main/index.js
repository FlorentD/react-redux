import React from 'react';
import styled from 'styled-components';
import { Header, Icon, Button } from 'semantic-ui-react';
import { getSubscription } from '../push';

const NotificationButton = styled.div`
  margin: 50px;
`;

const Main = () => {
  return (
    <Header as="h2" icon textAlign="center">
      <Icon name="users" circular />
      <Header.Content>Main</Header.Content>
      <NotificationButton>
        <Button
          positive
          onClick={() => {
            fetch('/sendNotification', {
              method: 'post',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({
                subscription: getSubscription(),
              }),
            }).then(() => console.info('notification sent'));
          }}
        >
          Send my a notification please !
        </Button>
      </NotificationButton>
    </Header>
  );
};

export default Main;
