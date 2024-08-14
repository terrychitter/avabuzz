import orientations from "../../../../public/sexualities/so.json";
import SexualityIcon from "../SexualityIcon";
import CustomSelect from "../../CustomComponents/CustomSelect";

const SexualOrientationSelect = () => {
  return (
    <CustomSelect
      label="Sexual Orientation"
      items={orientations}
      IconComponent={SexualityIcon}
      iconType="sexuality"
    />
  );
};

export default SexualOrientationSelect;
