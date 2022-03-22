export const createSertificate = (data) => {
    const container = document.querySelector('#documents .container');
    const info = data.sertificates
    let block = document.createElement('div');
    block.classList.add('text-center');
    block.innerHTML = '';
    info.forEach(item => {
        block.innerHTML += `
             <div class="col-sm-4">
	    	    <a href="${item.small}" class="sertificate-document" data-fancybox-group="gallery-documents">
			        <img src="${item.small}" class="img-responsive glo" alt="">
			        <div class="document-overlay"></div>
	            </a>
	        </div>
        `
    })
    container.append(block);

     const overlay = document.querySelector('.overlay');
    const sertificatesGlo = document.querySelectorAll('.sertificate-document');
    const documentOverlay = document.querySelectorAll('.document-overlay');
    const bigPhoto = document.querySelector('.big-photo');
    const bigPhotoAdress = [];

    info.forEach(item => bigPhotoAdress.push(item.big));

    sertificatesGlo.forEach((item,index) =>{
         item.addEventListener('mouseover', () => {
            documentOverlay[index].style.opacity = '0.9';
         })

         item.addEventListener('mouseout', () => {
            documentOverlay[index].style.opacity = ''; 
         })

         item.addEventListener('click', (e) => {
            e.preventDefault();
            bigPhoto.innerHTML = '';
            bigPhoto.innerHTML = `
                <img class="close-photo" src="images/close-1.png">
				<img src="${bigPhotoAdress[index]}" class="big-photo-img">
            `
            bigPhoto.style.display = 'block';
            overlay.style.display = 'block';

            const closePhotoBtn = document.querySelector('.close-photo')
            closePhotoBtn.addEventListener('click', () => {
            bigPhoto.style.display = 'none';
            overlay.style.display = 'none'
         })
         })
        
         

    })
}

/* docs.addEventListener('click', (e) => {
         if (e.target.closest('.sertificate-document')) {
            e.preventDefault();
            changeDisplay('block', bigPhoto);  
         } else if(e.target.classList.contains('close-photo')) {
              changeDisplay('none', bigPhoto);  
         }
    })

    })*/

