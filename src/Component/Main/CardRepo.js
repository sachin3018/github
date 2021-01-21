import React from 'react'
import { Button, Card,  CardTitle } from 'reactstrap'

const CardRepo = ({data}) => {
    return(
       
            
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="mt-1 ml-2 mr-2 mb-5">
                    <CardTitle tag="h4">Reposatory Name : {data.name}</CardTitle>
                    <Button block color="success">
                        <a target="_blank" href={data.html_url}>
                            <h5>Go to Project</h5>
                        </a>
                    </Button>
                </Card>
            
        
    )
}

export default CardRepo;
