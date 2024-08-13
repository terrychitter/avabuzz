import { Box, Container, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Link from "../../CustomComponents/CustomLink";
import UsernameInput from "../../CustomComponents/UsernameInput";
import ProfilePictureKit from "../../HOC/ProfilePictureKit";
import BiographyEditTextArea from "./BiographyEditTextArea";
import ChangeAvatarButton from "./ChangeAvatarButton";
import GenderSelect from "./GenderSelect";
import SexualOrientationSelect from "./SexualOrientationSelect";

const ProfileInformationForm = () => {
  const theme = useTheme();
  //   Use react hook form
  const methods = useForm<FieldValues>();

  // Handle form submission
  return (
    <Container>
      <FormProvider {...methods}>
        <Stack direction="column" alignItems="center" spacing={5}>
          {/* Center profile picture */}
          <Stack gap={3}>
            <Box display="flex" justifyContent="center">
              <ProfilePictureKit />
            </Box>
            {/* Center button */}
            <Box width="100%" display="flex" justifyContent="center">
              <ChangeAvatarButton />
            </Box>
          </Stack>
          <Stack width={{ xs: "100%", lg: "75%" }}>
            <UsernameInput
              register={methods.register}
              errors={methods.formState.errors}
              tooltip={false}
            />
            <GenderSelect />
            <SexualOrientationSelect />
            <Box textAlign={"left"} marginBlockStart={3} marginBlockEnd={2}>
              <Typography variant="h6" component={"p"}>
                Biography
              </Typography>
              Customize your biography using markdown!
              <Link to="/post" color={theme.palette.primary.main}>
                &nbsp;Learn More...
              </Link>
            </Box>
            <BiographyEditTextArea />
          </Stack>
        </Stack>
      </FormProvider>
    </Container>
  );
};

export default ProfileInformationForm;
