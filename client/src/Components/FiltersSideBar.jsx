// import React from 'react'

function FiltersSideBar() {
  return (
    <div className="hidden md:block w-[30%] md:w-[30%] md:h-full md:bg-white md:rounded-xl md:p-4 md:text-gray">
      Search by keywords
      <input className="border-1 border-black ml-5" type="text" />
      <br /><br />


      Year Wise :
      <select className="border border-black ml-3 rounded-lg px-3 py-1 bg-red-300 w-[90px]">
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>

      <br /><br />

      Domain Wise :
      <select className="border border-black ml-3 rounded-lg px-3 py-1 bg-red-300 w-[90px]">
        <option value="2017">AI</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>

      <br /><br />

      CGPA : 
      <label htmlFor="range"> 0 </label>
      <input type="range" />

    </div>
  );
}

export default FiltersSideBar;
