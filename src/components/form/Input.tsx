import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Grid from "../mui/Grid";
import { Close } from "../icons";
import { InputProps } from "../../types/interfaces/components";
import Text from "../mui/Text";
import { colors } from "../../assets/theme/colors";

const sx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    "& fieldset": {
      border: colors.border.main,
    },
    "&:hover:not(.Mui-focused):not(.Mui-error) fieldset": {
      borderColor: "lightgrey",
    },
    "&:hover:not(.Mui-focused):not(.Mui-error)": {
      backgroundColor: colors.background.hover,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${colors.primary.main}`,
    },
    "&.Mui-error fieldset": {
      border: `2px solid ${colors.desctructed.main}`,
    },
    "&.Mui-error": {
      color: colors.desctructed.main,
    },
  },
};

const Input = ({
  htmlFor,
  type,
  label,
  palceholder,
  error,
  errorMessage,
  value,
  disabled,
  onChange,
  onClear,
}: InputProps) => {
  return (
    <Grid column width={"100%"} spacing={1}>
      <FormControl size="small" variant="outlined" sx={sx}>
        <InputLabel
          error={error}
          sx={{
            fontWeight: 500,
            color: colors.typography.label,
            "&.Mui-focused": {
              color: colors.primary.main,
              fontWeight: 600,
            },
            "&.Mui-error": {
              color: colors.desctructed.main,
              fontWeight: 500,
            },
          }}
          htmlFor={htmlFor}>
          {label}
        </InputLabel>
        <OutlinedInput
          id={htmlFor}
          type={type}
          placeholder={palceholder}
          value={value}
          disabled={disabled}
          error={error}
          onChange={onChange}
          endAdornment={
            value && (
              <InputAdornment position="end">
                <IconButton onClick={onClear}>
                  <Close size={28} color={colors.typography.label} />
                </IconButton>
              </InputAdornment>
            )
          }
          label={label}
        />
      </FormControl>
      <Text
        text={errorMessage ?? ""}
        color={colors.desctructed.main}
        style={{
          paddingLeft: 5,
        }}
        small
      />
    </Grid>
  );
};

export default Input;
