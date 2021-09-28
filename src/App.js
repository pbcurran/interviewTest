import React, { useState } from 'react';

export default () => {
  const [inputTextOne, setInputTextOne] = useState('');
  const [inputTextTwo, setInputTextTwo] = useState('');
  const [answerText, setAnswerText] = useState('');


  const getAnswer = () => {
    const numberOne = parseInt(inputTextOne);
    const numberTwo = parseInt(inputTextTwo);

    const answer = numberOne + numberTwo;

    setAnswerText(answer);
  };

  return (
    <div class="container">
      <form className="mt-3">
        <div className="form-group" >
          <input
            type="text"
            className="form-control form-control-lg mb-2"
            placeholder="input one"
            name="firstName"
            value={inputTextOne}
            onChange={(e) => setInputTextOne(e.target.value)}
          />
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="input two"
            name="firstName"
            value={inputTextTwo}
            onChange={(e) => setInputTextTwo(e.target.value)}
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={getAnswer}>Get Answer</button>
      <div className="mt-2">
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Result</label>
          <textarea value={answerText} class="form-control" id="exampleFormControlTextarea1" rows="3" readonly></textarea>
        </div>
      </div>
    </div>
  );
};
