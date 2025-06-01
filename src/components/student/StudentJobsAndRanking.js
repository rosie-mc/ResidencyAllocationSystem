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

  const handleAddToList = (job, listSetter, currentList, otherList) => {
    if (currentList.some(j => j.id === job.id) || otherList.some(j => j.id === job.id)) {
      alert("Job already added to a list.");
      return;
    }
    listSetter(prev => [...prev, job]);
  };

  const handleResetLists = () => {
    setLikeList([]);
    setDislikeList([]);
    setFullRanking(null);
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const reorder = (list) => {
      const updated = Array.from(list);
      const [moved] = updated.splice(source.index, 1);
      updated.splice(destination.index, 0, moved);
      return updated;
    };

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === 'like') {
        setLikeList(reorder(likeList));
      } else if (source.droppableId === 'dislike') {
        setDislikeList(reorder(dislikeList));
      }
    }
  };

  const buildFullRanking = () => {
    const likePart = likeList.map((job, idx) => ({ rank: idx + 1, title: job.title }));
    const dislikePart = dislikeList.map((job, idx) => ({ rank: likeList.length + idx + 1, title: job.title }));
    const combined = [...likePart, ...dislikePart];
    setFullRanking(combined);
  };

  const handleSubmitRanking = () => {
    console.log("Submitting ranking:", fullRanking);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Job Board */}
      <div style={{ width: '40%', padding: '20px', borderRight: '1px solid black' }}>
        <h3>Jobs Board</h3>
        {jobs.map((job, index) => (
          <div key={job.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedJob(job)}>
            <p><strong>{job.title}</strong></p>
            <p>Slots: {job.slots}</p>
            <p>Pay: {job.pay}</p>
            <button onClick={() => handleAddToList(job, setLikeList, likeList, dislikeList)}>Add to Like</button>
            <button onClick={() => handleAddToList(job, setDislikeList, dislikeList, likeList)}>Add to Dislike</button>
          </div>
        ))}
      </div>

      {/* Like/Dislike Areas with drag-and-drop */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ width: '60%', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <Droppable droppableId="like">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ border: '1px solid green', width: '45%', padding: '10px' }}>
                <h4>Like List</h4>
                {likeList.map((job, index) => (
                  <Draggable key={job.id} draggableId={job.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        style={{ border: '1px solid gray', padding: '5px', margin: '5px', ...provided.draggableProps.style }}>
                        {index + 1}. {job.title}
                      </div>
                    )}
                  </Draggable>
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
                  <Draggable key={job.id} draggableId={job.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        style={{ border: '1px solid gray', padding: '5px', margin: '5px', ...provided.draggableProps.style }}>
                        {likeList.length + index + 1}. {job.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      {/* Job Details Popup */}
      {selectedJob && (
        <div style={{ position: 'fixed', top: '20%', left: '20%', background: 'white', border: '1px solid black', padding: '20px', zIndex: 10 }}>
          <h3>{selectedJob.title}</h3>
          <p>Slots: {selectedJob.slots}</p>
          <p>Pay: {selectedJob.pay}</p>
          <p>{selectedJob.description}</p>
          <button onClick={() => setSelectedJob(null)}>Close</button>
        </div>
      )}

      {/* Build & Submit Ranking */}
      <div style={{ width: '100%', padding: '20px' }}>
        <button onClick={buildFullRanking} style={{ marginRight: '10px' }}>View Full Ranking</button>
        <button onClick={handleResetLists} style={{ marginRight: '10px' }}>Reset Lists</button>

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
