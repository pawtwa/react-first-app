import React, {Component} from 'react'

class SocialProfile extends Component
{
    render() {
        const {image, link} = this.props.item;
        return (
            <div style={{
                display: 'inline-block',
                margin: '5px'
            }}>
                <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} alt='social-profile' style={{ maxHeight: '35px', maxWidth: '35px'}}></img></a>
            </div>
        )
    }
}

export default SocialProfile;