import { MouseEventHandler } from "react";

/* Custom Button Props Types */
export interface CustomButtomProps{
    title: string;
    btnType?: "submit" | "reset" | "button",
    containerStyles: string;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchMakesPropos {
    make: string;
    setMake : (make: string) => void;
}

export interface FilterProps {
    make?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface HomeProps {
    searchParams: FilterProps;
  }
  
  export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }
  
  export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }
  
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
  
  export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
  }

