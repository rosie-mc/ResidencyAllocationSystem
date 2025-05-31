import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const mockJobs = [
  { id: '1', title: 'Intern @ Zerv', slots: 3, pay: '£3,000', description: 'isebaddie for money.' },
  { id: '2', title: 'Full stack dev @ totalcare', slots: 2, pay: '£28,000000', description: 'skincare diva X.' },
  { id: '3', title: 'attendie @ patch', slots: 4, pay: '£2', description: 'software engineering hot gal summa.' }
];


function StudentJobsAndRanking() {
  const [jobs, setJobs] = useState(mockJobs);
  const [selectedJob, setSelectedJob] = useState(null);
  const [likeList, setLikeList] = useState([]);
  const [dislikeList, setDislikeList] = useState([]);
  const [fullRanking, setFullRanking] = useState(null);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (source.droppableId === 'jobBoard') {
      const job = jobs.find(j => j.id === draggableId);
      if (destination.droppableId === 'like') {
        setLikeList(prev => [...prev, job]);
      } else if (destination.droppableId === 'dislike') {
        setDislikeList(prev => [...prev, job]);
      }
    }
  };

  const buildFullRanking = () => {
    // Like list: rank 1 to n
    const likePart = likeList.map((job, idx) => ({
      rank: idx + 1,
      title: job.title
    }));

    // Dislike list: rank starts from after LikeList ends
    const dislikePart = dislikeList.map((job, idx) => ({
      rank: likeList.length + idx + 1,
      title: job.title
    }));

    const combined = [...likePart, ...dislikePart];
    setFullRanking(combined);
  };

  const handleSubmitRanking = () => {
    console.log("Submitting this ranking to backend:", fullRanking);
    // Replace this with axios call later
  };

  return (
    <div style={{ display: 'flex' }}>
      <DragDropContext onDragEnd={handleDragEnd}>

        {/* LEFT: Job Board */}
        <Droppable droppableId="jobBoard" isDropDisabled={true}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: '40%', padding: '20px', borderRight: '1px solid black' }}>
              <h3>Jobs Board</h3>
              {jobs.map((job, index) => (
                <Draggable key={job.id} draggableId={job.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px', cursor: 'pointer', ...provided.draggableProps.style }}
                      onClick={() => setSelectedJob(job)}
                    >
                      <p><strong>{job.title}</strong></p>
                      <p>Slots: {job.slots}</p>
                      <p>Pay: {job.pay}</p>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        {/* RIGHT: Like / Dislike Areas */}
        <div style={{ width: '60%', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>

          <Droppable droppableId="like">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ border: '1px solid green', width: '45%', padding: '10px' }}>
                <h4>Like List</h4>
                {likeList.map((job, index) => (
                  <div key={job.id} style={{ border: '1px solid gray', padding: '5px', margin: '5px' }}>
                    {index + 1}. {job.title}
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="dislike">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ border: '1px solid red', width: '45%', padding: '10px' }}>
                <h4>Dislike List</h4>
                {dislikeList.map((job, index) => (
                  <div key={job.id} style={{ border: '1px solid gray', padding: '5px', margin: '5px' }}>
                    {jobs.length - index}. {job.title}
                  </div>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

        </div>
      </DragDropContext>

      {/* Popup for job details */}
      {selectedJob && (
        <div style={{ position: 'fixed', top: '20%', left: '20%', background: 'white', border: '1px solid black', padding: '20px', zIndex: 10 }}>
          <h3>{selectedJob.title}</h3>
          <p>Slots: {selectedJob.slots}</p>
          <p>Pay: {selectedJob.pay}</p>
          <p>{selectedJob.description}</p>
          <button onClick={() => setSelectedJob(null)}>Close</button>
        </div>
      )}

      {/* Below lists: View Full Ranking + Submit */}
      <div style={{ width: '100%', padding: '20px' }}>
        <button onClick={buildFullRanking} style={{ marginRight: '10px' }}>
          View Full Ranking
        </button>

        {fullRanking && (
          <div>
            <h3>Full Ranking:</h3>
            <ol>
              {fullRanking.map((item, idx) => (
                <li key={idx}>{item.title}</li>
              ))}
            </ol>

            <button onClick={handleSubmitRanking}>Submit Ranking</button>
          </div>
        )}
      </div>

    </div>
  );
}

export default StudentJobsAndRanking;
