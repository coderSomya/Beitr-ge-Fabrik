'use client';
import styles from '@/app/page.module.css'
import prisma from '@/lib/prisma';
import { useState } from 'react';

export default function AddPost(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
        fetch ('/api/add-post',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, content})
        })
      } catch (error) {
        console.log(error);
      }
      setTitle('');
      setContent('');
    };
  



    return(
        <main className={styles.main}>
            Add post
            <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
        </main>
    )
}