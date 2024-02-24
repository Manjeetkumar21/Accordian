const accordians = document.querySelectorAll(".accordian")

accordians.forEach(function(accordian){
    const icon = accordian.querySelector('i')
    const ans = accordian.querySelector('.ans')

    icon.addEventListener('click',function(){
        if(icon.classList.contains('active')){
            icon.classList.remove('active')
            ans.style.maxHeight = "0px";
        }
        else{
            icon.classList.add('active')
            ans.style.maxHeight = ans.scrollHeight + "px";
            console.log(ans.scrollHeight);
        }
    })
})
