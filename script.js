let file2 = document.getElementById('file2');
let file = document.getElementById('add-file');
let heading = document.getElementById('heading');
let fd = document.getElementById("file-div");
let fn = document.getElementById("file-name");
let fs = document.getElementById("size-div");
let fs2 = document.getElementById("file-s");
fn.style.opacity = 0;
fs2.style.opacity = 0;
div1.style.opacity = 0;
const formatFileSize = function (bytes) {
    const sufixes = ['bytes', 'kB', 'MB', 'GB', 'TB'];
    const g = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, g)).toFixed(2)} ${sufixes[g]}`;
};
file.addEventListener('change', function(){
    console.dir(this)
    if (this.files.length > 0) {
        for (var i = 0; i < this.files.length  ; i++){
            heading.style.visibility = 'hidden';
            fn.style.opacity = 1;
            fs2.style.opacity = 1;
            div1.style.marginTop = "-50px";
            fd.style.marginTop = "-20px";
            div1.style.opacity = 1;
            fd.innerHTML += "<p>"  +  this.files.item(i).name + "</p>";
            fs.innerHTML += "<p>" + formatFileSize(this.files.item(i).size) + "</p>"; 
        }
    }
})
