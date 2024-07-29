
var $tag = function(tag) {
    return document.getElementsByTagName(tag);
}

function minify(type, input, output) {
    output.value = input.value
        .replace(/<!--.*?-->/g, '') // Remove HTML comments
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .replace(/\s*([{};:,.])\s*/g, '$1') // Remove spaces around {}, ;, :, and ,
        .trim(); // Remove leading and trailing spaces
}

document.querySelector("button").addEventListener("click", function() {
    minify(
        this.innerHTML, $tag('textarea')[0], $tag('textarea')[1]
    );
});
