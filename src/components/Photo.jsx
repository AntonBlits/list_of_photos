import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import style from "./Photo.module.css";

export function Photo({ photo }) {
   const [bigPhoto, setBigPhoto] = useState(false);
   const [value, setValue] = useState('');
   const [comments, setComments] = useState([]);

   const img = bigPhoto ? style.img : style.i;
   const photoImg = bigPhoto ? style.photo : '';

   async function fetchComments(id) {
      try {
         const response = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
         setComments(response.data.comments);
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      fetchComments(photo.id);
   }, [photo.id]);

   const handleSubmit = async (event) => {
      event.preventDefault();
      setValue('');
      // setBigPhoto(false);

      try {
         const response = await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${photo.id}/comments`, {
            "id": photo.id,
            "text": value,
            "date": ''
         });
         console.log(response.data);
      } catch (error) {
         console.log(error.message);
      }
   }

   return (
      <div className={photoImg}>
         <div onClick={() => setBigPhoto(prev => !prev)}>
            <img alt="" src={photo.url} className={img} />
         </div>
         {bigPhoto && <>
            <ul>
               {comments.map(comment => <li className={style.comment} key={comment.id}>{comment.text}</li>)}
            </ul>
            <form onSubmit={handleSubmit} >
               <div className={style.form}>
                  <label htmlFor="text" className={style.label}>Comment</label>
                  <textarea
                     type="text"
                     value={value}
                     onChange={(e) => setValue(e.target.value)}
                     id="text"
                     className={style.textarea}
                  />
                  <label htmlFor="text" className={style.helpText}>Write a few sentences about the photo.</label>
               </div>
               <div>
                  <button type="submit" className={style.btn}>Save</button>
               </div>
            </form>
         </>}
      </div>
   )
}