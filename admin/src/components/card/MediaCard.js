import React from 'react'
import Card from 'react-bootstrap/Card';

const MediaCard = (props) => {
    return (
        <Card className=' m-2'>
            <Card.Body>{props.Message}</Card.Body>
        </Card>
    )
}

export default MediaCard