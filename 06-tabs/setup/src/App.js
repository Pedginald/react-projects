import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className='section loading'>
        <h2>loading...</h2>
      </section>
    )
  }

  const { id, order, title, dates, duties, company } = jobs[index];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map(job => {
            return (
              <button className='job-btn' onClick={() => setIndex(jobs.indexOf(job))}>
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, ind) => {
            return (
              <div key={ind} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  )
}

export default App
