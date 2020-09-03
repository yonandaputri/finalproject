import React from 'react';

// Component Function Footer
const Footer = (props) => {
    return (
      <div>
        <h3>Halaman Footer</h3>
        <h3>Component ini dibuat menggunakan Function bukan Class</h3>
        <p>This value viewed from props: { props.title }</p>
        <p>My Name is { props.name }</p>
      </div>
    );
}

// const Footer = function(props) {
//     return (
//       <div>
//         <h3>Halaman Footer</h3>
//         <h3>Component ini dibuat menggunakan Function bukan Class</h3>
//         <p>This value viewed from props: { props.title }</p>
//         <p>My Name is { props.name }</p>
//       </div>
//     );
// }

// function Footer() {
//     var name = 'Alessandro Malik';
//     return (
//         <div>
//             <h3>Halaman Footer</h3>
//             <h3>Component ini dibuat menggunakan Function bukan Class</h3>
//     <p>My Name is {name}</p>
//         </div>
//     )
// }

export default Footer;