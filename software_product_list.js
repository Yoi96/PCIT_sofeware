    function showContent() {
        const divs = document.querySelectorAll('.content-div');
        divs.forEach(div => div.style.display = 'none');
            

        const selectedValue = document.getElementById('product_list_navs').value;


        const selectedDiv = document.getElementById(selectedValue);
        if (selectedDiv) {selectedDiv.style.display = 'block';}
        }


    document.addEventListener('DOMContentLoaded', function () 
    {
        document.getElementById('product_list_navs').value = 'business_applications';
        showContent();   
    });