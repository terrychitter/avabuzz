import { Box, CircularProgress, Container, Stack } from "@mui/material";
import { IconBook } from "@tabler/icons-react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import LimitedTextInput from "../../CustomComponents/LimitedTextInput";
import UsernameInput from "../../CustomComponents/UsernameInput";
import ProfilePictureKit from "../../HOC/ProfilePictureKit";
import ChangeAvatarButton from "./ChangeAvatarButton";
import GenderSelect from "./GenderSelect";
import SexualOrientationSelect from "./SexualOrientationSelect";
import CountrySelect from "./CountrySelect";
import { useTheme } from "@mui/material";
import AnimatedButton from "../../CustomComponents/AnimatedButton";

const ProfileInformationForm = () => {
  const theme = useTheme();
  const methods = useForm<FieldValues>();

  const onSubmit = async (data: FieldValues) => {
    // TODO: Submit to API
    console.log("data", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    methods.reset();
  };

  // Handle form submission
  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
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
              <Box marginBlock={theme.spacing(3)}>
                <GenderSelect />
                <SexualOrientationSelect />
                <CountrySelect />
              </Box>
              <LimitedTextInput
                register={methods.register}
                errors={methods.formState.errors}
                name="biography"
                label="Biography"
                minLength={0}
                maxLength={50}
                startIcon={<IconBook />}
              />
              <AnimatedButton
                disabled={methods.formState.isSubmitting}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ marginTop: theme.spacing(7) }}
                startIcon={
                  methods.formState.isSubmitting && (
                    <CircularProgress size={24} />
                  )
                }
              >
                {methods.formState.isSubmitting ? null : "Save Changes"}
              </AnimatedButton>
            </Stack>
          </Stack>
        </form>
      </FormProvider>
    </Container>
  );
};

export default ProfileInformationForm;
