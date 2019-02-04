import React, {Component} from 'react'
import Projects from './Projects'
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Title from './Title';
import Jokes from './Jokes';
import Joke from './Joke';

class App extends Component 
{
    state = {
        displayBio: false,
        titleStateClass: null,
        tenNewJokes: []
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

    tenNewJokesDidLoad = (tenNewJokes) => {
        this.setState({tenNewJokes: tenNewJokes});
    }

    render() {
        const tenNewJokes = this.state.tenNewJokes;
        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1>Hello!</h1>
                <p>My name is Paweł Twardziak.</p>

                <div className="row">
                    <div className="col-sm-6">
                        <h3>About me</h3>
                        {/* <Title onChangeTitle={this.onChangeTitle} /> */}
                        {this.state.displayBio ? <Title onChangeTitle={this.onChangeTitle} /> : null}
                        <p>I am always looking forward to working on meaningful projects.</p>
                        {this.getBio()}
                    </div>
                    <div className="col-sm-6">
                        <Jokes onTenNewDidLoad={this.tenNewJokesDidLoad} />
                    </div>
                </div>
                {tenNewJokes.length ? <div>
                    <hr />
                    <h2>Ten new jokes!</h2>
                    <div className="row">
                        <div className="col-sm-6">
                            {tenNewJokes.map((joke, index) => {
                                return index <= Math.ceil(tenNewJokes.length / 2) ? 
                                    <div key={'left-' + joke.id}>
                                        <hr />
                                        <Joke item={joke} />
                                    </div>
                                : null
                            })}
                        </div>
                        <div className="col-sm-6">
                            {tenNewJokes.map((joke, index) => {
                                return index > Math.ceil(tenNewJokes.length / 2) ? 
                                    <div key={'right' + joke.id}>
                                        <hr />
                                        <Joke item={joke} />
                                    </div>
                                : null
                            })}
                        </div>
                    </div>
                </div> : null}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;