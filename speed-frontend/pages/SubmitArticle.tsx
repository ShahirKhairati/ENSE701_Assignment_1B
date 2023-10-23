import React, { useState } from 'react';
<<<<<<< HEAD
import axios from 'axios'; // You'll need to import Axios or your preferred HTTP client
=======
import axios from 'axios';
import Navbar from '../components/Navbar';
>>>>>>> 92e2bc96f8789c3e9613dd6b9560f5f98ca2ff69


const SubmitArticle: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [articleData, setArticleData] = useState({
    title: '',
    authors: '',
    year: '',
    journal: '',
    doi: '',
    abstract: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArticleData({ ...articleData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const dataToSend = {
      ...articleData,
      year: parseInt(articleData.year)  // Convert the year to a number
    };
  
    try {
      await axios.post('http://localhost:5000/api/articles', dataToSend);
    } catch (error) {
      console.error('Error submitting article:', error);
    }

    // Always set the submission status to the desired message
    setSubmissionStatus("Article has been sent for moderation!");   
};

  return (
<<<<<<< HEAD
      <div style={styles.container as React.CSSProperties}>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" name="title" value={articleData.title} onChange={handleChange} />
        </label>
        <br />
        <label>Authors:
          <input type="text" name="authors" value={articleData.authors} onChange={handleChange} />
        </label>
        <br />
        <label>Year:
          <input type="number" name="year" value={articleData.year} onChange={handleChange} />
        </label>
        <br />
        <label>Journal/Conference:
          <input type="text" name="journal" value={articleData.journal} onChange={handleChange} />
        </label>
        <br />
        <label>DOI:
          <input type="text" name="doi" value={articleData.doi} onChange={handleChange} />
        </label>
        <br />
        <label>Abstract:
=======
    <div style={styles.container as React.CSSProperties}>
      <Navbar/> {/*Navbar Component*/}
      <h1 style={styles.heading}>Submit Evidence</h1> {/* New heading */}
      <form onSubmit={handleSubmit}>
        <div style={styles.container as React.CSSProperties}>
          <label style={styles.label}>Title:</label>
          <input type="text" name="title" value={articleData.title} onChange={handleChange} />
        </div>
        <div style={styles.container as React.CSSProperties}>
          <label style={styles.label}>Authors:</label>
          <input type="text" name="authors" value={articleData.authors} onChange={handleChange} />
        </div>
        <div style={styles.container as React.CSSProperties}>
          <label style={styles.label}>Year:</label>
          <input type="number" name="year" value={articleData.year} onChange={handleChange} />
        </div>
        <div style={styles.container as React.CSSProperties}>
          <label style={styles.label}>Journal/Conference:</label>
          <input type="text" name="journal" value={articleData.journal} onChange={handleChange} />
        </div>
        <div style={styles.container as React.CSSProperties}>
          <label style={styles.label}>DOI:</label>
          <input type="text" name="doi" value={articleData.doi} onChange={handleChange} />
        </div>
        <div style={styles.container as React.CSSProperties}>
          <label style={styles.label}>Abstract:</label>
>>>>>>> 92e2bc96f8789c3e9613dd6b9560f5f98ca2ff69
          <textarea name="abstract" value={articleData.abstract} onChange={handleChange} />
        </div>
        <button type="submit" style={styles.button}>Submit Article</button>
        {submissionStatus && <p style={{ color: '#ffffff' }}>{submissionStatus}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
<<<<<<< HEAD
=======
  button: {
    marginTop: '20px',
    alignSelf: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#ffffff',
    marginBottom: '20px',
  },
  label: {
    marginBottom: '10px',
  },
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '15px',
  },
<<<<<<< HEAD
>>>>>>> 92e2bc96f8789c3e9613dd6b9560f5f98ca2ff69
=======
  statusMessage: {
    marginTop: '15px',
    color: 'yellow', // or any other color you prefer
  },  
>>>>>>> 9b9496af1550edcbd4973ef9d48620b6b83b1a2d
};

export default SubmitArticle;
