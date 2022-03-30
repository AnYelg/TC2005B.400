

function main ()
{
    //Ejercicio 1

    document.body.addEventListener("mousemove", function (event) //event listener (escucha que algo esta pasando)
    {
        //console.log(event.clientX, event.clientY);
        let p = document.querySelector("#mousePosition"); 
        let pos = event.clientX + " X " + event.clientY + " Y";
        p.innerHTML = pos;
    }
    );

    //Ejercicio 2
    
    let bot = document.querySelector("#botoncito");
    bot.addEventListener("click", function getFormvalue()
    {
        let p = document.querySelector("#nombrecom");
        
        let Fname = document.getElementById('fname').value;
        let Lname = document.getElementById('lname').value;
        let fullname = Fname + " " + Lname;

        p.innerHTML = fullname;
        console.log(Fname, Lname);  
        
    }
    );

    //Ejercicio 3
    let table = document.getElementById('sampleTable');
    let row = document.querySelector("#row");
    let col = document.querySelector("#col");

    row.addEventListener("click", function insertRows()
    {
        let numrows = table.rows.length;
        let numcol = table.rows[0].cells.length;

        //Crear una fila
        let newrow = document.createElement('tr');

        //Crear columnas
        for (let i = 0; i < numcol; i++)
        {
            let newcol = document.createElement('td');

            newcol.innerText = 'Row ' + (numrows+1) + ' column '  + (i+1);

            newrow.appendChild(newcol);
        }
        table.appendChild(newrow);
       
    }
    );

    col.addEventListener("click", function insertColumn()
    {
       
        let numrows = table.rows.length;
        let numcol = table.rows[0].cells.length;

        for(let i = 0; i < numrows; i++ )
        {
            let rowactual = table.rows[i];
            let newcol = document.createElement('td');

            newcol.innerText = 'Row ' + (i+1) + ' column '  + (numcol+1);

            rowactual.appendChild(newcol);
        }
    }
    );
    
    //Ejercicio 4
    
    let changebutton = document.querySelector("#changeContent");

    changebutton.addEventListener("click", function changeContent()
    {
        let table = document.getElementById("myTable");
        let coordenadas = document.getElementById("coordenadas").value;
        let nuevotexto = document.getElementById("nuevotexto").value;

        coor = coordenadas.split(",");
    
        let r = coor[0];
        let c = coor[1];

        
        let colmod = table.rows[r-1].cells[c-1] ;

        colmod.innerText = nuevotexto;
        

    }
    );



    //Ejercicio 5

    let addbotton = document.querySelector("#addcol");
    let rembotton = document.querySelector("#remcol");

    let colselect = document.getElementById("colorSelect");
    

    addbotton.addEventListener("click", function ()
    {
        
        let newcol = document.getElementById("nuevcol").value;
        let option = document.createElement("option");
        let newoptionval = document.createTextNode(newcol);

        option.appendChild(newoptionval);
        colselect.insertBefore(option, colselect.lastChild);
        
    }
    )
    rembotton.addEventListener("click", function ()
    {
        colselect.remove(colselect.selectedIndex); 
    }
    )
   

    //Ejercicio 6
    let imagen = document.querySelector("img");
    imagen.addEventListener("mouseover", function ()
    {
        let p = document.querySelector("#nuevotam");
        let w = Math.floor(Math.random() * (600-300+1)) + 300;
        let h = Math.floor(Math.random() * (600-300+1)) + 300;
        imagen.style.width = w + "px";
        imagen.style.height = h + "px";
        p.innerHTML = "El ancho es: " + w + " La altura es: " + h;
        console.log("El ancho es: ", w, "La altura es: ", h);
    }
    );
}