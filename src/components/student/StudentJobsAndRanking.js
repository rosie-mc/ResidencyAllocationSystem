import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

//mock data
const mockJobs = [
  { id: '1', title: 'Intern @ MedTech Solutions', slots: 3, pay: '£2000', description: 'Work on medical software systems.' },
  { id: '2', title: 'Developer @ HealthAI', slots: 2, pay: '£2200', description: 'Focus on healthcare analytics.' },
  { id: '3', title: 'Software Engineer @ FinSecure', slots: 4, pay: '£2100', description: 'Develop backend financial systems.' }
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
    <div className="page-container">
      <div className="job-board">
        <h3 className="section-title">Jobs Board</h3>
        {jobs.map((job) => (
          <div key={job.id} className="job-card" onClick={() => setSelectedJob(job)}>
            <p className="job-title">{job.title}</p>
            <p className="job-subtitle">Slots: {job.slots} | Pay: {job.pay}</p>
            <div className="button-group">
              <button 
                className="like-button" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  handleAddToList(job, setLikeList, likeList, dislikeList);
                }}
              >
                Like
              </button>

              <button 
                className="dislike-button" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  handleAddToList(job, setDislikeList, dislikeList, likeList);
                }}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="ranking-area">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="lists-container">
            <Droppable droppableId="like">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="like-box">
                  <h4>Like List</h4>
                  {likeList.map((job, index) => (
                    <Draggable key={job.id} draggableId={job.id} index={index}>
                      {(provided) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps} 
                          className="draggable-item"
                        >
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
                <div ref={provided.innerRef} {...provided.droppableProps} className="dislike-box">
                  <h4>Dislike List</h4>
                  {dislikeList.map((job, index) => (
                    <Draggable key={job.id} draggableId={job.id} index={index}>
                      {(provided) => (
                        <div 
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps} 
                          className="draggable-item"
                        >
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

        <div className="ranking-buttons">
          <button className="view-button" onClick={buildFullRanking}>View Full Ranking</button>
          <button className="reset-button" onClick={handleResetLists}>Reset Lists</button>
        </div>

        {fullRanking && (
          <div className="full-ranking">
            <h3>Full Ranking:</h3>
            <ol>
              {fullRanking.map((item, idx) => (
                <li key={idx}>{item.title}</li>
              ))}
            </ol>
            <button className="submit-button" onClick={handleSubmitRanking}>Submit Ranking</button>
          </div>
        )}
      </div>

      {selectedJob && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={() => setSelectedJob(null)}>X</button>
            <h3>{selectedJob.title}</h3>
            <p>Slots: {selectedJob.slots}</p>
            <p>Pay: {selectedJob.pay}</p>
            <p>{selectedJob.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentJobsAndRanking;
