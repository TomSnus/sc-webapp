import Card from './Card';
import CardStack from './CardStack';
import React from 'react';
import ReactDOM from 'react-dom';
import { AccessAlarm, ArrowDropDown } from '@material-ui/icons';
import { Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import IconButton from '@material-ui/core/IconButton';
import Button1 from './AbortButton';

class ImageListNew extends React.Component {
    state = { images: [] }

    componentDidMount() {
        fetch('/listImages')
            .then(res => res.json())
            .then(images => this.setState({ images }));
    }

    render() {
        return (
            <div>
                <CardStack
                    height={500}
                    width={350}
                    hoverOffset={25}>

                    {this.state.images.map((image, i) =>
                        <Card
                            key={i}
                            background='#   '>
                            <TeamMemberCard {...image} />
                        </Card>
                    )}

                </CardStack>
            </div>
        );
    }
}

const ProfilePicture = ({ imgSrc, borderColor }) => (
    <img
        style={{
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            backgroundColor: '#AF2858',
            border: `2px solid #AF2858`,
            overflow: 'hidden',
        }}
        src={"https://p7.hiclipart.com/preview/632/886/441/mariadb-oracle-database-mysql-open-source-software-zookeeper.jpg"}
    />
);

const DetailsRow = ({ icon, title, summary }) => {
    const renderSummary = () => {
        if (summary) return (
            <p style={{ fontWeight: 250, lineHeight: 1.00 }}>
                {summary}
            </p>
        );
        return null;
    };

    return (
        <div style={styles.detailsRow.row}>
            {/* <span
                className={`icon ${icon}`}
                style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
            /> */}
            <AccessAlarm />
            <div style={{ width: '80%' }}>
                <h2 style={styles.detailsRow.title}>
                    {title}
                </h2>
                {renderSummary()}
            </div>
        </div>
    );
};
const TeamMemberCard = (props) => (
    <div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
        <header style={styles.cardHeader} className='card-header-details'>
            <ProfilePicture imgSrc={props.imgSrc} borderColor={props.imgBorderColor} />
            <div>
                <h1 style={styles.headerName}>{props.RepoTags[0]}</h1>
                <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'><ArrowDropDown />Details</h3>
            </div>
        </header>

        <div style={{ color: '#fff' }}>
            <DetailsRow
                icon='ion-ios-telephone-outline'
                title='Created:'
                summary={props.Created}
            />
     <DetailsRow
                icon='ion-ios-telephone-outline'
                title='id:'
                summary={props.Id}
            />
            


            <DetailsRow
                icon='ion-ios-location-outline'
                title='Label:'
                summary={props.Labels[0]}
            />

            <DetailsRow
                icon='icon ion-ios-paper-outline'
                title='Containers:'
                summary={props.Containers} />
            <Container>
                Operation:
                <Grid direction="row"
                    container spacing={2}>
                    <Grid item xs={12} lg={4}>
                        <Paper >
                            Run
                            <PlayCircleFilledWhiteOutlinedIcon />
                        </Paper>
                    </Grid>
                    <Grid alignItems="flex-start" item justify={'space-evenly'} xs={12} lg={4}>
                        <Button1 />
                        <IconButton onClick={props.onClick}>
                            <StopOutlinedIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        Test
                    </Grid>
                </Grid>
            </Container>
        </div>
    </div >
);

const styles = {
    cardHeader: {
        display: 'flex',
        height: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        color: '#fff',
    },
    headerName: {
        margin: 0,
        fontWeight: 500,
        fontSize: '25px',
        textAlign: 'right'
    },
    headerTitle: {
        margin: '2px 0 0',
        fontWeight: 300,
        fontSize: '17px',
        opacity: 0.8,
        textAlign: 'right',
    },
    detailsRow: {
        row: {
            width: '100%',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            margin: '25px 0',
        },
        icon: {
            display: 'block',
            width: '25px',
            height: '30px',
            margin: '0 20px 0 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            fontSize: '22px',
        },
        title: {
            fontWeight: 250,
            fontSize: '20px',
            margin: 0,
            fontStyle: 'italic',
        },
    },
};
export default ImageListNew;
