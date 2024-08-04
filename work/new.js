window.jsPDF = window.jspdf.jsPDF;

function saveData() {
    const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach((element, index) => {
        localStorage.setItem(`editableElement-${index}`, element.innerText);
    });
}

function loadData() {
    const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach((element, index) => {
        const savedText = localStorage.getItem(`editableElement-${index}`);
        if (savedText) {
            element.innerText = savedText;
        }
    });
}

document.querySelectorAll('[contenteditable]').forEach(element => {
    element.addEventListener('input', saveData);
});

window.addEventListener('load', loadData);

function convertImagesToBase64() {
    const images = document.querySelectorAll('img');

    const promises = Array.from(images).map(image => {
        return fetch(image.src)
            .then(response => response.blob())
            .then(blob => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = function() {
                        image.src = reader.result; 
                        resolve();
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                });
            });
    });

    return Promise.all(promises);
}

async function convertFontToBase64(url) {
    try {
        const response = await fetch(url);
        const fontBlob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = function() {
                resolve(reader.result);
            };
            reader.onerror = function(error) {
                reject(error);
            };
            reader.readAsDataURL(fontBlob);
        });
    } catch (error) {
        console.error("Error converting font to Base64:", error);
    }
}

function downloadPDF() {
    convertImagesToBase64().then(() => {
        const resume = document.getElementById('resume');

        const doc = new jsPDF('p', 'pt', 'a4');

        doc.setFont('pxiEyp8kv8JHgFVrJJnecmNE', 'normal');

        doc.html(resume, {
            callback: function(doc) {
                doc.save('resume.pdf');
            },
            x: -40,
            y: 10,
            
        });
    }).catch(error => {
        console.error('Error converting images to Base64:', error);
    });
}

document.getElementById('download-pdf').addEventListener('click', downloadPDF);
