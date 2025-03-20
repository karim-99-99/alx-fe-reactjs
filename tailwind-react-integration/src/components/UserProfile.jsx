function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 hover:shadow-xl">
        <img src="https://aigeeked.com/wp-content/uploads/2022/12/ai-image-generator.jpg" alt="User" className="rounded-full w-36 h-36 mx-auto sm:text-lg md:text-xl hover:scale-110 transition-transform duration-300 ease-in-out"/>
        <h1 className="text-xl text-blue-800 my-4 sm:text-sm md:text-base hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 text-base sm:w-24 sm:h-24 md:w-36 md:h-36">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );


}

  export default UserProfile;