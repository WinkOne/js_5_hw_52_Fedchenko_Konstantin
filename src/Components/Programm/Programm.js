import React from 'react'
import './Programm.css'

class Program extends React.Component {
    state = {
        numbers: []
    };

    randomNumber(){
        return Math.floor(Math.random() * (36 - 5) + 5);
    }
     newNumber = () => {
        const numbers = [];
            for (let i = 1; i <= 5;){
                const number = this.randomNumber();
                if (numbers.includes(number)){
                    continue;
                }
                numbers.push(number);
                ++i;
            }
        this.setState({numbers});

         function compareNumbers(a, b) {
             return a - b;
         }
         numbers.sort(compareNumbers)
    };

    renderNumbers() {
        return (
            this.state.numbers.map(number => <div className='box'>{number}</div>)
        )
    }

    render() {
        return (
            <div className='block'>
            <button className='btn' onClick={this.newNumber}>Generate new numbers</button>
                <div className='numberBox'>{this.renderNumbers()}</div>

            </div>
        )
    }
}
export default Program;