$(document).ready(function() {

  /*function for slide animation */
  //add css transition after page load
  $('.slide').css('transition', '1s');
  //grab all icons
  const icons = document.querySelectorAll('.icons div');



  //add eventlistner to each icon
  icons.forEach(function(icon){icon.addEventListener('click', update)});

  function update(e){
    //loop and hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide) {
      slide.style.setProperty('opacity', '0');
    })
    //show selected
    const slide = document.querySelector('.'+this.dataset.slide);
    slide.style.setProperty('opacity', '1');

    $('.icons div').each(function(i, icon){
      $(icon).removeClass('active');
    });

    $(this).toggleClass('active');
    
  }

  const leftArrow = $('.left-arrow');
  const rightArrow = $('.right-arrow');

  let index;

  rightArrow.click(function(){
    //get current index
    $('.icons div').each(function(i, icon){
      if($(this).hasClass('active')){
        index = i;
      }
    });

    //update index
    index+=2;
      if(index > $('.icons div').length){
        index = 1;
    }

    //remove and hide all hover states
    $('.icons div').each(function(i, icon){
      $(icon).removeClass('active');
    });
     
    //update hover icon
    $('.icons div:nth-child('+index+')').toggleClass('active');
    

    //loop and hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide) {
      slide.style.setProperty('opacity', '0');
    })

  //get selected slide
    const slideNum = $('.icons div:nth-child('+index+')').data('slide');
    const slide = ('.'+slideNum);
    $(slide).css({'opacity' : '1'});

  });

    leftArrow.click(function(){
    //get current index
    $('.icons div').each(function(i, icon){
      if($(this).hasClass('active')){
        index = i;
      }
    });

    //update index
      if(index <= 0 ){
        index = $('.icons div').length;
    }

    //remove and hide all hover states
    $('.icons div').each(function(i, icon){
      $(icon).removeClass('active');
    });
     
    //update hover icon
    $('.icons div:nth-child('+index+')').toggleClass('active');
    

    //loop and hide all slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach(function(slide) {
      slide.style.setProperty('opacity', '0');
    })

  //get selected slide
    const slideNum = $('.icons div:nth-child('+index+')').data('slide');
    const slide = ('.'+slideNum);
    $(slide).css({'opacity' : '1'});

  })


// /*function for scroll to sections */
//  const container = $('html,body');

//   const boxes = document.querySelectorAll('.boxes');

//   boxes.forEach(function(box){
//     box.addEventListener('click', scroll);
//   })

//   function scroll(e){

//     const scrollTo = $('#sec'+this.dataset.anchor)
//       console.log(scrollTo)
//     container.animate({
//         scrollTop: scrollTo.offset().top


//     });
//   }

});

