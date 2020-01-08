import React from 'react'

// Можно использовать стрелочную функцию
// const About = () => {
//     const message = 'Hello world message!';
//     return(
//         <h1>About page - {message}</h1>
//         )
// }

// React функция
// const About = () => {
//     const message = 'Hello world message!';
//     return React
//         .createElement('div', null, `About generating from React element`)
// }

// Или можноиспользовать классическую функцию
// function About(){
//     return(
//         <h1>About from function</h1>
//     )
// }

// Reusable class component

class About extends React.Component {
    render() {
        return(
            <h1>Message from React Component</h1>
        )
    }
}

export default About