/* 
    get a theme icon based on display_template or format 
    return svg sprite
*/
function getIcon(objectTemplate,objectFormat) {
    var iconTemplate, iconId, iconTitle;
    if (objectTemplate && objectTemplate != "") {
        iconTemplate = objectTemplate;
    } else if (objectFormat && objectFormat != "") {
        iconTemplate = objectFormat;
    } else {
        iconTemplate = ""
    }
    // choose icon
    if (iconTemplate.includes("image")) {
        iconId = "icon-image";
        iconTitle = "image file icon";
    } else if (iconTemplate.includes("pdf")) {
        iconId = "icon-pdf";
        iconTitle = "pdf file icon";
    } else if (iconTemplate.includes("video")) {
        iconId = "icon-video";
        iconTitle = "video file icon";
    } else if (iconTemplate.includes("audio")) {
        iconId = "icon-audio";
        iconTitle = "audio file icon";
    } else {
        iconId = "icon-default";
        iconTitle = "file icon";
    }
    // svg sprite as thumb
    return '<svg class="bi text-body" fill="currentColor" role="img"><title>' + iconTitle + '</title><use xlink:href="{{ "/assets/lib/cb-icons.svg" | relative_url }}#' + iconId + '"/></svg>';
}
