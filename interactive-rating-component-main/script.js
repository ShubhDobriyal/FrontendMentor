window.addEventListener('load', function(){
    const card = document.querySelector('.card');

    //Function to generate thankyou content
    const thankyouHtml = (ratingValue) => {
      
      card.innerHTML = '';//Empty content of the card so that thankyou content can be added to inside card
      card.classList.add('text-center');//Center the content inside card
      /**** Thankyou content ****/
      //Thankyou icon
      let thankyouIcon = document.createElement('img');
      thankyouIcon.setAttribute('src','images/illustration-thank-you.svg');
      thankyouIcon.classList.add('d-block');
      //Thankyou pill that will display the ratings
      let ratingPill = document.createElement('p')
      ratingPill.innerText = `You selected ${ratingValue} out of 5`;
      ratingPill.classList.add('pill');
      //Thankyou title
      let h2 = document.createElement('h2');
      h2.innerText = 'Thank you!';
      //Thankyou content
      let p = document.createElement('p');
      p.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

      //Append the thankyou elements to card
      card.appendChild(thankyouIcon);
      card.appendChild(ratingPill);
      card.appendChild(h2);
      card.appendChild(p);
    }

  const isRatingSet = localStorage.getItem('rating'); //Fetching the value of rating key from local storage

  if(isRatingSet){// if rating key exists in local storage then show the thankyou card
    thankyouHtml(isRatingSet);
    card.classList.add('d-block');
  }else{// if rating key does not exists in local storage then show the ratings card
    card.classList.add('d-block');
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