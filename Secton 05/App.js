import Child from "./Child";
import Button from "./Button";
import User from "./User";
import ShowUsers from "./ShowUsers";
import { useState } from 'react';

const App = () => {

    // Define some variables
    const name = 'Ahmed'
    const x = false

    // Define some onClick handlers for buttons
    const onClick1 = (e) => {
        console.log('clicked button 1')
    }

    const onClick2 = (e) => {
        console.log('clicked button 2')
    }

    const onClick3 = (e) => {
        console.log('clicked button 3')
    }

    // Define a state for the data (list of users)
    const [data, changeData] = useState(
        [
            {
                id: 1,
                name: 'ahmed',
                age: 20,
            },
            {
                id: 2,
                name: 'mona',
                age: 30,
            }
        ])

    // Define a function to add data to the list
    const AddData = (user) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newUser = { id, ...user }
        changeData([...data, newUser])
    }

    // Render the components
    return (
        <div className="App">
            Hello {x ? 'yes' : 'no'}
            <Child title='hello from parent1' color='red' />
            <Child title='hello from parent2' color='blue' />
            <Child title='hello from parent3' color='green' />

            <Button text="No We will" color='red' onClick={onClick1} />
            <Button text="No We  " color='green' onClick={onClick2} />
            <Button text="No " color='blue' onClick={onClick3} />

            <User onAdd={AddData} />
            <ShowUsers data={data} />
        </div>
    );
}

export default App;
