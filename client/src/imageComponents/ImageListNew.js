import Card from './Card';
import CardStack from './CardStack';
import React from 'react';
import ReactDOM from 'react-dom';
import people from './people';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
const ImageListNew = (props) => (
    <div>
        <CardStack
            height={500}
            width={350}
            background="#f8f8f8"
            hoverOffset={25}>

            {people.map((person, i) =>
                <Card
                    key={i}
                    background='#   '>
                    <TeamMemberCard {...person} />
                </Card>
            )}

        </CardStack>
    </div>
);

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
            <AccessAlarm/>
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
                <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>Details</h3>
            </div>
        </header>

        <div style={{ color: '#fff' }}>
            <DetailsRow
                icon='ion-ios-telephone-outline'
                title='Created:'
                summary={props.Created}
            />

            <DetailsRow
                icon='ion-ios-location-outline'
                title='Label:'
                summary={props.Labels[0]}
            />

            <DetailsRow
                icon='icon ion-ios-paper-outline'
                title='Containers:'
                summary={props.Containers}
            />
        </div>
    </div>
);

const styles = {
    cardHeader: {
        display: 'flex',
        height: '100px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        color: '#000000',
    },
    headerName: {
        margin: 0,
        fontWeight: 500,
        fontSize: '25px',
        textAlign: 'right'
    },
    headerTitle: {
        margin: '4px 0 0',
        fontWeight: 300,
        fontSize: '17px',
        opacity: 0.8,
        textAlign: 'right'
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
