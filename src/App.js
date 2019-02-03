import React, {Component} from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import Title from './Title'

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
                <hr />
                <p>This is my BIO!</p>
                <button onClick={this.toggleBio}>Hide my Bio</button>
            </div>
        ) : <p><button onClick={this.toggleBio}>Show my Bio</button></p>;
        return bio;
    }

    render() {
        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Paweł Twardziak.</p>
                <Title />
                <p>I am always looking forward to working on meaningful projects.</p>
                {this.getBio()}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;