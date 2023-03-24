import React from 'react'
import MediaCard from '../../components/card/MediaCard'
import Card from 'react-bootstrap/Card';
import CustomTable from '../../components/table/CustomTable';


const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 20 },
    { id: 4, name: 'Mary', age: 35 },
    { id: 5, name: 'Tom', age: 28 },
    { id: 6, name: 'Amy', age: 22 },
    { id: 7, name: 'Dave', age: 31 },
    { id: 8, name: 'Lily', age: 29 },
    { id: 9, name: 'Steve', age: 27 },
    { id: 10, name: 'Sarah', age: 24 },
    { id: 11, name: 'Jack', age: 33 },
    { id: 12, name: 'Emily', age: 26 },
    { id: 13, name: 'Alex', age: 21 },
    { id: 14, name: 'Megan', age: 32 },
]

const Dashboard = () => {
    return (
        <>
            <MediaCard
                Message='Dashboard'
            />

            <CustomTable
                data={data}
                columns={["id", "name", "age"]}
                pageSize={7}
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