const blogs = [
  {name:'React Learning',author:'Stephan Biz',details: 'Welcome to learning React!'},
  {name:'Installation',author:'Schewzdenier',details: 'You can install React from npm.'}
];


function BlogDetails() {
  return (
    <div>
      {blogs.map((Book, index)=>(
        <div key={index}>
            <h1>{Book.name}</h1>
            <h4>{Book.author}</h4>
            <p>{Book.details}</p>
          </div>
      ))}
    </div>
  );
}

export default BlogDetails;
