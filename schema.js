const axios = require('axios')
const { 
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString, 
    GraphQLBoolean,
    GraphQLList
} = require('graphql');

const LanchType = new GraphQLObjectType({
    name: 'Lanch',
    fields: () => ({
      flight_number: { type: GraphQLInt },
      mission_name: { type: GraphQLString},
      launch_year: { type: GraphQLString },
      launch_date_local: { type: GraphQlString },
      launch_success: { type: GraphQLBoolean },
      rocket: { type: RocketType }
    })
})

// Rocket type
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
      rocket_id: { type: GraphQLString },
      rocket_name: { type: GraphQLString },
      rocket_type: { type: GraphQLString }
    })
})


// Root Query 
const RootQuery = new GraphQLObjectType({ 
    name: 'RootQueryType',
    fields: {
        lanches: {
            type: new GraphQLObjectType (LanchType),
            resolve(parent , args) { 
                return axios.get('https://api.spacedata.com/v3/launches')
                .then( res => res.data)
            }
        }
    }
})