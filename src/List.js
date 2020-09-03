import React, {Component} from 'react';
import Image from './Image';

class List extends Component {
    render() {
        return (
            <div>
                <Image/>
                <ol>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ol>
            </div>
        )
    }
}