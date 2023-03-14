import React from 'react'
import MediaCard from '../../components/card/MediaCard'
import Card from 'react-bootstrap/Card';

const Dashboard = () => {
    return (
        <>
            <MediaCard
                Message='Dashboard'
            />

            <Card
                bg={'Light'.toLowerCase()}
                key={'Light'}
                text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="mb-2 m-2"
            >
                <Card.Body>
                    <Card.Title> Users </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Dashboard