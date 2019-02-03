import React, {Component} from 'react';
import TITLES from './data/titles';

class Title extends Component
{
    _isMounted = false;

    _animateTitlesInterval = null;
    _fadeOutTimeout = null;

    state = {
        titleIndex: 0,
        titleStateClass: null,
        fadeIn: true,
        animateTitlesDelay: 3000
    }

    titleStates = [
        'success', 'info', 'warning'
    ]

    componentDidMount() {
        this._isMounted = true;
        this._fadeOutTimeout = this.setFadeOutTimeout();
        this.animateTitles();
    }

    componentWillMount() {
        const titleStateClass = this.generateTitleStateClass();
        this.setState({
            titleStateClass: titleStateClass
        }, () => {
            this.afterSetTitleStateClass();
        });
    }

    componentWillUnmount() {
        if (this._animateTitlesInterval !== null) {
            clearInterval(this._animateTitlesInterval);
            this._animateTitlesInterval = null
        }
        if (this._fadeOutTimeout !== null) {
            clearTimeout(this._fadeOutTimeout);
            this._fadeOutTimeout = null;
        }
        this.props.onChangeTitle(null);
    }

    setFadeOutTimeout = () => {
        return setTimeout(() => {
            this.setState({
                fadeIn: false
            })
        }, Math.round(this.state.animateTitlesDelay / 2));
    }

    randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    generateTitleStateClass = () => {
        return this.titleStates[this.randomIntFromInterval(0, this.titleStates.length - 1)];
    }

    animateTitles = () => {
        this._animateTitlesInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            const titleStateClass = this.generateTitleStateClass();
            this.setState({
                titleIndex: titleIndex,
                titleStateClass: titleStateClass,
                fadeIn: true
            }, () => {
                this.afterSetTitleIndex();
                this.afterSetTitleStateClass();
            });
        }, this.state.animateTitlesDelay);
    }

    afterSetTitleIndex = () => {
        this._fadeOutTimeout = this.setFadeOutTimeout();
    }

    afterSetTitleStateClass = () => {
        this.props.onChangeTitle(this.state.titleStateClass);
    }

    render() {
        const {titleIndex, fadeIn, titleStateClass} = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={(fadeIn ? 'title-fade-in' : 'title-fade-out') + ' alert alert-' + titleStateClass} style={{fontSize: 26, fontWeight: 900}}>I am {title}.</p>
        )
    }
}

export default Title;