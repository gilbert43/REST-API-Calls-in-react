import React, { Component } from 'react'
import axios from 'axios'

export default class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

   
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>list of posts</h1>
                {
                   posts.map(post => <div key={post.id}>{post.title}</div>)
                }
                    
            </div>
        )
    }
}
