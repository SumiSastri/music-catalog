// REDUX REFACTOR : step 3 lift state out of component and set it in reducer
// note the state tree is called blogs{ with the state of blogPosts:[]}
import {
	GET_BLOG_POSTS,
} from '../blog-actions/BlogActionCreators';

const initialState = {
	blogPosts: []
};

const blogReducers = (state = initialState, action) => {
    switch (action.type) {
        // this is blogPosts array not blogs which is the state tree passed to root reducers
        // the actions now calling the data from api in the actions creators and imported 
        // - payload is the response payload of api-call
        case GET_BLOG_POSTS:
            return {
                ...state,
                blogPosts: action.payload,
            };
            default:
                return state;
};


// export class BlogsHome extends Component {
// 	constructor(props) {
// 		super(props);
// 		console.log(` blog props`, this.props);
// 		this.state = {
// 			blogs: []
// 		};
// 	}
// 	initialState = this.state;
