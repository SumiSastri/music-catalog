

The history object is one of the methods in react-router object. The history object in turn has its own methods.
For example, ```history.location()```. This method gives you the location of the page  you are on and its unique resource locator (url) ```/hip-hop-blogs/:blogs_id```


```
history:
action: "POP"
block: ƒ block(prompt)
createHref: ƒ createHref(location)
go: ƒ go(n)
goBack: ƒ goBack()
goForward: ƒ goForward()
length: 20
listen: ƒ listen(listener)
location: {pathname: "/hip-hop-blogs/:blogs_id", search: "", hash: "", state: undefined, key: "p2ljdt"}
push: ƒ push(path, state)
replace: ƒ replace(path, state)
```
To re-direct the ```history.push()``` method redirects you from this page to another location
The method takes 2 arguments - the path to redirect this page to the the new page


```
	componentDidMount() {
		this.getPosts();
		setTimeout(() => {
			this.props.history.push('/hip-hop-playlist');
		}, 2000);
	}
```    




import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

import BlogCard from './BlogCard';

// Parent jsx attribute passed props in BlogList
// Child BlogCard state passed down one more time via BlogCard attribute
// Here we can use a programmatic redirect?
// TAKES YOU TO URL AND REDIRECTS COMPLETE PAGE

const BlogList = ({ blogs }) => {
	const displayBlogList = blogs.map((blog, i) => {
		return (
			<div key={blogs[i].id} className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				{/* <Link to="/hip-hop-blogs/:blogs_id"> */}
				<BlogCard id={blogs[i].id} title={blogs[i].title} body={blogs[i].body} />
				{/* </Link> */}
			</div>
		);
	});
	// if (true) {
	// 	throw new Error('An Error Has Occured Check your Code!');
	// }
	// UNCOMMENT CODE FOR PRODUCTION
	return <div>{displayBlogList}</div>;
};

// export default withRouter(BlogList);
export default BlogList;

