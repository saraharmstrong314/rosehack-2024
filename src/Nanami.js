import React, { useState, useEffect } from 'react';
import OpenAI from 'openai';
import constants from './Key.json';
import './Nanami.css';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { computeHeadingLevel } from '@testing-library/react';

const openai = new OpenAI({ apiKey: constants.apiKey, dangerouslyAllowBrowser: true });

const Nanami = () => {
  const {username} = useParams(); 
  const [budget, setBudget] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);
  const [userdata, setUserData] = useState('');
  useEffect(() => {
    const fetchUserData = async () => {
        try {
          setLoading(true);
          const userQuerySnapshot = await db.collection('users').where('username', '==', username).get();
    
          if (!userQuerySnapshot.empty) {
            const userData = userQuerySnapshot.docs[0].data();
            console.log(userData);
            setUserData(userData);
          } else {
            console.log('User not found');
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        } finally {
          setLoading(false);
        }
      };
    
      fetchUserData();
  }, [username]);
  const handleChat = async () => {
    try {
        setLoading(true);
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              'Your name is Gojo. Address the person with their name. Please help the user managing his budget. He has a budget of '+userdata.budget +' dollars for this month, has done total expenses of '+ userdata.totalExpense+ ' dollars already. My age is '+ userdata.age+ ', location is '+ userdata.location+ ', and my name is ' + userdata.username+ '. Please advise him on how he should spend his money and what to buy based on age, location, budget and expenses.',
          },
          { role: 'user', content: budget },
        ],
        model: 'gpt-3.5-turbo',
      });

      console.log(response);
      const suggestedItem = response.choices[0].message.content;
      setAdvice(`Recommendation: ${suggestedItem}`);
    } catch (error) {
      console.error('Error fetching advice:', error.message);
      setAdvice('Sorry, an error occurred while fetching advice.');
    }
    finally {
        setLoading(false);
      }
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleChat();
    }
  };

  return (
    <div className="container">
      <div className="chatbox">
        <h2>I am here to help you with your budget and expenses</h2>
        <input
          type="text"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          onKeyDown={handleEnterKey}
          style={{ width: `${(budget.length + 15) * 10}px` }}
          placeholder='Ask me anything'
        />
        <button onClick={handleChat}>Get Advice</button>
      </div>
      {loading && <p>Loading...</p>}
      {advice && !loading && (
        <div className="response-box">
          <p>{advice}</p>
        </div>
      )}
    </div>
  );
};

export default Nanami;
