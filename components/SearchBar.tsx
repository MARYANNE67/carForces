"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import SearchMakes from "./SearchMakes";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = ({setMake, setModel}) => {
  const [searchMake, setSearchMake] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchMake.trim() === "" && searchModel.trim() === "") {
      return alert("Please provide some input");
    }

    setModel(searchModel);
    setMake(searchMake);

  };

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchMakes
          selected={searchMake}
          setSelected={setSearchMake}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car searchModel'
        />
        <input
          type='text'
          name='searchModel'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;



// import Image from "next/image";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// import SearchMakes from "./SearchMakes";

// const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
//   <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
//     <Image
//       src={"/magnifying-glass.svg"}
//       alt={"magnifying glass"}
//       width={40}
//       height={40}
//       className='object-contain'
//     />
//   </button>
// );

// const SearchBar = () => {
//   const [manufacturer, setManuFacturer] = useState("");
//   const [model, setModel] = useState("");

//   const router = useRouter();

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (manufacturer.trim() === "" && model.trim() === "") {
//       return alert("Please provide some input");
//     }

//     updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
//   };

//   const updateSearchParams = (model: string, manufacturer: string) => {
//     // Create a new URLSearchParams object using the current URL search parameters
//     const searchParams = new URLSearchParams(window.location.search);

  
//     if (model) {
//       searchParams.set("model", model);
//     } else {
//       searchParams.delete("model");
//     }

//     // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
//     if (manufacturer) {
//       searchParams.set("manufacturer", manufacturer);
//     } else {
//        searchParams.delete("manufacturer");
//     }

//     // Generate the new pathname with the updated search parameters
//     const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

//     router.push(newPathname);
//   };

//   return (
//     <form className='searchbar' onSubmit={handleSearch}>
//       <div className='searchbar__item'>
//         <SearchMakes
//           make={manufacturer}
//           setMake={setManuFacturer}
//         />
//         <SearchButton otherClasses='sm:hidden' />
//       </div>
//       <div className='searchbar__item'>
//         <Image
//           src='/model-icon.png'
//           width={25}
//           height={25}
//           className='absolute w-[20px] h-[20px] ml-4'
//           alt='car model'
//         />
//         <input
//           type='text'
//           name='model'
//           value={model}
//           onChange={(e) => setModel(e.target.value)}
//           placeholder='Tiguan...'
//           className='searchbar__input'
//         />
//         <SearchButton otherClasses='sm:hidden' />
//       </div>
//       <SearchButton otherClasses='max-sm:hidden' />
//     </form>
//   );
// };

// export default SearchBar;