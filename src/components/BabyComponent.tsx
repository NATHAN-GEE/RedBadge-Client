import React from "react";


// const SearchAll = (props) => {
//     const deleteDestination = (place) => {
//       fetch(`http://localhost:4000/save/${place.id}`, {
//         method: "DELETE",
//         headers: new Headers({
//           "Content-Type": "application.json",
//           Authorization: props.token,
//         }),
//       }).then(() => {
//           props.getSaved();
//       });
//     };
//   const Mapper = () => {
//     return props.places.map((place, index) => {
//       //here the props is called again from search index file. we use that to then map over the array
//       // and assign each result to a table. we have the index in the row because we want all this info
//       //to be displayed in one row just like it is in the database. place.rating etc. in the information in the 
//       // are the values that we map over to create a new array of these and display them for the user.
//       return (
//         <tr key={index}>
//           <th scope="row">{place.id}</th>
//           <td>{place.rating}</td>
//           <td>{place.description}</td>
//           <td>{place.destination}</td>
//           <td>{place.name}</td>
//           <td>{place.attractions}</td>
//           <td><button color="warning" onClick={() => { props.editUpdateDest(place); props.updateOn() }}>Update</button>
//           </td>
//           <td><button color="danger" onClick={() => { deleteDestination(place) }}>Delete</button></td>
//         </tr>
//       );
//     });
//   };
//   return (
//     <>
//       <h3>Saved Places</h3>
//       <hr />
//       <table>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Rating</th>
//             <th>Description</th>
//             <th>Destination</th>
//             <th>Name</th>
//             <th>Attractions</th>
//           </tr>
//         </thead>
//         <tbody>{Mapper()}</tbody>
//       </table>
//     </>
//   );
// };

// export default SearchAll;
