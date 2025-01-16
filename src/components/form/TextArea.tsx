import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { TextAreaProps } from "../../types/interfaces/components";
import { colors } from "../../assets/theme/colors";

const sx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "4px",
    "& fieldset": {
      border: `1px solid ${colors.border.main}`,
    },
    "&:hover:not(.Mui-focused) fieldset": {
      borderColor: "lightgrey",
    },
    "&:hover:not(.Mui-focused)": {
      backgroundColor: colors.background.hover,
    },
    "&.Mui-focused fieldset": {
      border: `2px solid ${colors.primary.main}`,
    },
  },
};

const TextArea = ({
  htmlFor,
  label,
  value,
  disabled,
  onChange,
}: TextAreaProps) => {
  return (
    <FormControl size="small" variant="outlined" sx={sx}>
      <InputLabel
        sx={{
          fontWeight: 500,
          color: colors.typography.label,
          "&.Mui-focused": {
            color: colors.primary.main,
            fontWeight: 600,
          },
        }}
        htmlFor={htmlFor}>
        {label}
      </InputLabel>
      <OutlinedInput
        multiline
        minRows={8}
        maxRows={8}
        id={htmlFor}
        type="text"
        value={value}
        disabled={disabled}
        onChange={onChange}
        label={label}
      />
    </FormControl>
  );
};

export default TextArea;
