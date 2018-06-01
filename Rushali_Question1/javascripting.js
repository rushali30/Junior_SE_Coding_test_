
// Creating objects for creating Table and function to Populate it
var data = [ { first_name : 'Rose',
                     last_name  : 'Tyler',
                     home       : 'Earth' },
                   { first_name : 'Zoe',
                     last_name  : 'Heriot',
                     home       : 'Space Station W3'},
                   { first_name : 'Jo',
                     last_name  : 'Grant',
                     home       : 'Earth'},
                   { first_name : 'Leela',
                     last_name  : null,
                     home       : 'Unspecified'},
                   { first_name : 'Romana',
                     last_name  : null,
                     home       : 'Gallifrey'},
                   { first_name : 'Clara',
                     last_name  : 'Oswald',
                     home       : 'Earth'},
                   { first_name : 'Adric',
                     last_name  : null,
                     home       : 'Alzarius'},
                   { first_name : 'Susan',
                     last_name  : 'Foreman',
                     home       : 'Gallifrey'}];

// Function for populating table using <tr> and <td> tags

function PopulateTable(data)
{  var table = document.getElementById('table');
  for(var i = 0; i < data.length; i++)
    {var identity = data[i];
    var tr = document.createElement('tr');
    var attributes = ['first_name', 'last_name', 'home'];

    for(var j = 0; j < attributes.length; j++)
    {var td = document.createElement('td');
      td.innerHTML = identity[attributes[j]];
      if(identity[attributes[j]] == null || identity[attributes[j]] == 'Unspecified')
      {
        td.innerHTML = ("Entry Not Provided");
      } 
      tr.appendChild(td);
    } 
    table.appendChild(tr);
  } 
  } 
PopulateTable(data);
