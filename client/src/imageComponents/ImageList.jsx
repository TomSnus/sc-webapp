import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Title from '../Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const list = [
    {
        id: 'a',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'b',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
];

const ImageList = () => <List list={list} />;

const List = ({ list }) => (
    <div>
    <Title class>Recent Deposits</Title>
    <React.Fragment>
        <ul>
            {(list || []).map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
    </React.Fragment>
    </div>
);

const ListItem = ({ item }) => (
    <li>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
    </li>
);

export default ImageList;