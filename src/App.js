import React, {Component} from 'react'

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log(regularClassInstance);
console.log(componentClassInstance);

class App extends Component 
{
    state = {
        displayBio: false
    };

    toggleBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        });
    }

    getBio = () => {
        const bio = this.state.displayBio ?  (
            <div>
                <p>This is my BIO!</p>
                <button onClick={this.toggleBio}>Hide BIO</button>
            </div>
        ) : <p><button onClick={this.toggleBio}>Show BIO</button></p>;
        return bio;
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>This is App Component</p>
                {this.getBio()}
            </div>
        )
    }
}

export default App;