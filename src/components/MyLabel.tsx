import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Este es el texto del label
   */
  label: string;
  /**
   * Este es el tamaño por defecto del label
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitaliza el texto en caso de ser true
   */
  allCaps: boolean;
  /**
   * colores basicos del boton
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Custom font color
   */
  fontColor?: string;
  /**
   * Custom font color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} `}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
