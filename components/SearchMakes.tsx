'use client'; //combox and hooks

import { searchMakesPropos } from '@/types'
import React, { useState, Fragment } from 'react'
import { Combobox, Transition, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption} from '@headlessui/react'
import Image from 'next/image';
import { makes} from '@/constants';
const SearchMakes = (
  {selected, setSelected}: searchMakesPropos
) => {

  const [query, setQuery] = useState('');
  /* Filter function */
  const filteredMakes= query === ""
  ? makes
  : makes.filter((item) =>
      item
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
    );

  return (
    <div className='search-manufacturer'>
      <Combobox
      value={selected}
      onChange={setSelected}
      >
      <div className='relative w-full'>
        <ComboboxButton className="absolute top-[14px]"> 
          <Image src='/car-logo.svg'
          width={20} height={20} 
          className='ml-4' alt='Car Logo' />
        </ComboboxButton>

        <ComboboxInput
        className="search-manufacturer__input"
        placeholder='Royce Rolls'
        displayValue={(manufacturer: string) => manufacturer}
        onChange={(e) => setQuery(e.target.value)}
        />

        <Transition as={Fragment}
        leave='transition ease-in duration-100'
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setQuery('')}
        >
            <ComboboxOptions>
              {filteredMakes.length === 0 && query !="" 
                ?
                (
                  <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                  >
                    Create "{query}"
                  </ComboboxOption>
                ) 
                : 
                (
                  filteredMakes.map((item) => (
                    <ComboboxOption 
                    value={item}
                    key={item} 
                    className={({active}) => `relative search-manufacturer__option 
                    ${active ? 'bg-dark-theme-500' : 'text-gray-900'}`}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                            {item}
                          </span>

                          {/* Show an active main background color if the option is selected */}
                          {selected ? (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                            ></span>
                          ) : null}
                        </>
                    )}
                    </ComboboxOption>
                  ))
                )
              }
            </ComboboxOptions>
        </Transition>
        
    </div>
    </Combobox>
    </div>
  )
}

export default SearchMakes

// 'use client'; //combox and hooks

// import { searchMakesPropos } from '@/types'
// import React, { useState, Fragment } from 'react'
// import { Combobox, Transition, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption} from '@headlessui/react'
// import Image from 'next/image';
// import { makes} from '@/constants';
// const SearchMakes = (
//   {make, setMake}: searchMakesPropos
// ) => {

//   const [query, setQuery] = useState('');
//   /* Filter function */
//   const filteredMakes= query === ""
//   ? makes
//   : makes.filter((item) =>
//       item
//         .toLowerCase()
//         .replace(/\s+/g, "")
//         .includes(query.toLowerCase().replace(/\s+/g, ""))
//     );

//   return (
//     <div className='search-manufacturer'>
//       <Combobox
//       value={make}
//       onChange={setMake}
//       >
//       <div className='relative w-full'>
//         <ComboboxButton className="absolute top-[14px]"> 
//           <Image src='/car-logo.svg'
//           width={20} height={20} 
//           className='ml-4' alt='Car Logo' />
//         </ComboboxButton>

//         <ComboboxInput
//         className="search-manufacturer__input"
//         placeholder='Royce Rolls'
//         displayValue={(manufacturer: string) => manufacturer}
//         onChange={(e) => setQuery(e.target.value)}
//         />

//         <Transition as={Fragment}
//         leave='transition ease-in duration-100'
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//         afterLeave={() => setQuery('')}
//         >
//             <ComboboxOptions>
//               {filteredMakes.length === 0 && query !="" 
//                 ?
//                 (
//                   <ComboboxOption
//                   value={query}
//                   className="search-manufacturer__option"
//                   >
//                     Create "{query}"
//                   </ComboboxOption>
//                 ) 
//                 : 
//                 (
//                   filteredMakes.map((item) => (
//                     <ComboboxOption 
//                     value={item}
//                     key={item} 
//                     className={({active}) => `relative search-manufacturer__option 
//                     ${active ? 'bg-dark-theme-500' : 'text-gray-900'}`}
//                     >
//                       {({ selected, active }) => (
//                         <>
//                           <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
//                             {item}
//                           </span>

//                           {/* Show an active main background color if the option is selected */}
//                           {selected ? (
//                             <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
//                             ></span>
//                           ) : null}
//                         </>
//                     )}
//                     </ComboboxOption>
//                   ))
//                 )
//               }
//             </ComboboxOptions>
//         </Transition>
        
//     </div>
//     </Combobox>
//     </div>
//   )
// }

// export default SearchMakes