function Form() {
  return (
    <form className='mx-auto w-[30rem] space-y-4'>
      <div className='w-[22rem] space-y-4'>
        <label className='text-2xl' htmlFor='username'>
          Name
        </label>
        <input
          type='text'
          name='username'
          id='username'
          className='border-b-lighter-5 w-full border border-b-2 border-transparent bg-transparent pb-1 text-2xl text-slate-500 focus:bg-lighter-1/10 focus:outline-none'
        />
      </div>
      <div className='w-[22rem] space-y-4'>
        <label className='text-2xl' htmlFor='username'>
          Email
        </label>
        <input
          type='text'
          name='username'
          id='username'
          className='border-b-lighter-5 w-full border border-b-2 border-transparent bg-transparent pb-1 text-2xl text-slate-500 focus:bg-lighter-1/10 focus:outline-none'
        />
      </div>
      <div className='w-[22rem] space-y-4'>
        <label className='text-2xl' htmlFor='description'>
          Description
        </label>
        <textarea
          className='border-b-lighter-5 w-full border border-b-2 border-transparent bg-transparent p-1 pb-1 text-2xl text-slate-500 focus:bg-lighter-1/10 focus:outline-none'
          name='description'
          id=''
          rows='5'
          cols='8'
        ></textarea>
      </div>

      <button
        type='submit'
        className='border-btn mx-auto w-[22rem] rounded-lg py-[.5rem] text-2xl'
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
