import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo'

const LAUNCHES_QUERY = gql `
  query LaunchesQuery {
      launches {
        flight_number
        mission_name
        launche_date_local
        launch_sucess
      }
  }
`;


export class Launch extends Component {
    render(){
        return (
            <div>
                <h1 className="display-4 my-3"> Lanches</h1>
                <Query query={LAUNCHES_QUERY}>
                    {
                        
                    }
                </Query>
            </div>
        )
    }
}

export default Launch