window.addEventListener('load', function(){

    const thankyouHtml = (ratingValue) => {
    const card = document.querySelector('.card');
    card.innerHTML = '';
    card.classList.add('text-center');
    let thankyouIcon = document.createElement('img');
    thankyouIcon.setAttribute('src','images/illustration-thank-you.svg');
    thankyouIcon.classList.add('d-block');
    let ratingPill = document.createElement('p')
    ratingPill.innerText = `You selected ${ratingValue} out of 5`;
    ratingPill.classList.add('pill');
    let h2 = document.createElement('h2');
    h2.innerText = 'Thank you!';
    let p = document.createElement('p');
    p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

    card.appendChild(thankyouIcon);
    card.appendChild(ratingPill);
    card.appendChild(h2);
    card.appendChild(p);
  }

  const isRatingSet = localStorage.getItem('rating');

  if(isRatingSet){
    thankyouHtml(isRatingSet);
    document.querySelector('.card').classList.add('d-block');
  }else{
    document.querySelector('.card').classList.add('d-block');
      let ratingValues = document.querySelectorAll('li');

    ratingValues.forEach(function(ratingValue) {
      ratingValue.addEventListener('click', function(e) {
        const activeElement = document.querySelector('.active');
        if(activeElement && (activeElement !== this)) {
          activeElement.classList.remove('active');
        }
        if(activeElement !== this){
          this.classList.add('active');
        }
      })
    });

    let submitButton = document.querySelector('button');
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      const rating = document.querySelector('.active');
      if(rating) {
        const ratingValue = rating.innerHTML;
        localStorage.setItem('rating', ratingValue);
        thankyouHtml(ratingValue);
        
      }
    });
  }

})