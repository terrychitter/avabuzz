import genders from "../../../../public/genders/genders.json";
import GenderIcon from "../GenderIcon";
import CustomSelect from "../../CustomComponents/CustomSelect";

const GenderSelect = () => {
  return (
    <CustomSelect
      label="Gender"
      items={genders}
      IconComponent={GenderIcon}
      iconType="gender"
    />
  );
};

export default GenderSelect;
