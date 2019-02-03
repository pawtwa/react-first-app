import React, {Component} from 'react';
import TITLES from './data/titles';

class Title extends Component
{
    state = {
        titleIndex: 0
    }
    
    componentDidMount() {
        console.log('Title component has mounted.');
        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex: titleIndex});
        }, 4000);
    }

    render() {
        const title = TITLES[this.state.titleIndex];
        return (
            <p>I am {title}.</p>
        )
    }
}

export default Title;