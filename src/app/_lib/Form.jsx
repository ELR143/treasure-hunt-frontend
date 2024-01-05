export default function Form({
  form: { keyToBeUpdated, valueToBeUpdated, user },
  setShowForm,
}) {
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTED!");
    setShowForm(false);
  };

  const handleChange = (e) => {
    console.log(e.target.files, "handleChange");
    const image = URL.createObjectURL(e.target.files[0]);
    console.log(image, "image");
  };

  if (keyToBeUpdated === "avatar") {
    return (
      <form action='POST' onSubmit={submitFormHandler}>
        <label onChange={handleChange}>
          <input
            type='file'
            placeholder={`please enter new ${keyToBeUpdated}`}
          />
        </label>

        <button className='w-1/4 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
          Press to update
        </button>
      </form>
    );
  } else {
    return (
      <form action='POST' onSubmit={submitFormHandler}>
        <input type='text' placeholder={`please enter new ${keyToBeUpdated}`} />
        <button className='w-1/4 text-center mx-auto mt-1 px-2 py-1 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
          Press to update
        </button>
      </form>
    );
  }
}
