import React, {Component} from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import Title from './Title'

class App extends Component 
{
    state = {
        displayBio: false,
        titleStateClass: null
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
                <p className={'alert alert-' + this.state.titleStateClass}>This is me "changing" above!</p>
                <button className="btn btn-danger" onClick={this.toggleBio}>Do not meet me...</button>
            </div>
        ) : <p><button className="btn btn-primary" onClick={this.toggleBio}>Meet me...</button></p>;
        return bio;
    }

    onChangeTitle = (titleStateClass) => {
        this.setState({
            titleStateClass: titleStateClass
        });
    }

    render() {
        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Paweł Twardziak.</p>
                {/* <Title onChangeTitle={this.onChangeTitle} /> */}
                {this.state.displayBio ? <Title onChangeTitle={this.onChangeTitle} /> : null}
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