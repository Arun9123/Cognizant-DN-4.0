const courses = [
  { name: 'Angular', date: '4/5/2021' },
  { name: 'React', date: '6/3/2020' }
];


function CourseDetails() {
  return (
      <div>
        {courses.map((course, index) => (
          <div key={index}>
            <h2>{course.name}</h2>
            <p>{course.date}</p>
          </div>
        ))}
      </div>
  );
}

export default CourseDetails;
