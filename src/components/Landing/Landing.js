import React, { Component } from 'react';


class Landing extends Component {

    //temp class for calculation of yogaType
   state = {
       answers: ['A', 'B', 'B', 'A', 'C']
   };

    calculate = () => {
        const {answers} = this.state;
        let typesData = {
            A: {
                name: 'vatta',
                count: 0,
                percentage: 0
            },
            B: {
                name: 'pitta',
                count: 0,
                percentage: 0
            },
            C: {
                name: 'kapha',
                count: 0,
                percentage: 0
            }
        };

        answers.forEach((answer) => {
            typesData[answer].count += 1;
            typesData[answer].percentage = Math.round(typesData[answer].count / answers.length * 100);
        });

        console.log(Object.values(typesData)); // temp

        let typesDataArray = Object.values(typesData);
        typesDataArray.sort(function(a, b) {
            return b.percentage - a.percentage ;
        });

        let yogaType = typesDataArray[0].name;
        if (typesDataArray[0].percentage - typesDataArray[1].percentage < 5) {
            yogaType = `${typesDataArray[0].name}-${typesDataArray[1].name}`;
        }
        if (typesDataArray[1].percentage - typesDataArray[2].percentage < 5) {
            yogaType = `${typesDataArray[0].name}-${typesDataArray[1].name}-${typesDataArray[2].name}`;
        }

        console.log(yogaType);
        return yogaType;
    };

    pushAnswerA = () => {
        this.setState((prev) => {
            return {
                answers: [...prev.answers, 'A']
            }
        });
    };

    pushAnswerB = () => {
        this.setState((prev) => {
            return {
                answers: [...prev.answers, 'B']
            }
        });
    };

    pushAnswerC = () => {
        this.setState((prev) => {
            return {
                answers: [...prev.answers, 'C']
            }
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.calculate}>Calculate</button>
                <button onClick={this.pushAnswerA}>Add A</button>
                <button onClick={this.pushAnswerB}>Add B</button>
                <button onClick={this.pushAnswerC}>Add C</button>
            </div>
        );
    }
}

export default Landing;