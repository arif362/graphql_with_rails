import './App.css'
import { useQuery, gql } from '@apollo/client';

export default function App() {
    return (
        <div>
            <h2>My first Apollo app 🚀</h2>
            <br/>
            <DisplayLocations />
        </div>
    );
}

function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data)
    return data.items.map(({ id, name, description}) => (
        <div key={id}>
            <h3>{name}</h3>
            {/*<img width="400" height="250" alt="location-reference" src={`${photo}`} />*/}
            <br />
            <b>About this item:</b>
            <p>{description}</p>
            <br />
        </div>
    ));
}

const GET_LOCATIONS = gql`
    {
      items {
        id
        title
        description
        artist {
          firstName
          lastName
          email
          createdAt
        }
      }
    }
`;