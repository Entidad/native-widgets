import { StructurePreviewProps } from "@mendix/piw-utils-internal";

import { ProgressBarPreviewProps } from "../typings/ProgressBarProps";
import progressBarSvgLight from "./assets/ProgressBar.light.svg";
import progressBarSvgDark from "./assets/ProgressBar.dark.svg";

export const getPreview = (_: ProgressBarPreviewProps, isDarkMode: boolean): StructurePreviewProps => ({
    type: "Image",
    document: decodeURIComponent(
        (isDarkMode ? progressBarSvgDark : progressBarSvgLight).replace("data:image/svg+xml,", "")
    ),
    width: 301
});
