import React, {Component} from 'react';
import Joke from './Joke';

class Jokes extends Component
{
    state = {
        joke: {},
        moreJokes: false
    }

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke: json}));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => {
                this.props.onTenNewDidLoad(json);
                this.setState({moreJokes: !!json.length});
            });
    }

    resetJokes = () => {
        this.props.onTenNewDidLoad([]);
        this.setState({moreJokes: false});
    }

    render() {
        const joke = this.state.joke;
        const moreJokes = this.state.moreJokes;
        return (
            <div>
                <h2>Best IT joke for today!</h2>
                {joke.id ? <Joke key={joke.id} item={joke} /> : null}
                <h3>Do you want ten new jokes?</h3>
                <button className="btn btn-default" onClick={this.fetchJokes}>Yes!</button>
                {moreJokes ? <button className="btn btn-danger" onClick={this.resetJokes}>No!</button> : null}
            </div>
        )
    }
}

export default Jokes;