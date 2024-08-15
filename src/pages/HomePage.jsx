const body = document.querySelector('body');

const HomePage = () => {
  
  const handleDark = () => {
    body.classList.toggle('dark')
  }

  return (
    <div>
      <button onClick={handleDark}>Dark Mode</button>
      <h1>STORE</h1>
    </div>
  )
}

export default HomePage;