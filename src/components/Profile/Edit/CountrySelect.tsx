import countries from "../../../../public/countries/countries.json";
import CustomSelect from "../../CustomComponents/CustomSelect";
import CountryIcon from "../CountryIcon";

const CountrySelect = () => {
  return (
    <CustomSelect
      label="Country"
      items={countries}
      IconComponent={CountryIcon}
      iconType="country"
    />
  );
};

export default CountrySelect;
