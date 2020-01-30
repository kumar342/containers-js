// Get input element 
let filterInput = document.getElementById('filterInput');

// Add event listner

filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get the value of the input
    let filterValue = document.getElementById('filterInput').value.toUppercase();
    
    // Get ul names

    let names = document.getElementById('names');

    // Get li from ul

    let li = ul.querySelectAll('li.collection-item');

    // loop through collection-item lis

    for(let i=0; i < li.lenght; i++){
        let a = li[i].getElementByTagName('a')[0];
        if(a.innerHTML.toUppercase().indexOf(filterValue) > -1) {
          li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }


    
    
}