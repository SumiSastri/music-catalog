// REDUX REFACTOR : step 3 lift state out of component and set it in reducer
const initialState = {
	blogs: []
};

const blogReducers = (state = initialState, action) => {
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
