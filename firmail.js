//función que ejecuta script
function ejecutar() {
//constructor
    function firma(nombre, mail, puesto, num_cel, loc) {
        this.nombre = nombre;
        this.mail = mail + "@arbusta.net";
        this.puesto = puesto;
        this.num_cel = num_cel;
        this.loc = loc;

        this.ofi = function () {
            //método asignación de oficina
            if (this.loc == "R") {
                this.loc = "Rosario, Argentina";
            } else if (this.loc == "BA") {
                this.loc = "Buenos Aires, Argentina";
            } else if (this.loc == "CM") {
                this.loc = "Medellín, Colombia";
            } else if (this.loc == "MO") {
                this.loc = "Montevideo, Uruguay";
            }
        };

        //método consulta y formato de firma.
        this.generar = function () {
            //consula por campos vacíos
            if ((this.puesto == "") | (this.mail == "@arbusta.net") | (this.nombre == "") | (this.loc == "Seleccionar")) {
                alert("Debe completar todos los campos requeridos.");
            } else {
            //formato de firma
                document.getElementById("firma").innerHTML = "<font size='1'><table><tr><img src='https://i.ibb.co/syP84FL/Arbusta-Color-ICONO.png' width='81' style='float:left'><tr><td><b>" + this.nombre + "</b>" + " / " + this.puesto + "<br>" + "</td></tr><tr><td>" + this.mail + " / " + this.num_cel + "<br>" +
                    "</td></tr><tr><td><a href='https://www.arbusta.net' target='_blank'>Arbusta</a> / <b>" + this.loc + "<br>" + "</b></td></tr>" +
                    "<tr><td><a href='https://es-la.facebook.com/arbustait/' target= '_blank'><img src='./icons/iconmonstr-facebook.png'></a>" +
                    "<a href='https://twitter.com/arbustait' target='_blank'><img src='./icons/iconmonstr-twitter.png'</a>" +
                    "<a href='https://www.linkedin.com/company/arbusta' target='_blank'><img src='./icons/iconmonstr-linkedin.png'></a>" +
                    "<a href='https://github.com/ArbustaIT' target='_blank'><img src='./icons/iconmonstr-github.png'></a>" +
                    "<a href='https://www.instagram.com/arbustait/' target='_blank'><img src='./icons/iconmonstr-instagram.png'></a></td></tr></tr></table></font>";
                }
            };
        }

    //creación de objetos tomando datos del formulario.
    var firma = new firma(document.getElementById('nombre').value,
        document.getElementById('mail').value,
        document.getElementById('puesto').value,
        document.getElementById('num_cel').value,
        document.getElementById('loc').value);
    //ejecución de métodos del objeto.
    firma.ofi();
    //firma.carTel();
    firma.generar();
}