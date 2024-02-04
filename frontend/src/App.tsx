function App() {
  return (
    <div className="min-h-screen">
      <header className="text-white bg-[#282c34] p-3">
        <h1 className="text-2xl font-medium text-center">Welcome to the Art of Bubble Tea</h1>
      </header>
      <div className="">
        {
          ['#32363e', '#3c4048', '#464a52', '#50545c', '#5a5e66', '#646870', '#6e727a', '#787c84', '#82868e', '#8c9098'].map((color, index) => (
            <div 
              className={`p-3 text-center text-white font-medium text-lg border-2`} 
              key={index}
              style={{
                backgroundColor: color,
                borderColor: color
              }}
            >
              {color}
            </div>
          ))
        }
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export default App;
