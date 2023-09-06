import React from 'react'

const CreateTodo = ({ setTodos }) => {

  const [title, setTitle] = React.useState('')

  const handleChahge = (e) => setTitle(e.target.value)


  const addTodo = (title) => {
    setTodos(prev => [
      {
      id: new Date(),
      title,
      isCompleted: false
    },
    ...prev,
    ])
    setTitle('')
  }


  return (
    <div 
      className="flex items-center justify-between 
      mb-4 rounded-2xl border-2 border-zinc-800 px-5 py-4 w-full mt-20"
    >
      <input 
        type="text" 
        onChange={handleChahge} 
        value={title}
        onKeyDown={e => e.key === 'Enter' && addTodo(title)}
        placeholder='Add a task'
        className='bg-transparent w-full outline-none border-none'
      />
    </div>
  )
}

export default CreateTodo