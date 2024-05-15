function select(name) {
    let item = {
        name: name
    };
    var cartStuff = JSON.parse(localStorage.getItem('cart')) || [];

    cartStuff.push(item)

    localStorage.setItem('cart', JSON.stringify(cartStuff));
}

function selectRock()
{
    select("Rock");
}

function selectPaper()
{
    select("Paper")
}

function selectScisor()
{
    select("Paper")
}