import * as React from 'react';
import styled from 'styled-components';
import * as Colors from '../constants/Colors';

interface Props {
  todoText: string;
}

const Card = styled.div`
  box-shadow: 0 2px 8px 0 ${Colors.shadowColor};
`;

const Label = styled.h2`
  text-align: center;
  justify-content: center;
`;

export default class TodoCard extends React.Component<Props> {
  render() {
    return (
      <Card>
        <div>
          &nbsp;
          <Label>
            <b>{this.props.todoText}</b>
          </Label>
          &nbsp;
        </div>
      </Card>
    );
  }
}
