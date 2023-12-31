import React, { useState } from 'react';
import s from './Form.module.sass';
import TextComponent from '../TextComponent/TextComponent';
import { Button } from '../Button/Button';
import { ButtonX } from '../ButtonX/ButtonX';
export const Form = () => {
  const [name, setName] = useState('Jonathan Davis');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [checkedProjects, setCheckedProjects] = useState([]);
  const [buttonXVisible, setButtonXVisible] = useState(false);
//   const [buttonXText, setButtonXText] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameClick = () => {
    if (name === 'Jonathan Davis') {
      setName('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleButtonXClick = () => {
    setCheckedProjects([]); // Clear selected projects
    setButtonXVisible(false); // Hide ButtonX
  };
  
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const today = new Date().toLocaleDateString('en-US', options);
//   const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());

    fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({ name: name.value, email: email.value }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
       
      })
      .catch(error => {
       
      });

    event.preventDefault();
    setSubmitted(true);
    console.log('Имя:', formDataObj.fname);
    console.log('Email:', formDataObj.email);
    console.log('Сообщение:', formDataObj.comment);
  };

  const sendAgain = () => {
    console.log('again')
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
  }


  return (
    <div className={s.wrapper}>
        <div className={s.border}>
            <ButtonX onClick={handleButtonXClick}>contacts</ButtonX>
        </div>
        <div className={s.formWrapper}>
            <div className={s.leftContent}>
                {submitted ? (
                    <div className={s.thanks}>
                        <p className={s.thanksTitle}>Thank you! 🤘</p>
                        <p className={s.thanksP}>Your message has been accepted. You will recieve answer really soon!</p>
                        {/* <button onClick={sendAgain}>send-new-message</button> */}
                        <div onClick={sendAgain}>
                            <Button id='formSend2' onClick={sendAgain} textBtn="send-new-message" />
                        </div>
                    </div>
                ) : (
                    <form className={s.form} onSubmit={handleChange}>
                        <label className={s.label} htmlFor="fname">
                            <TextComponent text="_name:" />
                        </label>
                        <input
                            className={s.input}
                            type="text"
                            id="fname"
                            name="fname"
                            value={name}
                            onChange={handleNameChange}
                            onClick={handleNameClick}
                        />

                        <label className={s.label} htmlFor="email">
                            <TextComponent text="_email:" />
                        </label>
                        <input
                            className={s.input}
                            type="email"
                            name="email"
                            id="email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />

                        <label className={s.label} htmlFor="message">
                            <TextComponent text="_message:" />
                        </label>
                        <textarea
                            className={`${s.input} ${s.noResize}`}
                            rows="13"
                            cols="30"
                            name="comment"
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                        <Button id='formSend' textBtn="submit-message" />
                    </form>
                )}
            </div>
            <div className={s.rightContent}>
                <div className={s.textWrapper}>
                    <div className={s.row}>
                        <div className={s.number}>1</div>
                        <p><span className={s.pink}>const</span> <span className={s.blue}>button</span> <span className={s.pink}>=</span> <span className={s.blue}>document</span>.<span className={s.blue}>querySelector</span>(<span className={s.orange}>'#sendBtn'</span>);</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>2</div>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>3</div>
                        <p><span className={s.pink}>const</span> <span className={s.blue}>message</span> <span className={s.pink}>= </span>&#123;</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>4</div>
                        <p><span className={s.blue}>&nbsp;name</span>:<span className={s.orange}>&nbsp;"{name}"</span>,</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>5</div>
                        <p><span className={s.blue}>&nbsp;email</span>:<span className={s.orange}>&nbsp;"{email}"</span>,</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>6</div>
                        <p><span className={s.blue}>&nbsp;message</span>:<span className={s.orange}>&nbsp;"{message}"</span>,</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>7</div>
                        <p>date:<span className={s.orange}>&nbsp;"{today}"</span></p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>8</div>
                        <p>&#125;</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>9</div>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>10</div>
                        <p><span className={s.blue}>button</span>.<span className={s.blue}>addEventListener</span>(<span className={s.orange}>'click'</span>, () <span className={s.pink}>=&gt; </span>&#123;</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>11</div>
                        <p><span className={s.blue}>&nbsp;form</span>.<span className={s.blue}>send</span>(<span className={s.blue}>message</span>);</p>
                    </div>
                    <div className={s.row}>
                        <div className={s.number}>12</div>
                        <p>&#125;)</p>
                    </div>
                    {/* <FormCode/> */}
                </div>
            </div>
        </div>
    </div>
  );
};
