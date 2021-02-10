CKEDITOR.replace( 'textarea' );

let getData = () => CKEDITOR.instances.textarea.getData();


let print = () => {

    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html moznomarginboxes mozdisallowselectionprint><head><title>Formular</title><style type="text/css" media="print"> @page{size: auto;  margin: 0mm;  } </style><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Arial:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">');
    mywindow.document.write('</head><body style="font-family: \'Arial\', sans-serif; padding: 2rem;">');
    mywindow.document.write('</body></html>');
    mywindow.document.lastElementChild.lastElementChild.innerHTML = getData();
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.print();
};

let downloadPDF = () => {
    html2pdf(getData(), {margin: [10, 10, 10, 10], html2canvas: { scale: 4 }});
};
