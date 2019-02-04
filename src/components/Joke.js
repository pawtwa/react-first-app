import React, {Component} from 'react';

class Joke extends Component
{
    render() {
        const { setup, punchline} = this.props.item;        
        return (
            <div>
                <p>- <em>{setup}</em></p>
                <p>- <em>{punchline}</em></p>
            </div>
        )
    }
}

export default Joke;