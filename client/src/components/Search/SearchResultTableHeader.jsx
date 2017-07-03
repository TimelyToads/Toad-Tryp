import React from 'react';
import { Table, Header, Rating, Image, Label } from 'semantic-ui-react';

const SearchResultTableHeader = (props) => (
  <Table.Header>
    <Table.Row>
      { props.headers.map( (title, index) => {
        return  <Table.HeaderCell key={index} singleLine>{title}</Table.HeaderCell>
      })}
    </Table.Row>
</Table.Header>
)

export default SearchResultTableHeader;