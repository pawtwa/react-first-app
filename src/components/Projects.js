import React, {Component} from 'react'
import PROJECTS from '../data/projects';
import Project from './Project'

class Projects extends Component
{
    render() {
        return (
            <div>
                <h2>My Projects</h2>
                <div>
                    {
                        PROJECTS.map((PROJECT) => {
                            return (
                                <Project key={PROJECT.id} item={PROJECT} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;