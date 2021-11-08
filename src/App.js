import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodo } from './ACTION/todoActions';
import { IoLogoSlack } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { GoThreeBars } from 'react-icons/go'

function App() {
  const dispatch = useDispatch();
  const usrs = useSelector(state => state.userReducers);
  const { users, loading, error } = usrs;
  const [inputText, setText] = useState('')
  const [inputTitle, setTitle] = useState('')
  let today = new Date();
  let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  const submitHandler = (e) => {
    e.preventDefault()
    if (inputText && inputTitle !== '') {
      dispatch(getTodo({
        title: inputTitle,
        todo: inputText,
        date: date
      }))
      setText('')
      setTitle('')
    } else {
      alert('field cannot be empty')
    }
  }
  const cancelHandler = (e) => {
    e.preventDefault()
    setText('')
    setTitle('')
  }

  return (
    <>
      <header className='bg-red-500 w-full h-11 flex items-center'>
        <IoLogoSlack className='ml-10 text-3xl' />
        <AiOutlineHome className='ml-4 mr-2 text-xl text-white' />
        <GoThreeBars className=' text-xl text-white' />
      </header>
      <div className="flex flex-col w-full h-screen items-center mt-10">


        <form className='flex flex-col'>
          <label className='font-bold my-4 text-lg' htmlFor='todoInput'>Today <span className='text-gray-600 font-thin text-sm'>{date}</span></label>
          <div className='w-96 h-28 border border-gray-300 active:border-gray-700 rounded-md flex flex-col'>
            <input value={inputTitle} className='focus:outline-none p-1' placeholder=' -title' onChange={(e) => setTitle(e.target.value)} />
            <textarea value={inputText} id='todoInput' className='p-1 h-full w-full focus:outline-none' placeholder=' -todo' onChange={(e) => setText(e.target.value)}></textarea>
          </div>
          <div className='my-2'>
            <button onClick={submitHandler} className='px-3 py-1 bg-red-600 rounded-md text-white text-sm font-semibold'>Add task</button>
            <button onClick={cancelHandler} className='px-2 py-1 rounded-md text-sm border mx-2 hover:bg-gray-200'>Cancel</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default App;
