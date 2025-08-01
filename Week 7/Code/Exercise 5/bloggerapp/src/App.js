import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="mystyle1">
        <h1>Course Details</h1>
        <CourseDetails />
      </div>
      <div className="st2">
        <h1>Book Details</h1>
        <BookDetails />
      </div>
      <div className="v1">
        <h1>Blog Details</h1>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
