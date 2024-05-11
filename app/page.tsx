'use client';

import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { CarCard,  CustomFilter, SearchBar, ShowMore, Main  } from "@/components";

export default function Home({ searchParams }: HomeProps) {
 const [allCars, setAllCars] = useState([]);
 const [loading, setLoading] = useState(false);

 //SEARCH STATE
 const [make, setMake] = useState("")
 const [model, setModel] = useState("")

 // FILTER STATES
 const [fuel, setFuel] = useState("")
 const [year, setYear] = useState(2022)

  //PAIGNATION STATE
  const [limit, setLimit] = useState(10)

  const getCars = async () =>{
    setLoading(true)
    try
    {
      const result = await fetchCars({
        make: make || "",
        year: year || 2022,
        fuel: fuel || "",
        limit:limit || 10,
        model:model || "",
      });

      setAllCars(result);
    }
    catch(error)
    {
      console.log(error);

    }
    finally{
      setLoading(false)
    }

  }
  useEffect(() => {
    getCars();
  }, [fuel, make, year, limit, model])
  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className='overflow-hidden'>
      <Main />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Search</h1>
          <p>Explore the cars of your dreams</p>
        </div>

        <div className='home__filters'>
          <SearchBar  
          setMake={setMake} 
          setModel={setModel}/>

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} setFilter={setFuel} />
            <CustomFilter title='year' options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && 
            (
              <div className="mt-16 w-full flex-center">
                <Image src="/loader.svg" alt="loader" width={50} height={50}/>
              </div>
            )
            }
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}



// import { fetchCars } from "@/utils";
// import { HomeProps } from "@/types";
// import { fuels, yearsOfProduction } from "@/constants";
// import { CarCard, ShowMore, SearchBar, CustomFilter, Main } from "@components";

// export default async function Home({ searchParams }: HomeProps) {
//   const allCars = await fetchCars({
//     make: searchParams.make || "",
//     year: searchParams.year || 2022,
//     fuel: searchParams.fuel || "",
//     limit: searchParams.limit || 10,
//     model: searchParams.model || "",
//   });

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

//   return (
//     <main className='overflow-hidden'>
//       <Hero />

//       <div className='mt-12 padding-x padding-y max-width' id='discover'>
//         <div className='home__text-container'>
//           <h1 className='text-4xl font-extrabold'>Car Search</h1>
//           <p>Explore the cars of your dreams</p>
//         </div>

//         <div className='home__filters'>
//           <SearchBar />

//           <div className='home__filter-container'>
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction} />
//           </div>
//         </div>

//         {!isDataEmpty ? (
//           <section>
//             <div className='home__cars-wrapper'>
//               {allCars?.map((car) => (
//                 <CarCard car={car} />
//               ))}
//             </div>

//             <ShowMore
//               pageNumber={(searchParams.limit || 10) / 10}
//               isNext={(searchParams.limit || 10) > allCars.length}
//             />
//           </section>
//         ) : (
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }


