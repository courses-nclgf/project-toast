import { AlertOctagon, AlertTriangle, CheckCircle, Info } from "react-feather";

export const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];
export const defaultVariant = VARIANT_OPTIONS[0];
