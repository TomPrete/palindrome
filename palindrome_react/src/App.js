import { useState } from 'react';
import './App.css';

const App = () => {
  const [isPal, setIsPal] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let input = evt.target.palindrome.value
    isPalindrome(input)
  }

  const isPalindrome = (word) => {
    word = word.replace(/\s/g, '')
    if (!word.length) {
      return setIsPal(false)
    }
    let left = 0;
    let right = word.length - 1;
    while (left < right) {
      if (word[left] !== word[right]) {
        return setIsPal(false)
      } else {
        left++;
        right--;
      }
    }
    return setIsPal(true);
  }

  return (
    <div className="App">
      <h1>Is this a palindrome?</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='palindrome' />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <h1>{
        isPal ? 'True' : 'False'
       }</h1>
    </div>
  );
}

export default App;
