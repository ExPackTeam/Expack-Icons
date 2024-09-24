function fetchFunction(svg_src, svg_name) {
    fetch(svg_src)
    .then(response => {
        if (!response.ok) {
            throw new Error("icon can't load loaded");
        }
        return response.text();
    })
    .then(svgContent => {
        const svg_src = document.querySelectorAll(`[data-icons='${svg_name}]`);
        svg_src.innerHTML = svgContent;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
const srcDir = "../../dist/svg";
const langSVG = "/language_svgs";
const genSVG = "/general_svgs";
const socialSVG = "/social_media_svgs";
document.addEventListener("DOMContentLoaded", () => { 
    const reactVar = "react";
    const reactIconSrc = `${srcDir}${langSVG}/react_lang_logo.svg`;
    fetchFunction(reactIconSrc, reactVar);
    const clipboardVar = "clipboard";
    const clipboardSrc = `${srcDir}${genSVG}/empty_clipboard.svg`;
    fetchFunction(clipboardSrc, clipboardVar);
});