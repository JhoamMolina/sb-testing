import "./myLabel.css";

export interface Props {
  /**
   * This is the label of the button
   */
  label: string;
  /**
   * This is the size of the span element
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   *   This capitalizes the label
   */
  allCaps?: boolean;
  /**
   * These are the type of colors we can have
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   *  A custom font color
   */
  fontColor?: string;
}

export const MyLabel = (props: Props) => {
  const {
    label = "No Label",
    size = "normal",
    color = "primary",
    allCaps = false,
    fontColor,
  } = props;
  return (
    <span
      className={`${size} text-${color} label`}
      style={{
        textTransform: allCaps ? "uppercase" : "none",
        color: fontColor,
      }}
    >
      {label}
    </span>
  );
};
